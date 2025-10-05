import React, { createContext, useContext, useState, useEffect } from 'react';
import type { WatchlistContextType, Event } from '../types';

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<Event[]>(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (event: Event) => {
    setWatchlist((prev) => {
      if (!prev.some((e) => e.id === event.id)) {
        return [...prev, event];
      }
      return prev;
    });
  };

  const removeFromWatchlist = (eventId: string) => {
    setWatchlist((prev) => prev.filter((event) => event.id !== eventId));
  };

  const isInWatchlist = (eventId: string) => {
    return watchlist.some((event) => event.id === eventId);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};