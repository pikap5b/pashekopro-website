import React, { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookie_consent_accepted';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-neutral-100 py-6 px-4 shadow-lg">
      <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
        <p className="mb-4 text-neutral-800 text-center">
          This website uses cookies to ensure you get the best experience on our website.
        </p>
        <button
          onClick={handleAccept}
          className="bg-neutral-900 text-white px-6 py-2 rounded hover:bg-neutral-800 transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 