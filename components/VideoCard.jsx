import React from 'react';

const VideoCard = ({ video }) => {
  // CoT: Defensive programming to ensure we don't crash on missing data
  if (!video) return null;

  return (
    <div className="group cursor-pointer flex flex-col gap-3">
      {/* 1. Thumbnail with fixed aspect ratio to prevent layout shift */}
      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-800">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          // CoT: Handle image load errors gracefully
          onError={(e) => { e.target.src = 'https://via.placeholder.com/640x360?text=Video+Unavailable'; }}
        />
        {/* Optional: Add duration badge here */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          12:45
        </span>
      </div>

      <div className="flex gap-3 px-1">
        {/* 2. Channel Avatar */}
        <div className="w-9 h-9 rounded-full bg-gray-700 shrink-0 overflow-hidden">
          <img 
            src={video.channelAvatar} 
            alt={video.channelName} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. Text Metadata */}
        <div className="flex flex-col pr-4">
          <h3 className="text-white font-semibold text-sm line-clamp-2 leading-tight mb-1 group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs hover:text-white transition-colors">
            {video.channelName}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">
            {video.viewCount} • 2 hours ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
