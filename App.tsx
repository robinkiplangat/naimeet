
import React, { useState, useEffect } from 'react';
import { Event } from './types';
import { MOCK_EVENTS } from './constants';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'app'>('landing');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (selectedEventId) {
      const event = MOCK_EVENTS.find(e => e.id === selectedEventId) || null;
      setSelectedEvent(event);
    } else {
      setSelectedEvent(null);
    }
  }, [selectedEventId]);

  const handleSelectEvent = (id: number) => {
    setView('app'); // Always switch to app view when an event is selected
    setSelectedEventId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedEventId(null);
  };

  const handleGoHome = () => {
    setView('landing');
    setSelectedEventId(null);
    window.scrollTo(0, 0);
  };

  const handleGoToEvents = () => {
    setView('app');
    setSelectedEventId(null);
    window.scrollTo(0, 0);
  };

  const renderAppContent = () => {
    if (selectedEvent) {
      return <EventDetail event={selectedEvent} onBack={handleBackToList} />;
    }
    return <EventList onSelectEvent={handleSelectEvent} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header onGoHome={handleGoHome} onGoToEvents={handleGoToEvents} currentView={view} />
      
      {view === 'landing' ? (
        <LandingPage onExploreEvents={handleGoToEvents} onSelectEvent={handleSelectEvent} />
      ) : (
        <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
          {renderAppContent()}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;
