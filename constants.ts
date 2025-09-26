
import { Event, Testimonial } from './types';

export const EVENT_CATEGORIES = ['All', 'AI/ML', 'FinTech', 'Cybersecurity', 'Web3', 'Mobile Dev', 'Web Dev'];
export const EVENT_TYPES = ['All', 'Conference', 'Workshop', 'Meetup'];

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: 'Nairobi AI & ML Summit 2024',
    description: 'Join us for the largest gathering of AI and Machine Learning professionals in East Africa. Explore the latest trends, network with experts, and discover the future of artificial intelligence.',
    startTime: '2024-08-15T09:00:00Z',
    endTime: '2024-08-15T17:00:00Z',
    venueName: 'iHub Nairobi',
    address: 'Senteu Plaza, Nairobi',
    imageUrl: 'https://picsum.photos/seed/ai-summit/800/600',
    registrationUrl: 'https://example.com/register/ai-summit',
    category: 'AI/ML',
    eventType: 'Conference',
    speakers: [
      { name: 'Dr. Aisha Kiprop', title: 'Lead AI Researcher, Savannah Labs', imageUrl: 'https://picsum.photos/seed/speaker1/200/200' },
      { name: 'John Omondi', title: 'CEO, Kenya AI', imageUrl: 'https://picsum.photos/seed/speaker2/200/200' }
    ]
  },
  {
    id: 2,
    title: 'FinTech Forward: The Future of Money',
    description: 'A deep dive into the innovations shaping the financial technology landscape. From mobile payments to blockchain, learn what\'s next for FinTech in Africa.',
    startTime: '2024-08-22T18:00:00Z',
    endTime: '2024-08-22T21:00:00Z',
    venueName: 'Nairobi Garage',
    address: 'Westlands, Nairobi',
    imageUrl: 'https://picsum.photos/seed/fintech-forward/800/600',
    registrationUrl: 'https://example.com/register/fintech-forward',
    category: 'FinTech',
    eventType: 'Meetup'
  },
  {
    id: 3,
    title: 'Cybersecurity Workshop: Defend Your Data',
    description: 'A hands-on workshop for developers and IT professionals. Learn practical skills to protect your applications and infrastructure from modern cyber threats.',
    startTime: '2024-09-05T10:00:00Z',
    endTime: '2024-09-05T16:00:00Z',
    venueName: 'Moringa School',
    address: 'Ngong Road, Nairobi',
    imageUrl: 'https://picsum.photos/seed/cyber-workshop/800/600',
    registrationUrl: 'https://example.com/register/cyber-workshop',
    category: 'Cybersecurity',
    eventType: 'Workshop',
    speakers: [
      { name: 'Grace Wanjiru', title: 'Senior Security Analyst', imageUrl: 'https://picsum.photos/seed/speaker3/200/200' }
    ]
  },
  {
    id: 4,
    title: 'Web3 & Decentralization Explained',
    description: 'Curious about blockchain, NFTs, and the decentralized web? This meetup is for you. We will break down the core concepts of Web3 and its potential impact.',
    startTime: '2024-08-28T18:30:00Z',
    endTime: '2024-08-28T20:30:00Z',
    venueName: 'Metta Nairobi',
    address: 'Riverside, Nairobi',
    imageUrl: 'https://picsum.photos/seed/web3-meetup/800/600',
    registrationUrl: 'https://example.com/register/web3-meetup',
    category: 'Web3',
    eventType: 'Meetup'
  },
   {
    id: 5,
    title: 'Mobile Development Conference Kenya',
    description: 'The premier event for mobile developers in Kenya. Sessions on native iOS/Android development, cross-platform frameworks like React Native and Flutter, and the latest in mobile UX/UI design.',
    startTime: '2024-09-12T09:00:00Z',
    endTime: '2024-09-13T17:00:00Z',
    venueName: 'Radisson Blu Hotel',
    address: 'Upper Hill, Nairobi',
    imageUrl: 'https://picsum.photos/seed/mobile-conf/800/600',
    registrationUrl: 'https://example.com/register/mobile-conf',
    category: 'Mobile Dev',
    eventType: 'Conference',
     speakers: [
      { name: 'David Kimani', title: 'Lead Android Engineer, Safaricom', imageUrl: 'https://picsum.photos/seed/speaker4/200/200' },
      { name: 'Fatuma Aden', title: 'iOS Developer, Africa\'s Talking', imageUrl: 'https://picsum.photos/seed/speaker5/200/200' }
    ]
  },
  {
    id: 6,
    title: 'Advanced React Patterns Workshop',
    description: 'Take your React skills to the next level. This full-day workshop covers advanced hooks, state management patterns, performance optimization, and more.',
    startTime: '2024-09-20T09:30:00Z',
    endTime: '2024-09-20T17:00:00Z',
    venueName: 'Andela Kenya',
    address: 'ACK Gardens, Nairobi',
    imageUrl: 'https://picsum.photos/seed/react-workshop/800/600',
    registrationUrl: 'https://example.com/register/react-workshop',
    category: 'Web Dev',
    eventType: 'Workshop'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    quote: "NaiMeet is indispensable for any tech professional in Nairobi. I've discovered amazing meetups I would have otherwise missed.",
    name: 'Wanjiru Njoroge',
    title: 'Senior Software Engineer, Safaricom',
    imageUrl: 'https://picsum.photos/seed/wanjiru/200/200'
  },
  {
    quote: "As a startup founder, networking is key. NaiMeet has connected me with investors, co-founders, and my first employees. A game-changer.",
    name: 'David Kimani',
    title: 'Founder & CEO, PesaFlow',
    imageUrl: 'https://picsum.photos/seed/david-k/200/200'
  }
];
