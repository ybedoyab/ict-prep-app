import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../data/types';
import { QuestionResult } from '../hooks/useStore';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, Flag, List, ChevronLeft, ChevronRight, X, Clock, RotateCcw } from 'lucide-react';

interface QuizProps {
    phase: string;
    questions: Question[];
    savedResults: Record<string, QuestionResult>;
    totalTimeMs: number;
    isCompleted: boolean;
    onExit: (elapsedMs: number) => void;
    onAnswerQuestion: (phase: string, questionId: string, correct: boolean, selectedOptions: string[], isFinished: boolean) => void;
    onToggleFlag: (phase: string, questionId: string) => void;
    onFinishAttempt: (phase: string, totalQuestions: number, elapsedMs: number) => void;
    onRetry: (phase: string) => void;
}

function formatTime(ms: number): string {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    return `${m}:${String(s).padStart(2, '0')}`;
}

export default function Quiz({
    phase,
    questions,
    savedResults,
    totalTimeMs,
    isCompleted,
    onExit,
    onAnswerQuestion,
    onToggleFlag,
    onFinishAttempt,
    onRetry
}: QuizProps) {
    const firstUnanswered = questions.findIndex(q => !savedResults[q.id]?.answered);
    const [currentIndex, setCurrentIndex] = useState(firstUnanswered >= 0 ? firstUnanswered : 0);
    const [showNav, setShowNav] = useState(false);
    const [navFilter, setNavFilter] = useState<'all' | 'flagged' | 'unanswered' | 'incorrect'>('all');
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [showFinished, setShowFinished] = useState(false);
    const [manuallyFinished, setManuallyFinished] = useState(false);

    // Timer
    const [sessionElapsed, setSessionElapsed] = useState(0);
    const sessionStartRef = useRef(Date.now());
    const answeredCount = questions.filter(q => savedResults[q.id]?.answered).length;
    const allDone = answeredCount >= questions.length;
    const prevAllDoneRef = useRef(allDone);
    const hasSavedRef = useRef(false);

    // Any condition that means the session is over
    const sessionIsOver = isCompleted || allDone || manuallyFinished;

    useEffect(() => {
        if (sessionIsOver || showFinished) return;
        const interval = setInterval(() => {
            setSessionElapsed(Date.now() - sessionStartRef.current);
        }, 1000);
        return () => clearInterval(interval);
    }, [sessionIsOver, showFinished]);

    const totalElapsed = totalTimeMs + sessionElapsed;

    const question = questions[currentIndex];
    const result = question ? savedResults[question.id] : undefined;
    const isAnswered = result?.answered || false;

    const correctCount = questions.filter(q => savedResults[q.id]?.correct === true).length;
    const flaggedCount = questions.filter(q => savedResults[q.id]?.flagged).length;

    // Show finished screen only when all done transitions from false to true
    useEffect(() => {
        if (allDone && !prevAllDoneRef.current && !showFinished) {
            setShowFinished(true);
        }
        prevAllDoneRef.current = allDone;
    }, [allDone]);

    const goToQuestion = (idx: number) => {
        setCurrentIndex(idx);
        setSelectedOptions([]);
        setShowNav(false);
        setShowFinished(false);
    };

    const handleOptionToggle = (optionPrefix: string) => {
        if (isAnswered || !question) return;
        if (question.type === 'unique' || question.type === 'boolean') {
            setSelectedOptions([optionPrefix]);
        } else {
            setSelectedOptions(prev =>
                prev.includes(optionPrefix) ? prev.filter(p => p !== optionPrefix) : [...prev, optionPrefix]
            );
        }
    };

    const checkAnswer = () => {
        if (!question || selectedOptions.length === 0) return;
        const correctAnswers = question.correctAnswers;
        const isAnsCorrect =
            selectedOptions.length === correctAnswers.length &&
            selectedOptions.every(opt => correctAnswers.includes(opt));
        const newAnsweredCount = answeredCount + 1;
        const isAllDone = newAnsweredCount >= questions.length;
        onAnswerQuestion(phase, question.id, isAnsCorrect, [...selectedOptions], isAllDone);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) goToQuestion(currentIndex + 1);
    };
    const prevQuestion = () => {
        if (currentIndex > 0) goToQuestion(currentIndex - 1);
    };
    const toggleFlag = () => {
        if (!question) return;
        onToggleFlag(phase, question.id);
    };

    const handleExit = () => onExit(sessionElapsed);

    const handleFinishAttempt = () => {
        if (hasSavedRef.current) return;
        onFinishAttempt(phase, questions.length, sessionElapsed);
        hasSavedRef.current = true;
    };

    const handleRetry = () => {
        onRetry(phase);
        sessionStartRef.current = Date.now();
        setSessionElapsed(0);
        setCurrentIndex(0);
        setSelectedOptions([]);
        setShowFinished(false);
        setManuallyFinished(false);
        hasSavedRef.current = false;
        prevAllDoneRef.current = false;
    };

    const getFilteredQuestions = () => {
        const indices = Array.from({ length: questions.length }, (_, i) => i);
        switch (navFilter) {
            case 'flagged': return indices.filter(i => savedResults[questions[i].id]?.flagged);
            case 'unanswered': return indices.filter(i => !savedResults[questions[i].id]?.answered);
            case 'incorrect': return indices.filter(i => savedResults[questions[i].id]?.correct === false);
            default: return indices;
        }
    };

    // Finished screen
    if (showFinished) {
        const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
        const incorrectCount = answeredCount - correctCount;
        return (
            <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
                <div className="card p-8 max-w-lg w-full text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Phase Completed!</h2>
                        <p className="text-gray-500 mt-2">{phase}</p>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="bg-green-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-green-600">{correctCount}</div>
                            <div className="text-xs text-green-700">Correct</div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-red-500">{incorrectCount}</div>
                            <div className="text-xs text-red-600">Incorrect</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-blue-600">{accuracy}%</div>
                            <div className="text-xs text-blue-700">Accuracy</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-purple-600">{formatTime(totalElapsed)}</div>
                            <div className="text-xs text-purple-700">Time</div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => { handleFinishAttempt(); handleExit(); }} className="flex-1 btn-primary">
                            Save & Exit
                        </button>
                        <button onClick={() => { handleFinishAttempt(); handleRetry(); }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors shadow-md">
                            <RotateCcw className="w-4 h-4" /> Retry
                        </button>
                    </div>
                    <button onClick={() => setShowFinished(false)}
                        className="text-sm text-gray-500 hover:text-gray-700 underline">
                        Review answers
                    </button>
                </div>
            </div>
        );
    }

    if (!question) return null;

    const displayOptions = isAnswered ? (result?.selectedOptions || []) : selectedOptions;
    const isFlagged = result?.flagged || false;
    const isCorrect = result?.correct;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Side navigation panel */}
            <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-slate-200">
                        <h3 className="font-bold text-gray-900 text-lg">Questions</h3>
                        <button onClick={() => setShowNav(false)} className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                    <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                        <div>
                            <div className="font-bold text-gray-900 text-sm">{answeredCount}/{questions.length}</div>
                            <div className="text-gray-500">Answered</div>
                        </div>
                        <div>
                            <div className="font-bold text-green-600 text-sm">{correctCount}</div>
                            <div className="text-gray-500">Correct</div>
                        </div>
                        <div>
                            <div className="font-bold text-amber-500 text-sm">{flaggedCount}</div>
                            <div className="text-gray-500">Flagged</div>
                        </div>
                    </div>
                    <div className="flex border-b border-slate-200 text-xs font-medium">
                        {(['all', 'flagged', 'unanswered', 'incorrect'] as const).map(f => (
                            <button key={f} onClick={() => setNavFilter(f)}
                                className={`flex-1 py-2.5 capitalize transition-colors ${navFilter === f ? 'text-huawei-red border-b-2 border-huawei-red bg-huawei-50' : 'text-gray-500 hover:text-gray-700 hover:bg-slate-50'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        {getFilteredQuestions().map(idx => {
                            const q = questions[idx];
                            const s = savedResults[q.id];
                            const isCurrent = idx === currentIndex;
                            let dotColor = 'bg-gray-300';
                            if (s?.answered && s.correct) dotColor = 'bg-green-500';
                            else if (s?.answered && !s.correct) dotColor = 'bg-red-500';
                            return (
                                <button key={idx} onClick={() => goToQuestion(idx)}
                                    className={`w-full text-left p-3 rounded-lg mb-1 flex items-start gap-3 transition-all text-sm ${isCurrent ? 'bg-huawei-50 ring-1 ring-huawei-red/30' : 'hover:bg-slate-100'}`}>
                                    <div className="flex-shrink-0 flex items-center gap-2 pt-0.5">
                                        <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
                                        <span className="text-xs font-mono text-gray-400 w-6">{idx + 1}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`truncate ${isCurrent ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>{q.text}</p>
                                    </div>
                                    {s?.flagged && <Flag className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />}
                                </button>
                            );
                        })}
                        {getFilteredQuestions().length === 0 && (
                            <div className="text-center text-gray-400 text-sm py-8">No questions match this filter</div>
                        )}
                    </div>
                </div>
            </div>

            {showNav && <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setShowNav(false)} />}

            <div className="flex-1 p-4 md:p-6">
                <div className="max-w-3xl mx-auto">
                    <header className="flex items-center justify-between mb-6">
                        <button onClick={handleExit} className="text-gray-500 hover:text-gray-700 font-medium flex items-center">
                            <ArrowLeft className="w-5 h-5 mr-1" /> Back
                        </button>
                        <div className="flex items-center gap-3">
                            {/* Timer */}
                            <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-mono font-medium text-gray-700 shadow-sm">
                                <Clock className="w-4 h-4 text-huawei-red" />
                                {formatTime(totalElapsed)}
                            </div>
                            <div className="text-sm font-medium text-gray-500 hidden md:block">
                                {answeredCount}/{questions.length}
                            </div>
                            <button onClick={() => setShowNav(true)}
                                className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-slate-50 transition-colors shadow-sm">
                                <List className="w-4 h-4" />
                                <span className="hidden sm:inline">Questions</span>
                            </button>
                            {!showFinished && !sessionIsOver && (
                                <button onClick={() => {
                                    if (confirm('Are you sure you want to finish the exam early? All unanswered questions will be marked as incorrect.')) {
                                        setManuallyFinished(true);
                                        setShowFinished(true);
                                    }
                                }}
                                    className="flex items-center gap-2 px-3 py-2 bg-huawei-red text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-md">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span className="hidden sm:inline">Finish Exam</span>
                                </button>
                            )}
                        </div>
                    </header>

                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-gray-500">
                            {phase} • Question {currentIndex + 1} / {questions.length}
                        </div>
                        <button onClick={toggleFlag}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isFlagged ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-300' : 'bg-white text-gray-500 border border-slate-300 hover:bg-amber-50 hover:text-amber-600'}`}>
                            <Flag className={`w-4 h-4 ${isFlagged ? 'fill-amber-500' : ''}`} />
                            {isFlagged ? 'Flagged' : 'Flag'}
                        </button>
                    </div>

                    <div className="card p-6 md:p-8">
                        <div className="mb-6 flex items-center text-xs font-semibold uppercase tracking-wider text-huawei-red">
                            {question.type === 'unique' && 'Single Selection'}
                            {question.type === 'multi' && 'Multiple Selection'}
                            {question.type === 'boolean' && 'True / False'}
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 leading-snug">{question.text}</h2>
                        <div className="space-y-4">
                            {question.options.map((opt, i) => {
                                const match = opt.match(/^([A-Z])\.\s/);
                                let rawPrefix = match ? match[1] : opt;
                                if (question.type === 'boolean') rawPrefix = opt;
                                const isSelected = displayOptions.includes(rawPrefix);
                                const isActuallyCorrect = question.correctAnswers.includes(rawPrefix);
                                let styleClass = "border-gray-200 hover:border-huawei-red/50 hover:bg-slate-50";
                                if (isAnswered) {
                                    if (isActuallyCorrect) styleClass = "border-green-500 bg-green-50 z-10";
                                    else if (isSelected && !isActuallyCorrect) styleClass = "border-red-500 bg-red-50";
                                    else styleClass = "border-gray-200 opacity-50";
                                } else if (isSelected) {
                                    styleClass = "border-huawei-red bg-huawei-50 ring-1 ring-huawei-red";
                                }
                                return (
                                    <div key={i} onClick={() => handleOptionToggle(rawPrefix)}
                                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start ${styleClass} ${isAnswered ? 'cursor-default' : ''}`}>
                                        <div className="flex-1 text-gray-800">{opt}</div>
                                        {isAnswered && isActuallyCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-3 mt-0.5" />}
                                        {isAnswered && isSelected && !isActuallyCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-3 mt-0.5" />}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <div className="flex gap-2">
                                <button onClick={prevQuestion} disabled={currentIndex === 0}
                                    className={`flex items-center gap-1 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-slate-50'}`}>
                                    <ChevronLeft className="w-4 h-4" /> Prev
                                </button>
                                <button onClick={nextQuestion} disabled={currentIndex === questions.length - 1}
                                    className={`flex items-center gap-1 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium transition-colors shadow-sm ${currentIndex === questions.length - 1 ? 'opacity-40 cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-slate-50'}`}>
                                    Next <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                            {!isAnswered && (
                                <button onClick={checkAnswer} disabled={selectedOptions.length === 0}
                                    className={`btn-primary px-8 ${selectedOptions.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    Check Answer
                                </button>
                            )}
                        </div>

                        {isAnswered && (
                            <div className={`mt-6 p-4 rounded-lg flex items-start ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium">{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
                                    {!isCorrect && <p className="text-sm mt-1 opacity-90">The actual correct answer is: {question.correctAnswers.join(', ')}</p>}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom grid */}
                    <div className="mt-6 flex items-center justify-center gap-1.5 flex-wrap max-w-2xl mx-auto">
                        {questions.map((q, idx) => {
                            const s = savedResults[q.id];
                            const isCurrent = idx === currentIndex;
                            const qFlagged = s?.flagged;
                            let bg = 'bg-slate-200 text-gray-500 hover:bg-slate-300';
                            let label = '';
                            if (s?.answered && s.correct) { bg = 'bg-green-500 text-white hover:bg-green-600'; label = '✓'; }
                            else if (s?.answered && !s.correct) { bg = 'bg-red-500 text-white hover:bg-red-600'; label = '✗'; }
                            return (
                                <button key={idx} onClick={() => goToQuestion(idx)}
                                    title={`Question ${idx + 1}${qFlagged ? ' (flagged)' : ''}${s?.answered ? (s.correct ? ' ✓' : ' ✗') : ''}`}
                                    className={`relative w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${bg} ${isCurrent ? 'ring-2 ring-huawei-red ring-offset-2 scale-110' : ''}`}>
                                    {label || (idx + 1)}
                                    {qFlagged && <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white" />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
