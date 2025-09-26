
import React, { useState, useEffect } from 'react';
import { Event } from './types';
import { MOCK_EVENTS } from './constants';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
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
    setSelectedEventId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedEventId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {selectedEvent ? (
          <EventDetail event={selectedEvent} onBack={handleBackToList} />
        ) : (
          <EventList onSelectEvent={handleSelectEvent} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
