
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Traces from './pages/Traces';
import Onboarding from './pages/Onboarding';
import { useStore } from './lib/store';

const Layout = ({ children }) => {
    const { selectedApp, apps, setSelectedApp } = useStore();
    const location = useLocation();

    // Hide layout for onboarding if needed, but let's keep it simple for now
    // If we want a clean onboarding page without header, we can check path
    if (location.pathname === '/onboarding') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-xl font-bold flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">O</span>
                            </div>
                            TeleDashboard
                        </Link>

                        <nav className="hidden md:flex gap-6">
                            <Link to="/" className={`text-sm font-medium hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'}`}>Overview</Link>
                            <Link to="/traces" className={`text-sm font-medium hover:text-blue-400 transition-colors ${location.pathname === '/traces' ? 'text-blue-400' : 'text-gray-300'}`}>Traces</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {apps.length > 0 && (
                            <select
                                className="bg-slate-800 text-sm border-none rounded-md px-3 py-1.5 focus:ring-1 focus:ring-blue-500 cursor-pointer"
                                value={selectedApp?.id}
                                onChange={(e) => setSelectedApp(apps.find(a => a.id === e.target.value))}
                            >
                                {apps.map(app => (
                                    <option key={app.id} value={app.id}>{app.name} ({app.environment})</option>
                                ))}
                            </select>
                        )}
                        <Link to="/onboarding" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
                            + New Service
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/traces" element={<Traces />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
