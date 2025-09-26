
import React from 'react';
import { Event } from '../types';
import { CalendarIcon, MapPinIcon } from './icons/Icons';

interface EventCardProps {
  event: Event;
  onSelectEvent: (id: number) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  const eventDate = new Date(event.startTime);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={() => onSelectEvent(event.id)}
    >
      <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">{event.category}</span>
            <span className="text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{event.eventType}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 flex-grow">{event.title}</h3>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            <span>{event.venueName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
