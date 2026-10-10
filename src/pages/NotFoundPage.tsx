import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
        {/* Visual 404 */}
        <div className="w-20 h-20 rounded-3xl bg-amber-100/70 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
          <Bed className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight">404</span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Room or Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The page you are looking for doesn't exist or may have been moved. Let's get you back to comfort!
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            to="/"
            className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Home className="w-4 h-4 text-gold-400" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/rooms"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Bed className="w-4 h-4 text-amber-600" />
            <span>Explore Room Options</span>
          </Link>

          <Link
            to="/contact"
            className="w-full py-2 px-4 text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
          >
            Need Help? Contact Management
          </Link>
        </div>
      </div>
    </div>
  );
};
