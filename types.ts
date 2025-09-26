
export interface Event {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  venueName: string;
  address: string;
  imageUrl: string;
  registrationUrl: string;
  category: string;
  eventType: 'Conference' | 'Workshop' | 'Meetup';
  speakers?: { name: string; title: string; imageUrl: string }[];
}

export type EventFilter = {
  date: string;
  category: string;
  eventType: string;
};

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}
