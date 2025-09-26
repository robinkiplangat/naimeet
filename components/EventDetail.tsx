
import React from 'react';
import { Event } from '../types';
import { CalendarIcon, MapPinIcon, ClockIcon, ChevronLeftIcon } from './icons/Icons';

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack }) => {
  const startDate = new Date(event.startTime);
  const endDate = new Date(event.endTime);

  const formattedDate = startDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = `${startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })} - ${endDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
      <div className="relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-slate-800 p-2 rounded-full hover:bg-white transition"
          aria-label="Back to events list"
        >
          <ChevronLeftIcon />
        </button>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
            <div>
                 <span className="text-sm font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">{event.category}</span>
                 <span className="ml-2 text-sm font-semibold bg-orange-100 text-orange-800 px-3 py-1 rounded-full">{event.eventType}</span>
            </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{event.title}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-slate-600">
            <div className="flex items-center gap-3">
                <CalendarIcon className="text-emerald-600" />
                <div>
                    <p className="font-semibold">Date</p>
                    <p>{formattedDate}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <ClockIcon className="text-emerald-600" />
                <div>
                    <p className="font-semibold">Time</p>
                    <p>{formattedTime}</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <MapPinIcon className="text-emerald-600" />
                <div>
                    <p className="font-semibold">Venue</p>
                    <p>{event.venueName}</p>
                    <p className="text-xs">{event.address}</p>
                </div>
            </div>
        </div>

        <div className="prose max-w-none text-slate-700 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">About this event</h2>
          <p>{event.description}</p>
        </div>

        {event.speakers && event.speakers.length > 0 && (
            <div className="mb-8">
                 <h2 className="text-xl font-semibold text-slate-800 mb-4">Speakers</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {event.speakers.map(speaker => (
                         <div key={speaker.name} className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg">
                             <img src={speaker.imageUrl} alt={speaker.name} className="w-16 h-16 rounded-full object-cover"/>
                             <div>
                                 <p className="font-bold text-slate-800">{speaker.name}</p>
                                 <p className="text-sm text-slate-600">{speaker.title}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-colors duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Register Now
            </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
