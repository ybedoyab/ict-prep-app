import { useState, useEffect } from 'react';

export interface QuestionResult {
    answered: boolean;
    correct: boolean | null;
    selectedOptions: string[];
    flagged: boolean;
}

export interface AttemptRecord {
    attemptNumber: number;
    correct: number;
    incorrect: number;
    total: number;
    accuracy: number;
    timeMs: number;      // total time in ms
    finishedAt: string;   // ISO date
}

export interface PhaseProgress {
    checkpointIndex: number;
    correctAnswers: number;
    completed: boolean;
    results: Record<string, QuestionResult>;
    totalTimeMs: number;          // accumulated time across sessions
    sessionStartedAt: string | null; // ISO date when current session started
    attempts: AttemptRecord[];    // history of completed attempts
    bestTimeMs: number | null;    // fastest completed attempt
    bestAccuracy: number | null;  // highest accuracy ever
}

export interface User {
    id: string;
    name: string;
    points: number;
    progress: Record<string, PhaseProgress>;
}

function loadUsers(): User[] {
    try {
        const saved = localStorage.getItem('ict_prep_users');
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function loadCurrentUser(users: User[]): User | null {
    const savedId = localStorage.getItem('ict_prep_current_user');
    if (savedId) {
        return users.find(u => u.id === savedId) || null;
    }
    return null;
}

function defaultProgress(): PhaseProgress {
    return {
        checkpointIndex: 0,
        correctAnswers: 0,
        completed: false,
        results: {},
        totalTimeMs: 0,
        sessionStartedAt: null,
        attempts: [],
        bestTimeMs: null,
        bestAccuracy: null
    };
}

export function useStore() {
    const [users, setUsers] = useState<User[]>(() => loadUsers());
    const [currentUser, setCurrentUser] = useState<User | null>(() => loadCurrentUser(loadUsers()));

    useEffect(() => {
        localStorage.setItem('ict_prep_users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('ict_prep_current_user', currentUser.id);
            setUsers(prev => prev.map(u => u.id === currentUser.id ? currentUser : u));
        } else {
            localStorage.removeItem('ict_prep_current_user');
        }
    }, [currentUser]);

    const addUser = (name: string) => {
        const newUser: User = {
            id: crypto.randomUUID(),
            name,
            points: 0,
            progress: {}
        };
        setUsers(prev => [...prev, newUser]);
        return newUser;
    };

    const selectUser = (user: User | null) => setCurrentUser(user);

    const deleteUser = (userId: string) => {
        setUsers(prev => prev.filter(u => u.id !== userId));
        if (currentUser?.id === userId) setCurrentUser(null);
    };

    const startSession = (phase: string) => {
        if (!currentUser) return;
        setCurrentUser(prev => {
            if (!prev) return prev;
            const prog = prev.progress[phase] || defaultProgress();
            return {
                ...prev,
                progress: {
                    ...prev.progress,
                    [phase]: { ...prog, sessionStartedAt: new Date().toISOString() }
                }
            };
        });
    };

    const addSessionTime = (phase: string, elapsedMs: number) => {
        if (!currentUser) return;
        setCurrentUser(prev => {
            if (!prev) return prev;
            const prog = prev.progress[phase] || defaultProgress();
            return {
                ...prev,
                progress: {
                    ...prev.progress,
                    [phase]: {
                        ...prog,
                        totalTimeMs: (prog.totalTimeMs || 0) + elapsedMs,
                        sessionStartedAt: null
                    }
                }
            };
        });
    };

    const saveQuestionResult = (
        phase: string,
        questionId: string,
        correct: boolean,
        selectedOptions: string[],
        isFinished: boolean = false
    ) => {
        if (!currentUser) return;

        setCurrentUser(prev => {
            if (!prev) return prev;

            const currentProgress = prev.progress[phase] || defaultProgress();
            const existingResults = currentProgress.results || {};
            const previousResult = existingResults[questionId];
            const wasAlreadyAnswered = previousResult?.answered === true;

            let pointsDelta = 0;
            let correctDelta = 0;

            if (wasAlreadyAnswered) {
                if (previousResult.correct && !correct) { correctDelta = -1; pointsDelta = -10; }
                else if (!previousResult.correct && correct) { correctDelta = 1; pointsDelta = 10; }
            } else {
                correctDelta = correct ? 1 : 0;
                pointsDelta = correct ? 10 : 0;
            }

            const newResults = {
                ...existingResults,
                [questionId]: {
                    answered: true,
                    correct,
                    selectedOptions,
                    flagged: existingResults[questionId]?.flagged || false
                }
            };

            const answeredCount = Object.values(newResults).filter(r => r.answered).length;

            return {
                ...prev,
                points: Math.max(0, prev.points + pointsDelta),
                progress: {
                    ...prev.progress,
                    [phase]: {
                        ...currentProgress,
                        checkpointIndex: answeredCount,
                        correctAnswers: currentProgress.correctAnswers + correctDelta,
                        completed: isFinished || currentProgress.completed,
                        results: newResults
                    }
                }
            };
        });
    };

    const finishAttempt = (phase: string, totalQuestions: number, elapsedMs: number) => {
        if (!currentUser) return;

        setCurrentUser(prev => {
            if (!prev) return prev;
            const prog = prev.progress[phase] || defaultProgress();
            const results = prog.results || {};
            const correct = Object.values(results).filter(r => r.correct === true).length;
            const incorrect = Object.values(results).filter(r => r.correct === false).length;
            const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
            const totalTime = (prog.totalTimeMs || 0) + elapsedMs;

            const attempt: AttemptRecord = {
                attemptNumber: (prog.attempts?.length || 0) + 1,
                correct,
                incorrect,
                total: totalQuestions,
                accuracy,
                timeMs: totalTime,
                finishedAt: new Date().toISOString()
            };

            const attempts = [...(prog.attempts || []), attempt];
            const bestTimeMs = Math.min(...attempts.map(a => a.timeMs));
            const bestAccuracy = Math.max(...attempts.map(a => a.accuracy));

            return {
                ...prev,
                progress: {
                    ...prev.progress,
                    [phase]: {
                        ...prog,
                        completed: true,
                        totalTimeMs: totalTime,
                        sessionStartedAt: null,
                        attempts,
                        bestTimeMs,
                        bestAccuracy
                    }
                }
            };
        });
    };

    const retryPhase = (phase: string) => {
        if (!currentUser) return;

        setCurrentUser(prev => {
            if (!prev) return prev;
            const prog = prev.progress[phase] || defaultProgress();
            const pointsToRemove = prog.correctAnswers * 10;

            return {
                ...prev,
                points: Math.max(0, prev.points - pointsToRemove),
                progress: {
                    ...prev.progress,
                    [phase]: {
                        ...prog,
                        checkpointIndex: 0,
                        correctAnswers: 0,
                        completed: false,
                        results: {},
                        totalTimeMs: 0,
                        sessionStartedAt: new Date().toISOString()
                    }
                }
            };
        });
    };

    const toggleQuestionFlag = (phase: string, questionId: string) => {
        if (!currentUser) return;
        setCurrentUser(prev => {
            if (!prev) return prev;
            const prog = prev.progress[phase] || defaultProgress();
            const results = prog.results || {};
            const current = results[questionId] || { answered: false, correct: null, selectedOptions: [], flagged: false };
            return {
                ...prev,
                progress: {
                    ...prev.progress,
                    [phase]: {
                        ...prog,
                        results: { ...results, [questionId]: { ...current, flagged: !current.flagged } }
                    }
                }
            };
        });
    };

    const resetProgress = (phase: string) => {
        if (!currentUser) return;
        setCurrentUser(prev => {
            if (!prev) return prev;
            const phaseProgress = prev.progress[phase];
            const pointsToRemove = phaseProgress ? phaseProgress.correctAnswers * 10 : 0;
            const newProgress = { ...prev.progress };
            delete newProgress[phase];
            return { ...prev, points: Math.max(0, prev.points - pointsToRemove), progress: newProgress };
        });
    };

    const resetAllProgress = () => {
        if (!currentUser) return;
        setCurrentUser(prev => {
            if (!prev) return prev;
            return { ...prev, points: 0, progress: {} };
        });
    };

    return {
        users,
        currentUser,
        addUser,
        selectUser,
        deleteUser,
        startSession,
        addSessionTime,
        saveQuestionResult,
        finishAttempt,
        retryPhase,
        toggleQuestionFlag,
        resetProgress,
        resetAllProgress
    };
}
