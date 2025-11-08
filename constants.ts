
import { Program, NewsArticle, GalleryImage } from './types';

export const PROGRAMS_DATA: Program[] = [
  { id: 'bsai', name: 'BS Artificial Intelligence', category: 'Undergraduate', duration: '4 Years', description: 'Explore the frontiers of AI, machine learning, and data science.' },
  { id: 'bsag', name: 'BS Agriculture', category: 'Undergraduate', duration: '4 Years', description: 'Focus on sustainable agriculture practices and modern farming technology.' },
  { id: 'bba', name: 'BBA (Hons)', category: 'Undergraduate', duration: '4 Years', description: 'Develop strong business acumen and leadership skills.' },
  { id: 'bscs', name: 'BS Computer Science', category: 'Undergraduate', duration: '4 Years', description: 'A comprehensive curriculum covering software development, algorithms, and more.' },
  { id: 'msds', name: 'MS Data Science', category: 'Graduate', duration: '2 Years', description: 'Advanced studies in data analysis, big data technologies, and predictive modeling.' },
  { id: 'mscs', name: 'MS Computer Science', category: 'Graduate', duration: '2 Years', description: 'Specialize in areas like cybersecurity, software engineering, or computer networks.' },
  { id: 'phdcs', name: 'PhD Computer Science', category: 'PhD', duration: '3-5 Years', description: 'Conduct cutting-edge research and contribute to the field of computer science.' },
];

export const NEWS_DATA: NewsArticle[] = [
  { id: 1, title: 'UOLI Hosts International Seminar on Climate Change', date: 'October 26, 2023', summary: 'Experts from around the world gathered to discuss sustainable solutions for climate challenges in the region.', imageUrl: 'https://images.unsplash.com/photo-1587825140708-df876c15bdf4?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Annual Sports Gala Concludes with Grand Ceremony', date: 'October 15, 2023', summary: 'Students showcased exceptional talent and sportsmanship throughout the week-long event.', imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'New Computer Science Labs Inaugurated', date: 'September 30, 2023', summary: 'The state-of-the-art labs are equipped with the latest technology to facilitate advanced research.', imageUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7948b4?q=80&w=600&auto=format&fit=crop' },
];

export const GALLERY_DATA: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop', alt: 'University of Loralai main campus building', category: 'Campus' },
  { id: 2, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', alt: 'Students collaborating on a project', category: 'Student Life' },
  { id: 3, src: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop', alt: 'A modern science lab', category: 'Labs' },
  { id: 4, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', alt: 'A spacious and well-lit classroom', category: 'Classrooms' },
  { id: 5, src: 'https://images.unsplash.com/photo-1532649538693-7901ca6bf858?q=80&w=800&auto=format&fit=crop', alt: 'Lush green lawns of the university campus', category: 'Campus' },
  { id: 6, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop', alt: 'Students during a cultural event', category: 'Student Life' },
  { id: 7, src: 'https://images.unsplash.com/photo-1627941595601-383234a3a6b5?q=80&w=800&auto=format&fit=crop', alt: 'An agriculture research lab', category: 'Labs' },
  { id: 8, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', alt: 'Students celebrating graduation', category: 'Campus' },
];