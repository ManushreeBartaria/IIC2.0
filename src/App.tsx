import { useState } from 'react';
import LandingPage from './components/LandingPage';
import PoliceLogin from './components/PoliceLogin';
import PoliceDashboard from './components/PoliceDashboard';
import FIRSearch from './components/FIRSearch';
import GovernmentLogin from './components/GovernmentLogin';
import GovernmentPortal from './components/GovernmentPortal';
import CitizenLogin from './components/CitizenLogin';
import CitizenPortal from './components/CitizenPortal';
import { User } from './types';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    switch (userData.type) {
      case 'police':
        setCurrentView('police-dashboard');
        break;
      case 'government':
        setCurrentView('government-portal');
        break;
      case 'citizen':
        setCurrentView('citizen-portal');
        break;
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'police-login':
        return <PoliceLogin onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
      case 'police-dashboard':
        return <PoliceDashboard user={user!} onLogout={handleLogout} onNavigate={setCurrentView} />;
      case 'fir-search':
        return <FIRSearch user={user!} onLogout={handleLogout} onBack={() => setCurrentView('police-dashboard')} />;
      case 'government-login':
        return <GovernmentLogin onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
      case 'government-portal':
        return <GovernmentPortal user={user!} onLogout={handleLogout} />;
      case 'citizen-login':
        return <CitizenLogin onLogin={handleLogin} onBack={() => setCurrentView('landing')} />;
      case 'citizen-portal':
        return <CitizenPortal user={user!} onLogout={handleLogout} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentView()}
    </div>
  );
}

export default App;