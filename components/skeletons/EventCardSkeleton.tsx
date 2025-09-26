
import React from 'react';

const EventCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-slate-200 w-full h-48"></div>
      <div className="p-4">
        <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
        <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        </div>
        <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
