import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex flex-col md:flex-row justify-between items-center z-50 border-t bg-background text-foreground border-border">
      <div className="text-sm mb-4 md:mb-0 md:mr-4 text-center md:text-left">
        <p>No utilizamos tus cookies para Nada, ni las almacenamos ni se las vendemos a nadie. Tus Cookies son tuyas.</p>
        <p className="font-bold text-center">😉</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded"
        >
          Aceptar
        </button>
        <button
          onClick={handleDecline}
          className="bg-background hover:bg-accent hover:text-accent-foreground border border-border font-bold py-2 px-4 rounded"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
