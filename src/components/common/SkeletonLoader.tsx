import React from 'react';

export const RoomCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft animate-pulse flex flex-col">
    <div className="h-56 bg-slate-200 w-full" />
    <div className="p-6 flex flex-col flex-1 space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-6 bg-slate-200 rounded-md w-24" />
        <div className="h-6 bg-slate-200 rounded-full w-20" />
      </div>
      <div className="h-4 bg-slate-200 rounded w-3/4" />
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-slate-200 rounded w-full" />
        <div className="h-3 bg-slate-200 rounded w-5/6" />
        <div className="h-3 bg-slate-200 rounded w-2/3" />
      </div>
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div>
          <div className="h-3 bg-slate-200 rounded w-16 mb-1" />
          <div className="h-6 bg-slate-200 rounded w-28" />
        </div>
        <div className="h-10 bg-slate-200 rounded-xl w-32" />
      </div>
    </div>
  </div>
);

export const GalleryItemSkeleton: React.FC = () => (
  <div className="rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3] animate-pulse relative">
    <div className="absolute bottom-3 left-3 right-3 h-4 bg-slate-300/80 rounded" />
  </div>
);

export const FacilityCardSkeleton: React.FC = () => (
  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft animate-pulse space-y-3">
    <div className="w-12 h-12 rounded-xl bg-slate-200" />
    <div className="h-5 bg-slate-200 rounded w-1/2" />
    <div className="h-3 bg-slate-200 rounded w-full" />
    <div className="h-3 bg-slate-200 rounded w-4/5" />
    <div className="h-4 bg-slate-200 rounded-full w-24 pt-2" />
  </div>
);

export const GenericSkeleton: React.FC<{ className?: string }> = ({ className = 'h-6 bg-slate-200 rounded' }) => (
  <div className={`animate-pulse ${className}`} />
);
