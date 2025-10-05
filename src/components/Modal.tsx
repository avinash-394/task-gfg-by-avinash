import React from 'react';
import type { Event } from '../types';
import { useWatchlist } from '../contexts/WatchlistContext';

interface ModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ event, isOpen, onClose }: ModalProps) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const isWatchlisted = isInWatchlist(event.id);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-start mb-4">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                {new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
                {event.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {event.description}
            </p>
            <button
              onClick={() => isWatchlisted ? removeFromWatchlist(event.id) : addToWatchlist(event)}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors
                ${isWatchlisted 
                  ? 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-100' 
                  : 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100'
                }`}
            >
              {isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}