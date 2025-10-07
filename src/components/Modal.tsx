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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        className="relative card-base max-w-3xl w-full overflow-hidden bg-[#0d1220] border border-white/5 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.6)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-start gap-6 flex-col md:flex-row">
          {/* Poster side */}
          <div className="relative w-full md:w-1/2 aspect-[2/3] overflow-hidden">
            <img
              src={event.images[0]}
              alt={event.title}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-[#0d1220]/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          {/* Content side */}
          <div className="flex flex-col gap-4 p-6 md:w-1/2">
            <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-white leading-tight">{event.title}</h2>
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-wide font-medium text-gray-400">
              <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              <span className="w-1 h-1 rounded-full bg-gray-500" />
              <span className="px-2 py-0.5 rounded bg-primary-500/15 text-primary-300">{event.category}</span>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed flex-1">{event.description}</p>
            <button
              onClick={() => isWatchlisted ? removeFromWatchlist(event.id) : addToWatchlist(event)}
              className={`btn-primary w-full justify-center text-sm md:text-base ${isWatchlisted ? '!bg-red-600 hover:!bg-red-500' : ''}`}
            >
              {isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}