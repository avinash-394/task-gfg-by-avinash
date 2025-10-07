import { useState } from 'react';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '50',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
          maxWidth: '24rem',
          width: '100%',
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            color: 'rgba(107, 114, 128, 1)',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '1.25rem',
            transition: 'color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(31, 41, 55, 1)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(107, 114, 128, 1)')}
          aria-label="Close popup"
        >
          ✖
        </button>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Welcome to Our Website!
        </h2>
        <p
          style={{
            color: 'rgba(75, 85, 99, 1)',
          }}
        >
          We are glad to have you here. Explore and enjoy our content!
        </p>
      </div>
    </div>
  );
}