
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onGoHome: () => void;
    onGoToEvents: () => void;
    currentView: 'landing' | 'app';
}

const Header: React.FC<HeaderProps> = ({ onGoHome, onGoToEvents, currentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        if (currentView === 'landing') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check on mount
        } else {
            setIsScrolled(true); // Always scrolled/solid in app view
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentView]);

    const isSolid = currentView === 'app' || isScrolled;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4 max-w-5xl flex justify-between items-center">
                <button onClick={onGoHome} className={`text-2xl font-bold tracking-tight focus:outline-none transition-colors ${isSolid ? 'text-emerald-700' : 'text-white'}`}>
                    NaiMeet
                </button>
                <nav className="flex items-center space-x-4 md:space-x-6">
                    <button onClick={onGoHome} className={`hidden md:block text-sm font-medium transition-colors ${isSolid ? 'text-slate-600 hover:text-emerald-600' : 'text-slate-200 hover:text-white'}`}>Home</button>
                    <button onClick={onGoToEvents} className={`hidden md:block text-sm font-medium transition-colors ${isSolid ? 'text-slate-600 hover:text-emerald-600' : 'text-slate-200 hover:text-white'}`}>Events</button>
                    <button onClick={onGoToEvents} className={`text-sm font-bold py-2 px-4 rounded-full transition-all duration-300 ${isSolid ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white/90 text-emerald-700 hover:bg-white'}`}>
                        Explore Events
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
