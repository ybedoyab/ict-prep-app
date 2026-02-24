import React from 'react';
import { User } from '../hooks/useStore';
import { allQuestions } from '../data';
import { PlayCircle, Award, ArrowLeft, RefreshCw, BarChart3, AlertTriangle, Clock } from 'lucide-react';

interface DashboardProps {
    user: User;
    onLogout: () => void;
    onStartPhase: (phase: string) => void;
    onResetPhase: (phase: string) => void;
    onRetryPhase: (phase: string) => void;
    onResetAll: () => void;
    onViewReports: () => void;
}

function formatTime(ms: number): string {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
}

export function Dashboard({ user, onLogout, onStartPhase, onResetPhase, onRetryPhase, onResetAll, onViewReports }: DashboardProps) {
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
                    <button
                        onClick={onViewReports}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <BarChart3 className="w-4 h-4" />
                        <span className="hidden sm:inline">Reports</span>
                    </button>
                </header>

                <main>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose a track to practice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dbPhases.map(phase => {
                            const phaseQuestions = allQuestions.filter(q => q.phase === phase);
                            const progress = user.progress[phase];
                            const results = progress?.results || {};
                            const total = phaseQuestions.length;
                            const answered = phaseQuestions.filter(q => results[q.id]?.answered).length;
                            const correct = phaseQuestions.filter(q => results[q.id]?.correct === true).length;
                            const percentage = Math.round((answered / total) * 100) || 0;

                            return (
                                <div key={phase} className="card p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-1">
                                        {total} questions available in this section.
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-2">
                                            <span>Progress Breakdown</span>
                                            <div className="flex items-center gap-3">
                                                {progress?.totalTimeMs ? (
                                                    <span className="flex items-center gap-1 text-purple-600 font-bold">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {formatTime(progress.totalTimeMs)}
                                                    </span>
                                                ) : null}
                                                <span className="bg-slate-100 px-2 py-0.5 rounded-full">{percentage}%</span>
                                            </div>
                                        </div>

                                        {/* Segmented Progress Bar */}
                                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden flex shadow-inner border border-slate-200">
                                            {total > 0 && (
                                                <>
                                                    <div
                                                        title={`${correct} Correct`}
                                                        className="bg-green-500 h-full transition-all duration-500 relative"
                                                        style={{ width: `${(correct / total) * 100}%` }}
                                                    />
                                                    <div
                                                        title={`${answered - correct} Incorrect`}
                                                        className="bg-red-400 h-full transition-all duration-500"
                                                        style={{ width: `${((answered - correct) / total) * 100}%` }}
                                                    />
                                                </>
                                            )}
                                        </div>

                                        <div className="flex justify-between mt-2.5">
                                            <div className="flex gap-4">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    <span className="text-[11px] font-bold text-gray-700">{correct} <span className="text-gray-400 font-normal">Passed</span></span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                                    <span className="text-[11px] font-bold text-gray-700">{answered - correct} <span className="text-gray-400 font-normal">Failed</span></span>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-medium text-gray-400">
                                                {total - answered} remaining
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => onStartPhase(phase)}
                                            className="flex-[2] btn-primary flex items-center justify-center py-2.5 font-bold shadow-sm"
                                        >
                                            {percentage > 0 && percentage < 100 ? (
                                                <>Continue <PlayCircle className="w-4 h-4 ml-2" /></>
                                            ) : percentage === 100 ? (
                                                <>Review <PlayCircle className="w-4 h-4 ml-2" /></>
                                            ) : (
                                                <>Start Exam <PlayCircle className="w-4 h-4 ml-2" /></>
                                            )}
                                        </button>

                                        {percentage > 0 && (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        if (confirm(`🔄 RETRY PHASE?\n\nThis will clear your current answers for "${phase}" so you can start fresh.\n\nYour previous completion history (Attempts) will be kept in Reports.`)) {
                                                            onRetryPhase(phase);
                                                        }
                                                    }}
                                                    className="flex-1 px-3 rounded-xl border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
                                                    title="Retry phase (Clear answers, keep history)"
                                                >
                                                    <RefreshCw className="w-3.5 h-3.5" />
                                                    Retry
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        const conf = confirm(`⚠️ DELETE ALL DATA FOR "${phase}"?\n\nThis will permanently erase EVERYTHING for this phase:\n- Current answers & flags\n- Points earned\n- FULL HISTORY of attempts\n\nThis action cannot be undone. Are you absolutely sure?`);
                                                        if (conf) onResetPhase(phase);
                                                    }}
                                                    className="p-2.5 rounded-xl border-2 border-red-100 text-red-400 hover:bg-red-50 hover:border-red-200 transition-all"
                                                    title="Reset all phase data (Permanent deletion)"
                                                >
                                                    <RefreshCw className="w-4 h-4" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>

                {/* Danger Zone */}
                <div className="mt-12 border border-red-200 rounded-xl bg-red-50/50 p-6">
                    <div className="flex items-start gap-3 mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="text-base font-bold text-red-700">Danger Zone</h3>
                            <p className="text-sm text-red-600/80 mt-1">These actions are irreversible. All progress, points, and flags will be permanently deleted.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => {
                                if (confirm('⚠️ Are you sure you want to DELETE ALL your progress across ALL phases?\n\nThis will reset your points to 0 and erase all answers and flags.\n\nThis action CANNOT be undone.')) {
                                    onResetAll();
                                }
                            }}
                            className="px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors shadow-sm flex items-center gap-2"
                        >
                            <AlertTriangle className="w-4 h-4" />
                            Reset All Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
