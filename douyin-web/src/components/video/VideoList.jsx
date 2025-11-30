import React, { useEffect, useRef } from 'react';

// 右侧推荐视频列表
export const VideoList = ({ videos, currentIndex, onSelect }) => {
  const listRef = useRef(null);

  // 当前视频变化时，让高亮项自动滚动到可视区域
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector(
      `[data-index="${currentIndex}"]`,
    );
    if (active) {
      const parentRect = listRef.current.getBoundingClientRect();
      const rect = active.getBoundingClientRect();
      if (rect.top < parentRect.top || rect.bottom > parentRect.bottom) {
        active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  return (
    <aside className="w-72 border-l border-white/10 h-full overflow-y-auto py-4 px-2 hidden lg:block">
      <div className="text-xs text-white/60 px-2 mb-3">推荐视频</div>
      <div ref={listRef} className="space-y-3">
        {videos.map((video, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={video.id}
              type="button"
              data-index={index}
              onClick={() => onSelect(index)}
              className={`w-full flex gap-2 rounded-xl p-1.5 text-left hover:bg-white/10 ${
                isActive ? 'bg-white/10' : ''
              }`}
            >
              <div className="relative w-20 flex-shrink-0 rounded-lg overflow-hidden bg-black">
                <img
                  src={video.cover}
                  alt={video.title}
                  className="w-full h-[72px] object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-xs line-clamp-2">{video.title}</div>
                <div className="text-[11px] text-white/50">@{video.authorName}</div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
