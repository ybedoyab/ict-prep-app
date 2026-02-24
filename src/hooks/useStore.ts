import { useState, useEffect } from 'react';

export interface PhaseProgress {
    checkpointIndex: number;
    correctAnswers: number;
    completed: boolean;
}

export interface User {
    id: string;
    name: string;
    points: number;
    progress: Record<string, PhaseProgress>;
}

export function useStore() {
    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('ict_prep_users');
        return saved ? JSON.parse(saved) : [];
    });

    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const savedId = localStorage.getItem('ict_prep_current_user');
        if (savedId) {
            const savedUsers = localStorage.getItem('ict_prep_users');
            if (savedUsers) {
                const parsed = JSON.parse(savedUsers);
                return parsed.find((u: User) => u.id === savedId) || null;
            }
        }
        return null;
    });

    useEffect(() => {
        localStorage.setItem('ict_prep_users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('ict_prep_current_user', currentUser.id);

            // Update users array with current user changes
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

    const selectUser = (user: User | null) => {
        setCurrentUser(user);
    };

    const deleteUser = (userId: string) => {
        setUsers(prev => prev.filter(u => u.id !== userId));
        if (currentUser?.id === userId) {
            setCurrentUser(null);
        }
    };

    const updateProgress = (phase: string, correct: boolean, isFinished: boolean = false) => {
        if (!currentUser) return;

        setCurrentUser(prev => {
            if (!prev) return prev;

            const currentProgress = prev.progress[phase] || { checkpointIndex: 0, correctAnswers: 0, completed: false };

            const newProgress: PhaseProgress = {
                checkpointIndex: currentProgress.checkpointIndex + 1,
                correctAnswers: currentProgress.correctAnswers + (correct ? 1 : 0),
                completed: isFinished || currentProgress.completed
            };

            return {
                ...prev,
                points: prev.points + (correct ? 10 : 0),
                progress: {
                    ...prev.progress,
                    [phase]: newProgress
                }
            };
        });
    };

    const resetProgress = (phase: string) => {
        if (!currentUser) return;

        setCurrentUser(prev => {
            if (!prev) return prev;

            const newProgress = { ...prev.progress };
            delete newProgress[phase];

            return {
                ...prev,
                progress: newProgress
            };
        });
    }

    return {
        users,
        currentUser,
        addUser,
        selectUser,
        deleteUser,
        updateProgress,
        resetProgress
    };
}
