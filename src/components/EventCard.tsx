import { useState } from 'react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const [error, setError] = useState(false);
  const year = new Date(event.date).getFullYear();

  return (
    <article
      className="event-card card-base relative flex flex-col overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#0d1220] mx-auto"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${event.title}`}
    >
      {/* Poster */}
      <div className="poster relative w-full flex items-center justify-center bg-[#111827] p-1" style={{ minHeight: '180px', minWidth: '100px' }}>
        {/* Rating badge - ensure it is inside the poster and at top-left */}
        {event.rating !== undefined && (
          <span style={{position:'absolute',top:'8px',left:'8px',zIndex:2}} className="rating-badge px-2.5 py-1 text-xs font-semibold flex items-center gap-1 backdrop-blur-sm">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L24 9.588l-6 5.848 1.42 8.283L12 18.896l-7.42 4.823L6 15.436 0 9.588l8.332-1.57z"/></svg>
            {event.rating.toFixed(1)}
          </span>
        )}
        {!error ? (
          <img
            src={event.images[0]}
            alt={event.title}
            loading="lazy"
            onError={() => setError(true)}
            className="max-w-full max-h-full object-contain block"
            style={{ display: 'block', margin: 'auto' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/30 to-primary-700/30 text-primary-100 text-lg font-semibold min-h-[180px]">
            {event.title.slice(0, 10)}
          </div>
        )}
        {/* Favorite placeholder */}
        <button
          onClick={(e) => { e.stopPropagation(); /* TODO: implement favorite */ }}
          aria-label="Toggle favorite"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white grid place-items-center transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" /></svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-3">
        <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-1" title={event.title}>{event.title}</h3>
        <p className="text-[11px] sm:text-xs text-gray-300 line-clamp-2 min-h-[2.25rem]">{event.shortDescription}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] sm:text-xs text-gray-400">{year}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-primary-500/15 text-primary-300 tracking-wide font-medium line-clamp-1 max-w-[60%] text-right">{event.category}</span>
        </div>
      </div>
    </article>
  );
}