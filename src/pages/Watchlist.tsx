import { useState } from 'react';
import { useWatchlist } from '../contexts/WatchlistContext';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import type { Event } from '../types';

export default function Watchlist() {
  const { watchlist } = useWatchlist();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Your watchlist is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Add some events to your watchlist to see them here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Watchlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlist.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>

        {selectedEvent && (
          <Modal
            event={selectedEvent}
            isOpen={true}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
}