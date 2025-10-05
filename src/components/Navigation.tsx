import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              Events Hub
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                isActive('/') 
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Home
            </Link>

            {user && (
              <Link
                to="/watchlist"
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive('/watchlist')
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Watchlist
              </Link>
            )}

            {!user ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive('/login')
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive('/signup')
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}