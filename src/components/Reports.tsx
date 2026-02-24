import React from 'react';
import { User, AttemptRecord } from '../hooks/useStore';
import { allQuestions } from '../data';
import { ArrowLeft, Award, Target, CheckCircle2, XCircle, BarChart3, Clock, Trophy, TrendingUp, Eye } from 'lucide-react';

interface ReportsProps {
    user: User;
    onBack: () => void;
    onReviewPhase?: (phase: string) => void;
}

interface PhaseStats {
    phase: string;
    total: number;
    answered: number;
    correct: number;
    incorrect: number;
    flagged: number;
    accuracy: number;
    totalTimeMs: number;
    bestTimeMs: number | null;
    bestAccuracy: number | null;
    attempts: AttemptRecord[];
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

export function Reports({ user, onBack, onReviewPhase }: ReportsProps) {
    const phases = Array.from(new Set(allQuestions.map(q => q.phase)));

    const phaseStats: PhaseStats[] = phases.map(phase => {
        const phaseQuestions = allQuestions.filter(q => q.phase === phase);
        const progress = user.progress[phase];
        const results = progress?.results || {};
        const answered = phaseQuestions.filter(q => results[q.id]?.answered).length;
        const correct = phaseQuestions.filter(q => results[q.id]?.correct === true).length;
        const incorrect = phaseQuestions.filter(q => results[q.id]?.correct === false).length;
        const flagged = phaseQuestions.filter(q => results[q.id]?.flagged).length;
        const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        return {
            phase, total: phaseQuestions.length, answered, correct, incorrect, flagged, accuracy,
            totalTimeMs: progress?.totalTimeMs || 0,
            bestTimeMs: progress?.bestTimeMs ?? null,
            bestAccuracy: progress?.bestAccuracy ?? null,
            attempts: progress?.attempts || []
        };
    });

    const totalQuestions = phaseStats.reduce((s, p) => s + p.total, 0);
    const totalAnswered = phaseStats.reduce((s, p) => s + p.answered, 0);
    const totalCorrect = phaseStats.reduce((s, p) => s + p.correct, 0);
    const totalIncorrect = phaseStats.reduce((s, p) => s + p.incorrect, 0);
    const totalFlagged = phaseStats.reduce((s, p) => s + p.flagged, 0);
    const totalTimeMs = phaseStats.reduce((s, p) => s + p.totalTimeMs, 0);
    const totalAttempts = phaseStats.reduce((s, p) => s + p.attempts.length, 0);
    const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const overallProgress = Math.round((totalAnswered / totalQuestions) * 100);

    const getAccColor = (acc: number) => acc >= 80 ? 'text-green-600' : acc >= 60 ? 'text-amber-500' : 'text-red-500';

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-6">
            <div className="max-w-5xl mx-auto space-y-8">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="text-gray-500 hover:text-gray-700"><ArrowLeft className="w-6 h-6" /></button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Performance Report</h1>
                            <p className="text-gray-500 text-sm mt-0.5">{user.name}'s statistics</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-huawei-red font-bold text-lg">
                        <Award className="w-6 h-6" /> {user.points} pts
                    </div>
                </header>

                {/* Summary cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="card p-5 text-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <BarChart3 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{overallProgress}%</div>
                        <div className="text-xs text-gray-500 mt-1">Progress</div>
                    </div>
                    <div className="card p-5 text-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Target className="w-5 h-5 text-green-600" />
                        </div>
                        <div className={`text-2xl font-bold ${getAccColor(overallAccuracy)}`}>{overallAccuracy}%</div>
                        <div className="text-xs text-gray-500 mt-1">Accuracy</div>
                    </div>
                    <div className="card p-5 text-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Clock className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-purple-600">{totalTimeMs > 0 ? formatTime(totalTimeMs) : '—'}</div>
                        <div className="text-xs text-gray-500 mt-1">Total Time</div>
                    </div>
                    <div className="card p-5 text-center">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <TrendingUp className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="text-2xl font-bold text-amber-600">{totalAttempts}</div>
                        <div className="text-xs text-gray-500 mt-1">Attempts</div>
                    </div>
                    <div className="card p-5 text-center">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-2xl font-bold text-emerald-600">{totalCorrect}/{totalAnswered}</div>
                        <div className="text-xs text-gray-500 mt-1">Correct</div>
                    </div>
                </div>

                {/* Donut + legend */}
                <div className="card p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Overall Breakdown</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative w-48 h-48 flex-shrink-0">
                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                                {totalAnswered > 0 && (
                                    <>
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="12"
                                            strokeDasharray={`${(totalCorrect / totalQuestions) * 251.3} 251.3`} strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12"
                                            strokeDasharray={`${(totalIncorrect / totalQuestions) * 251.3} 251.3`}
                                            strokeDashoffset={`${-(totalCorrect / totalQuestions) * 251.3}`} strokeLinecap="round" />
                                    </>
                                )}
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-gray-900">{totalAnswered}</span>
                                <span className="text-xs text-gray-500">of {totalQuestions}</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-3 w-full">
                            {[
                                { color: 'bg-green-500', bg: 'bg-green-50', label: 'Correct', value: totalCorrect, cls: 'text-green-600' },
                                { color: 'bg-red-500', bg: 'bg-red-50', label: 'Incorrect', value: totalIncorrect, cls: 'text-red-500' },
                                { color: 'bg-slate-300', bg: 'bg-slate-100', label: 'Unanswered', value: totalQuestions - totalAnswered, cls: 'text-gray-500' },
                                { color: 'bg-amber-400', bg: 'bg-amber-50', label: 'Flagged', value: totalFlagged, cls: 'text-amber-500' },
                            ].map(item => (
                                <div key={item.label} className={`flex items-center justify-between p-3 ${item.bg} rounded-lg`}>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                    </div>
                                    <span className={`text-sm font-bold ${item.cls}`}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Phase accuracy bars */}
                <div className="card p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Accuracy by Phase</h2>
                    <div className="space-y-5">
                        {phaseStats.map(stat => (
                            <div key={stat.phase}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700 truncate mr-4">{stat.phase}</span>
                                    <div className="flex items-center gap-3 flex-shrink-0 text-xs">
                                        {stat.totalTimeMs > 0 && <span className="text-purple-500">{formatTime(stat.totalTimeMs)}</span>}
                                        <span className="text-gray-500">{stat.answered}/{stat.total}</span>
                                        {stat.answered > 0 && <span className={`font-bold ${getAccColor(stat.accuracy)}`}>{stat.accuracy}%</span>}
                                    </div>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden flex">
                                    {stat.total > 0 && (
                                        <>
                                            <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${(stat.correct / stat.total) * 100}%` }} />
                                            <div className="bg-red-400 h-full transition-all duration-500" style={{ width: `${(stat.incorrect / stat.total) * 100}%` }} />
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance by Question Type */}
                <div className="card p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Performance by Question Type</h2>
                    {(() => {
                        const types = ['unique', 'multi', 'boolean'] as const;
                        const typeLabels: Record<string, string> = { unique: 'Single Selection', multi: 'Multiple Selection', boolean: 'True / False' };
                        const typeColors: Record<string, { bg: string; bar: string; text: string }> = {
                            unique: { bg: 'bg-blue-50', bar: 'bg-blue-500', text: 'text-blue-600' },
                            multi: { bg: 'bg-violet-50', bar: 'bg-violet-500', text: 'text-violet-600' },
                            boolean: { bg: 'bg-cyan-50', bar: 'bg-cyan-500', text: 'text-cyan-600' }
                        };

                        const allResults: Record<string, { answered: boolean; correct: boolean | null }> = {};
                        for (const phase of Object.keys(user.progress)) {
                            const results = user.progress[phase]?.results || {};
                            for (const [qId, r] of Object.entries(results)) {
                                allResults[qId] = r;
                            }
                        }

                        const typeStats = types.map(type => {
                            const qs = allQuestions.filter(q => q.type === type);
                            const total = qs.length;
                            const answered = qs.filter(q => allResults[q.id]?.answered).length;
                            const correct = qs.filter(q => allResults[q.id]?.correct === true).length;
                            const incorrect = qs.filter(q => allResults[q.id]?.correct === false).length;
                            const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
                            return { type, label: typeLabels[type], total, answered, correct, incorrect, accuracy };
                        });

                        return (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {typeStats.map(ts => {
                                        const colors = typeColors[ts.type];
                                        return (
                                            <div key={ts.type} className={`${colors.bg} rounded-xl p-4`}>
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className={`text-sm font-bold ${colors.text}`}>{ts.label}</h4>
                                                    <span className="text-xs text-gray-500">{ts.answered}/{ts.total}</span>
                                                </div>
                                                <div className={`text-3xl font-bold ${ts.answered > 0 ? getAccColor(ts.accuracy) : 'text-gray-400'} mb-2`}>
                                                    {ts.answered > 0 ? `${ts.accuracy}%` : '—'}
                                                </div>
                                                <div className="w-full bg-white/60 rounded-full h-3 overflow-hidden flex mb-2">
                                                    {ts.total > 0 && (
                                                        <>
                                                            <div className="bg-green-500 h-full transition-all" style={{ width: `${(ts.correct / ts.total) * 100}%` }} />
                                                            <div className="bg-red-400 h-full transition-all" style={{ width: `${(ts.incorrect / ts.total) * 100}%` }} />
                                                        </>
                                                    )}
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-600">
                                                    <span className="text-green-600 font-medium">✓ {ts.correct}</span>
                                                    <span className="text-red-500 font-medium">✗ {ts.incorrect}</span>
                                                    <span className="text-gray-400">{ts.total - ts.answered} left</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* Records / Best performances */}
                <div className="card p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-amber-500" /> Personal Records
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phaseStats.filter(s => s.attempts.length > 0).map(stat => (
                            <div key={stat.phase} className="border border-slate-200 rounded-xl p-4">
                                <h4 className="font-semibold text-gray-800 text-sm mb-3">{stat.phase}</h4>
                                <div className="grid grid-cols-3 gap-3 text-center">
                                    <div>
                                        <div className="text-lg font-bold text-purple-600">
                                            {stat.bestTimeMs ? formatTime(stat.bestTimeMs) : '—'}
                                        </div>
                                        <div className="text-xs text-gray-500">Best Time</div>
                                    </div>
                                    <div>
                                        <div className={`text-lg font-bold ${getAccColor(stat.bestAccuracy || 0)}`}>
                                            {stat.bestAccuracy != null ? `${stat.bestAccuracy}%` : '—'}
                                        </div>
                                        <div className="text-xs text-gray-500">Best Accuracy</div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-700">{stat.attempts.length}</div>
                                        <div className="text-xs text-gray-500">Attempts</div>
                                    </div>
                                </div>
                                {onReviewPhase && stat.answered > 0 && (
                                    <button onClick={() => onReviewPhase(stat.phase)}
                                        className="mt-3 w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-slate-50 hover:text-huawei-red transition-colors">
                                        <Eye className="w-3.5 h-3.5" /> Review Answers
                                    </button>
                                )}
                            </div>
                        ))}
                        {phaseStats.every(s => s.attempts.length === 0) && (
                            <div className="col-span-2 text-center text-gray-400 py-8">
                                Complete a phase to see your records here.
                            </div>
                        )}
                    </div>
                </div>

                {/* Attempt history */}
                {phaseStats.some(s => s.attempts.length > 0) && (
                    <div className="card p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-500" /> Attempt History
                        </h2>
                        <div className="space-y-4">
                            {phaseStats.filter(s => s.attempts.length > 0).map(stat => (
                                <div key={stat.phase}>
                                    <h4 className="font-semibold text-gray-700 text-sm mb-2">{stat.phase}</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-slate-200 bg-slate-50">
                                                    <th className="text-left p-3 font-semibold text-gray-600">#</th>
                                                    <th className="text-center p-3 font-semibold text-gray-600">Score</th>
                                                    <th className="text-center p-3 font-semibold text-gray-600">Accuracy</th>
                                                    <th className="text-center p-3 font-semibold text-gray-600">Time</th>
                                                    <th className="text-center p-3 font-semibold text-gray-600">Date</th>
                                                    {onReviewPhase && <th className="text-center p-3 font-semibold text-gray-600"></th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {stat.attempts.map((a, i) => {
                                                    const isBestTime = a.timeMs === stat.bestTimeMs;
                                                    const isBestAcc = a.accuracy === stat.bestAccuracy;
                                                    const date = new Date(a.finishedAt);
                                                    return (
                                                        <tr key={i}
                                                            onClick={onReviewPhase ? () => onReviewPhase(stat.phase) : undefined}
                                                            className={`border-b border-slate-100 transition-all ${onReviewPhase ? 'cursor-pointer hover:bg-slate-50' : ''}`}>
                                                            <td className="p-3 font-medium text-gray-700">{a.attemptNumber}</td>
                                                            <td className="p-3 text-center">
                                                                <span className="text-green-600">{a.correct}</span>
                                                                <span className="text-gray-400"> / </span>
                                                                <span className="text-red-500">{a.incorrect}</span>
                                                                <span className="text-gray-400"> / {a.total}</span>
                                                            </td>
                                                            <td className="p-3 text-center">
                                                                <span className={`font-bold ${getAccColor(a.accuracy)}`}>{a.accuracy}%</span>
                                                                {isBestAcc && stat.attempts.length > 1 && <span className="ml-1 text-xs">🏆</span>}
                                                            </td>
                                                            <td className="p-3 text-center text-purple-600 font-medium">
                                                                {formatTime(a.timeMs)}
                                                                {isBestTime && stat.attempts.length > 1 && <span className="ml-1 text-xs">⚡</span>}
                                                            </td>
                                                            <td className="p-3 text-center text-gray-500 text-xs">
                                                                {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </td>
                                                            {onReviewPhase && (
                                                                <td className="p-3 text-center">
                                                                    <button onClick={() => onReviewPhase(stat.phase)}
                                                                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 rounded-md text-xs font-medium text-gray-600 hover:bg-huawei-50 hover:text-huawei-red transition-colors">
                                                                        <Eye className="w-3 h-3" /> Review
                                                                    </button>
                                                                </td>
                                                            )}
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Detailed table */}
                <div className="card overflow-hidden">
                    <div className="p-6 pb-0">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Detailed Statistics</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="text-left p-4 font-semibold text-gray-600">Phase</th>
                                    <th className="text-center p-4 font-semibold text-gray-600">Total</th>
                                    <th className="text-center p-4 font-semibold text-green-600">✓</th>
                                    <th className="text-center p-4 font-semibold text-red-500">✗</th>
                                    <th className="text-center p-4 font-semibold text-purple-500">Time</th>
                                    <th className="text-center p-4 font-semibold text-amber-500">🚩</th>
                                    <th className="text-center p-4 font-semibold text-gray-600">Acc.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {phaseStats.map(stat => (
                                    <tr key={stat.phase} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 font-medium text-gray-800">{stat.phase}</td>
                                        <td className="p-4 text-center text-gray-600">{stat.answered}/{stat.total}</td>
                                        <td className="p-4 text-center text-green-600 font-medium">{stat.correct}</td>
                                        <td className="p-4 text-center text-red-500 font-medium">{stat.incorrect}</td>
                                        <td className="p-4 text-center text-purple-600 font-medium">{stat.totalTimeMs > 0 ? formatTime(stat.totalTimeMs) : '—'}</td>
                                        <td className="p-4 text-center text-amber-500 font-medium">{stat.flagged}</td>
                                        <td className="p-4 text-center">
                                            {stat.answered > 0 ? <span className={`font-bold ${getAccColor(stat.accuracy)}`}>{stat.accuracy}%</span> : <span className="text-gray-400">—</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-slate-50 font-bold">
                                    <td className="p-4 text-gray-900">Total</td>
                                    <td className="p-4 text-center text-gray-900">{totalAnswered}/{totalQuestions}</td>
                                    <td className="p-4 text-center text-green-600">{totalCorrect}</td>
                                    <td className="p-4 text-center text-red-500">{totalIncorrect}</td>
                                    <td className="p-4 text-center text-purple-600">{totalTimeMs > 0 ? formatTime(totalTimeMs) : '—'}</td>
                                    <td className="p-4 text-center text-amber-500">{totalFlagged}</td>
                                    <td className="p-4 text-center"><span className={getAccColor(overallAccuracy)}>{overallAccuracy}%</span></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
