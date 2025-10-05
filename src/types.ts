export type EventCategory = typeof import('./data/events').CATEGORIES[number];
export type EventOrganizer = 'CC' | 'GFG' | 'GDSC';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  shortDescription: string;
  images: string[];
  category: EventCategory;
  organizer: EventOrganizer;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

export type WatchlistContextType = {
  watchlist: Event[];
  addToWatchlist: (event: Event) => void;
  removeFromWatchlist: (eventId: string) => void;
  isInWatchlist: (eventId: string) => boolean;
};