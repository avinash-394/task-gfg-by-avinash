import { useState } from 'react';
import EventCard from '../components/EventCard';
import Modal from '../components/Modal';
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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Upcoming Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Discover and join exciting tech events</p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <label htmlFor="category" className="sr-only">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="sort" className="sr-only">Sort</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              aria-label="Sort events"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
            </select>
          </div>
        </div>

  <section aria-label="Event list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
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
  );
}