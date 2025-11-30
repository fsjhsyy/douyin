import React from 'react';

// 底部精选区：瀑布流卡片
export const FeaturedSection = ({ videos, onSelect }) => {
  return (
    <section className="h-full px-6 py-3 overflow-x-hidden overflow-y-hidden">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold">抖音精选</h2>
        <span className="text-xs text-white/40">更多挑战模块，可按需扩展</span>
      </div>
      <div className="h-[calc(100%-2rem)] overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {videos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              onClick={() => onSelect(index)}
              className="text-left bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition flex flex-col"
            >
              <div className="relative pb-[130%] bg-black overflow-hidden">
                <img
                  src={video.cover}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-1 right-1 text-[10px] bg-black/60 rounded-full px-2 py-0.5">
                  ❤ {video.likes}
                </div>
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <div className="text-xs line-clamp-2 mb-1">{video.title}</div>
                <div className="flex items-center gap-2 mt-auto">
                  <img
                    src={video.authorAvatar}
                    alt={video.authorName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-[11px] text-white/60 truncate">@{video.authorName}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
