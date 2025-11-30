import React, { useState } from 'react';

// 左侧导航：包含视频推荐和精选，支持鼠标悬浮预览
export const LeftNavigation = ({ videos, currentIndex, onSelect }) => {
  const [hoverPreview, setHoverPreview] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (video, index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoverPreview({ video, index });
    setPreviewPosition({
      x: rect.right + 10,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoverPreview(null);
  };

  return (
    <>
      <aside className="w-64 border-r border-white/10 h-full overflow-y-auto py-4 px-3 flex flex-col gap-6">
        {/* 视频推荐区域 */}
        <div>
          <div className="text-xs font-semibold text-white/80 px-2 mb-3 flex items-center gap-2">
            <span className="text-pink-500">🔥</span>
            <span>视频推荐</span>
          </div>
          <div className="space-y-2">
            {videos.slice(0, 8).map((video, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => onSelect(index)}
                  onMouseEnter={(e) => handleMouseEnter(video, index, e)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-full flex gap-2 rounded-lg p-2 text-left transition-all ${
                    isActive
                      ? 'bg-pink-500/20 border border-pink-500/50'
                      : 'hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="relative w-16 flex-shrink-0 rounded-md overflow-hidden bg-black">
                    <img
                      src={video.cover}
                      alt={video.title}
                      className="w-full h-20 object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                        <span className="text-xl">▶</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div className="text-xs line-clamp-2 text-white/90">
                      {video.title}
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src={video.authorAvatar}
                        alt={video.authorName}
                        className="w-4 h-4 rounded-full"
                      />
                      <span className="text-[11px] text-white/50 truncate">
                        @{video.authorName}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 视频精选区域 */}
        <div>
          <div className="text-xs font-semibold text-white/80 px-2 mb-3 flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span>视频精选</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {videos.slice(8, 16).map((video, idx) => {
              const index = idx + 8;
              const isActive = index === currentIndex;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => onSelect(index)}
                  onMouseEnter={(e) => handleMouseEnter(video, index, e)}
                  onMouseLeave={handleMouseLeave}
                  className={`text-left rounded-lg overflow-hidden transition-all ${
                    isActive
                      ? 'ring-2 ring-pink-500 scale-105'
                      : 'hover:scale-105 hover:ring-1 hover:ring-white/30'
                  }`}
                >
                  <div className="relative pb-[130%] bg-black overflow-hidden">
                    <img
                      src={video.cover}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-pink-500/30 flex items-center justify-center">
                        <span className="text-2xl">▶</span>
                      </div>
                    )}
                    <div className="absolute bottom-1 right-1 text-[10px] bg-black/70 rounded-full px-1.5 py-0.5">
                      ❤ {video.likes}
                    </div>
                  </div>
                  <div className="p-1.5 bg-white/5">
                    <div className="text-[10px] line-clamp-2 text-white/80">
                      {video.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* 悬浮预览窗口 */}
      {hoverPreview && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${previewPosition.x}px`,
            top: `${previewPosition.y}px`,
          }}
        >
          <div className="bg-[#1a1a1a] border border-white/20 rounded-xl overflow-hidden shadow-2xl w-72 animate-fadeIn">
            {/* 预览视频封面 */}
            <div className="relative aspect-video bg-black">
              <img
                src={hoverPreview.video.cover}
                alt={hoverPreview.video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="text-sm font-semibold line-clamp-2">
                  {hoverPreview.video.title}
                </div>
              </div>
            </div>
            {/* 预览信息 */}
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src={hoverPreview.video.authorAvatar}
                  alt={hoverPreview.video.authorName}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold truncate">
                    @{hoverPreview.video.authorName}
                  </div>
                  <div className="text-[10px] text-white/50">
                    {hoverPreview.video.likes} 点赞
                  </div>
                </div>
              </div>
              <div className="text-xs text-white/70 line-clamp-3">
                {hoverPreview.video.description}
              </div>
              <div className="flex items-center gap-3 text-[11px] text-white/60">
                <span>💬 {hoverPreview.video.comments?.length || 0}</span>
                <span>❤ {hoverPreview.video.likes}</span>
                <span>↗ 分享</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


