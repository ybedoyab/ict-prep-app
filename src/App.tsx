import React, { useState } from 'react';
import { useStore } from './hooks/useStore';
import { UserSelection } from './components/UserSelection';
import { Dashboard } from './components/Dashboard';
import { Quiz } from './components/Quiz';
import { allQuestions } from './data';

type AppState = 'AUTH' | 'DASHBOARD' | 'QUIZ';

function App() {
  const { users, currentUser, addUser, selectUser, deleteUser, updateProgress, resetProgress } = useStore();
  const [appState, setAppState] = useState<AppState>('AUTH');
  const [activePhase, setActivePhase] = useState<string | null>(null);

  // Synchronize internal state with presence of currentUser
  React.useEffect(() => {
    if (!currentUser && appState !== 'AUTH') {
      setAppState('AUTH');
    } else if (currentUser && appState === 'AUTH') {
      setAppState('DASHBOARD');
    }
  }, [currentUser, appState]);

  const handleStartPhase = (phase: string) => {
    setActivePhase(phase);
    setAppState('QUIZ');
  };

  const handleExitQuiz = () => {
    setActivePhase(null);
    setAppState('DASHBOARD');
  };

  if (appState === 'AUTH' || !currentUser) {
    return (
      <UserSelection
        users={users}
        onAdd={(name) => {
          const u = addUser(name);
          selectUser(u);
        }}
        onSelect={selectUser}
        onDelete={deleteUser}
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
      />
    );
  }

  if (appState === 'QUIZ' && activePhase) {
    const phaseQuestions = allQuestions.filter(q => q.phase === activePhase);
    const progress = currentUser.progress[activePhase];
    const startIndex = progress ? progress.checkpointIndex : 0;

    return (
      <Quiz
        phase={activePhase}
        questions={phaseQuestions}
        startIndex={startIndex}
        onExit={handleExitQuiz}
        onUpdateProgress={updateProgress}
      />
    );
  }

  return null;
}

export default App;
