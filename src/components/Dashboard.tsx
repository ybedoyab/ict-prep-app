import React from 'react';
import { User } from '../hooks/useStore';
import { allQuestions } from '../data';
import { PlayCircle, Award, ArrowLeft, RefreshCw } from 'lucide-react';

interface DashboardProps {
    user: User;
    onLogout: () => void;
    onStartPhase: (phase: string) => void;
    onResetPhase: (phase: string) => void;
}

export function Dashboard({ user, onLogout, onStartPhase, onResetPhase }: DashboardProps) {
    // Aggregate distinct phases
    const dbPhases = Array.from(new Set(allQuestions.map(q => q.phase)));

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button onClick={onLogout} className="text-gray-500 hover:text-gray-700">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}</h1>
                            <div className="flex items-center text-huawei-red font-medium mt-1">
                                <Award className="w-5 h-5 mr-1" />
                                <span>{user.points} Total Points</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose a track to practice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dbPhases.map(phase => {
                            const phaseQuestions = allQuestions.filter(q => q.phase === phase);
                            const progress = user.progress[phase];
                            const total = phaseQuestions.length;
                            const answered = progress?.checkpointIndex || 0;
                            const percentage = Math.round((answered / total) * 100) || 0;

                            return (
                                <div key={phase} className="card p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-1">
                                        {total} questions available in this section.
                                    </p>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                                            <span>Progress</span>
                                            <span>{percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-huawei-red h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                        {progress && progress.checkpointIndex > 0 && (
                                            <p className="text-xs text-gray-500 mt-2">
                                                {progress.correctAnswers} / {progress.checkpointIndex} correct so far
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => onStartPhase(phase)}
                                            className="flex-1 btn-primary flex items-center justify-center py-2.5"
                                        >
                                            {percentage > 0 && percentage < 100 ? (
                                                <>Continue <PlayCircle className="w-4 h-4 ml-2" /></>
                                            ) : percentage === 100 ? (
                                                <>Review <PlayCircle className="w-4 h-4 ml-2" /></>
                                            ) : (
                                                <>Start <PlayCircle className="w-4 h-4 ml-2" /></>
                                            )}
                                        </button>
                                        {percentage > 0 && (
                                            <button
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to reset your progress for this phase?')) {
                                                        onResetPhase(phase);
                                                    }
                                                }}
                                                className="p-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                                                title="Reset progress"
                                            >
                                                <RefreshCw className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
}
