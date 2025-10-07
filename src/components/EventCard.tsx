import { useState } from 'react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  const [imageError, setImageError] = useState(false);
  const year = new Date(event.date).getFullYear();

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className="group relative flex flex-col text-center bg-card rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
      style={{
        backgroundImage: 'linear-gradient(45deg, hsl(var(--border)/0.2) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--border)/0.2) 25%, transparent 25%)',
        backgroundSize: '20px 20px',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View details for ${event.title}`}
    >
      {/* Poster area */}
      <div className="relative p-4 flex-grow flex flex-col items-center">
        <figure className="relative w-32 h-32 mx-auto mb-6">
          <div className="relative w-full h-full max-w-[128px] max-h-[128px] rounded-full border-4 border-primary/30 shadow-lg flex-shrink-0 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:scale-105">
            {imageError ? (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center font-montserrat text-4xl font-bold text-primary">
                {event.title[0]}
              </div>
            ) : (
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={handleImageError}
              />
            )}
          </div>
        </figure>

        <div className="flex-grow flex flex-col justify-center">
          <h2 className="font-montserrat text-xl font-bold text-foreground">
            {event.title}
          </h2>
          <p className="text-primary font-semibold mt-1">
            Release: {year}
          </p>
          <p className="text-muted-foreground text-xs mt-3 italic min-h-[2.5rem] px-2">
            "{event.shortDescription}"
          </p>
        </div>
      </div>

      {/* Hover effect */}
      <div className="w-0 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out mx-auto"></div>
    </div>
  );
}