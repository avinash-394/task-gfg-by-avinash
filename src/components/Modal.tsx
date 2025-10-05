// ...existing code...
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
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="modal-title" className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
            aria-label="Close modal"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
            <div className="w-full max-w-xs aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-full object-cover max-h-40 sm:max-h-48 md:max-h-56 rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 w-full">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-semibold">
                {event.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2 justify-center">
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-2">
              {event.description}
            </p>
            <button
              onClick={() => isWatchlisted ? removeFromWatchlist(event.id) : addToWatchlist(event)}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500
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