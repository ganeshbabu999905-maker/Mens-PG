import React, { useEffect, useState } from 'react';

interface InitialLoaderProps {
  onLoaded?: () => void;
  minDurationMs?: number;
}

export const InitialLoader: React.FC<InitialLoaderProps> = ({
  onLoaded,
  minDurationMs = 700 // fast & lightweight initial brand introduction
}) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user already saw the initial loader in this session to prevent repeated slow screens
    const hasSeen = sessionStorage.getItem('gmh_splash_seen');
    const delay = hasSeen ? 250 : minDurationMs;

    const timer = setTimeout(() => {
      setFading(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('gmh_splash_seen', 'true');
        if (onLoaded) onLoaded();
      }, 350); // match transition duration

      return () => clearTimeout(hideTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [minDurationMs, onLoaded]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Ganesh Mens Hostel application"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 text-white transition-opacity duration-300 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-navy-700/30 blur-3xl -z-10 animate-pulse-subtle pointer-events-none" />

      {/* Branded Logo & Animated Bed/Home Icon */}
      <div className="flex flex-col items-center gap-6 px-6 text-center max-w-sm">
        <div className="relative">
          {/* Animated circular aura */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-gold-500/20 to-navy-700 border border-gold-500/30 flex items-center justify-center shadow-2xl relative overflow-hidden">
            {/* Animated SVG Bed / Home */}
            <svg
              className="w-10 h-10 text-gold-400 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Roof / House frame */}
              <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
              {/* Bed inside */}
              <path d="M7 16v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
              <circle cx="10" cy="14" r="1" fill="currentColor" />
              <path d="M6 18h12" />
            </svg>
          </div>

          {/* Spinner ring around icon */}
          <div className="absolute -inset-1.5 rounded-2xl border-2 border-transparent border-t-gold-400 border-r-gold-400/40 animate-spin -z-10" />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
            Ganesh Mens Hostel
          </h1>
          <p className="text-xs uppercase tracking-widest text-gold-400/90 font-medium">
            Your Comfort, Our Priority
          </p>
        </div>

        {/* Loading message & indicator */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <p className="text-sm text-slate-300 font-medium tracking-wide">
              Preparing Your Comfortable Stay...
            </p>
          </div>

          {/* Minimal progress bar */}
          <div className="w-48 h-1 bg-navy-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold-500 to-amber-300 rounded-full w-full animate-[progress_1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
