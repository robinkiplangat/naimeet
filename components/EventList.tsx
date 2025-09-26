
import React, { useState, useEffect, useMemo } from 'react';
import { Event, EventFilter } from '../types';
import { MOCK_EVENTS, EVENT_CATEGORIES, EVENT_TYPES } from '../constants';
import EventCard from './EventCard';
import EventCardSkeleton from './skeletons/EventCardSkeleton';
import { SearchIcon, FilterIcon } from './icons/Icons';

interface EventListProps {
  onSelectEvent: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ onSelectEvent }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<EventFilter>({
    date: '',
    category: 'All',
    eventType: 'All',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchEvents = () => {
      setLoading(true);
      setError(null);
      setTimeout(() => {
        try {
          // Simulate API call
          setEvents(MOCK_EVENTS);
        } catch (e) {
          setError('Failed to fetch events. Please try again later.');
        } finally {
          setLoading(false);
        }
      }, 1000); // Simulate network delay
    };

    fetchEvents();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredEvents = useMemo(() => {
    return events
      .filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(event =>
        filters.category === 'All' || event.category === filters.category
      )
      .filter(event =>
        filters.eventType === 'All' || event.eventType === filters.eventType
      )
      .filter(event => {
        if (!filters.date) return true;
        const eventDate = new Date(event.startTime).toISOString().split('T')[0];
        return eventDate === filters.date;
      });
  }, [events, searchQuery, filters]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => <EventCardSkeleton key={i} />)}
        </div>
      );
    }

    if (error) {
      return <div className="text-center py-10 px-4 bg-red-50 text-red-700 rounded-lg">{error}</div>;
    }

    if (filteredEvents.length === 0) {
      return (
        <div className="text-center py-10 px-4 bg-slate-100 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-700">No Events Found</h3>
          <p className="text-slate-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
        ))}
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search events by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </div>
        </div>
         <div className="mt-4 flex justify-end">
            <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 transition"
            >
                <FilterIcon />
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
            </button>
        </div>
      </div>
      
      {showFilters && (
        <div className="p-4 bg-white rounded-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-600 mb-1">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
                className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-600 mb-1">Category</label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-emerald-500"
              >
                {EVENT_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-slate-600 mb-1">Event Type</label>
              <select
                id="eventType"
                name="eventType"
                value={filters.eventType}
                onChange={handleFilterChange}
                className="w-full p-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-emerald-500"
              >
                {EVENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
            </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
};

export default EventList;
