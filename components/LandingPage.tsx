
import React from 'react';
import { MOCK_EVENTS, MOCK_TESTIMONIALS } from '../constants';
import EventCard from './EventCard';

interface LandingPageProps {
  onExploreEvents: () => void;
  onSelectEvent: (id: number) => void;
}

const Section: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-5xl">
      {children}
    </div>
  </section>
);

const Hero: React.FC<{ onExploreEvents: () => void }> = ({ onExploreEvents }) => (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/nairobi-skyline/1920/1080')" }}></div>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div className="relative z-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Discover Nairobi's<br />Thriving Tech Scene
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
                Your curated guide to the most exciting tech conferences, workshops, and meetups in the heart of Kenya's Silicon Savannah.
            </p>
            <button
                onClick={onExploreEvents}
                className="mt-8 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
                Explore Events
            </button>
        </div>
    </div>
);

const Stats: React.FC = () => (
    <Section className="bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-600">50+</h3>
                <p className="mt-2 text-slate-600">Events Every Month</p>
            </div>
            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-600">10k+</h3>
                <p className="mt-2 text-slate-600">Community Members</p>
            </div>
            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-emerald-600">6</h3>
                <p className="mt-2 text-slate-600">Major Tech Categories</p>
            </div>
        </div>
    </Section>
);

const FeaturedEvents: React.FC<{ onSelectEvent: (id: number) => void, onExploreEvents: () => void }> = ({ onSelectEvent, onExploreEvents }) => (
    <Section id="events">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular & Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_EVENTS.slice(0, 3).map(event => (
                <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
            ))}
        </div>
        <div className="text-center mt-12">
            <button onClick={onExploreEvents} className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-colors">
                View All Events
            </button>
        </div>
    </Section>
);

const Testimonials: React.FC = () => (
    <Section className="bg-slate-100" id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_TESTIMONIALS.map(testimonial => (
                <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-md">
                    <p className="text-slate-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                        <div>
                            <p className="font-bold text-slate-800">{testimonial.name}</p>
                            <p className="text-sm text-slate-500">{testimonial.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const LandingPage: React.FC<LandingPageProps> = ({ onExploreEvents, onSelectEvent }) => {
    return (
        <div className="bg-white">
            <Hero onExploreEvents={onExploreEvents} />
            <Stats />
            <FeaturedEvents onSelectEvent={onSelectEvent} onExploreEvents={onExploreEvents} />
            <Testimonials />
        </div>
    );
};

export default LandingPage;
