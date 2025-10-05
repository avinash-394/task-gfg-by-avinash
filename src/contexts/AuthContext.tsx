import { createContext, useContext, useState, useEffect } from 'react';
import type { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (!savedUser) return null;
      const parsedUser = JSON.parse(savedUser);
      // Validate the parsed user has the correct shape
      if (
        typeof parsedUser === 'object' &&
        parsedUser !== null &&
        'id' in parsedUser &&
        'email' in parsedUser &&
        'name' in parsedUser
      ) {
        return parsedUser as User;
      }
      return null;
    } catch (error) {
      // If there's any error parsing the stored data, remove it and return null
      localStorage.removeItem('user');
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Failed to save user data to localStorage:', error);
    }
  }, [user]);

  const login = async (email: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    setUser(mockUser);
  };

  const signup = async (email: string, name: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};