import React from "react";

const ServiceCardSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Image Skeleton */}
          <div className="h-56 w-full bg-gray-200" />

          {/* Content Skeleton */}
          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div className="h-6 w-24 rounded-full bg-gray-200" />
              <div className="h-4 w-20 rounded bg-gray-200" />
            </div>

            <div className="h-6 w-3/4 rounded bg-gray-200" />

            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
            </div>

            {/* Features Skeleton */}
            <div className="space-y-3">
              <div className="h-4 w-4/5 rounded bg-gray-200" />
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gray-200" />
            </div>

            {/* Bottom Skeleton */}
            <div className="flex items-end justify-between border-t border-gray-100 pt-4">
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-gray-200" />
                <div className="h-6 w-24 rounded bg-gray-200" />
              </div>

              <div className="h-10 w-32 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSkeleton;