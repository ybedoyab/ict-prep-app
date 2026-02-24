import React, { useState } from 'react';
import { useStore } from './hooks/useStore';
import { UserSelection } from './components/UserSelection';
import { Dashboard } from './components/Dashboard';
import Quiz from './components/Quiz';
import { Reports } from './components/Reports';
import { allQuestions } from './data';

type AppState = 'AUTH' | 'DASHBOARD' | 'QUIZ' | 'REPORTS';

function App() {
  const {
    users, currentUser, addUser, selectUser, deleteUser,
    startSession, addSessionTime, saveQuestionResult, finishAttempt, retryPhase,
    toggleQuestionFlag, resetProgress, resetAllProgress
  } = useStore();
  const [appState, setAppState] = useState<AppState>('AUTH');
  const [activePhase, setActivePhase] = useState<string | null>(null);

  React.useEffect(() => {
    if (!currentUser && appState !== 'AUTH') setAppState('AUTH');
    else if (currentUser && appState === 'AUTH') setAppState('DASHBOARD');
  }, [currentUser, appState]);

  const handleStartPhase = (phase: string) => {
    startSession(phase);
    setActivePhase(phase);
    setAppState('QUIZ');
  };

  const handleExitQuiz = (elapsedMs: number) => {
    if (activePhase) addSessionTime(activePhase, elapsedMs);
    setActivePhase(null);
    setAppState('DASHBOARD');
  };

  if (appState === 'AUTH' || !currentUser) {
    return (
      <UserSelection
        users={users}
        onAdd={(name) => { const u = addUser(name); selectUser(u); }}
        onSelect={selectUser}
        onDelete={deleteUser}
      />
    );
  }

  if (appState === 'REPORTS') {
    return <Reports user={currentUser} onBack={() => setAppState('DASHBOARD')} onReviewPhase={(phase) => handleStartPhase(phase)} />;
  }

  if (appState === 'QUIZ' && activePhase) {
    const phaseQuestions = allQuestions.filter(q => q.phase === activePhase);
    const progress = currentUser.progress[activePhase];
    const savedResults = progress?.results || {};
    const totalTimeMs = progress?.totalTimeMs || 0;
    const isCompleted = progress?.completed || false;

    return (
      <Quiz
        phase={activePhase}
        questions={phaseQuestions}
        savedResults={savedResults}
        totalTimeMs={totalTimeMs}
        isCompleted={isCompleted}
        onExit={handleExitQuiz}
        onAnswerQuestion={saveQuestionResult}
        onToggleFlag={toggleQuestionFlag}
        onFinishAttempt={finishAttempt}
        onRetry={retryPhase}
      />
    );
  }

  if (appState === 'DASHBOARD') {
    return (
      <Dashboard
        user={currentUser}
        onLogout={() => selectUser(null)}
        onStartPhase={handleStartPhase}
        onResetPhase={resetProgress}
        onRetryPhase={retryPhase}
        onResetAll={resetAllProgress}
        onViewReports={() => setAppState('REPORTS')}
      />
    );
  }

  return null;
}

export default App;
