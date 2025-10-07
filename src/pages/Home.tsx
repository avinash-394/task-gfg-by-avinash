import { useState } from 'react';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
import WelcomePopup from '../components/WelcomePopup';
import type { Event } from '../types';
import EVENTS, { CATEGORIES } from '../data/events';

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const filteredEvents = EVENTS.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <WelcomePopup />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 mb-2 tracking-tight">Upcoming Events</h1>
            <p className="text-lg text-gray-400">Discover and join exciting tech events</p>
          </header>

          <div className="bg-[#181e2c] rounded-xl shadow-md p-4 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:gap-4">
              <label htmlFor="category" className="font-semibold text-xs text-gray-400 mb-1 sm:mb-0">Category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-700 bg-[#232a3a] text-gray-100 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary w-full sm:w-auto"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:gap-4">
              <label htmlFor="sort" className="font-semibold text-xs text-gray-400 mb-1 sm:mb-0">Sort</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                className="px-4 py-2 rounded-lg border border-gray-700 bg-[#232a3a] text-gray-100 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary w-full sm:w-auto"
                aria-label="Sort events"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>

          <section aria-label="Event list" className="card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {sortedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </section>

          {selectedEvent && (
            <Modal
              event={selectedEvent}
              isOpen={true}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </section>
      </main>
    </>
  );
}