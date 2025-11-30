import React, { useState } from 'react';
import { VideoPlayer } from '../video/VideoPlayer';
import { CommentPanel } from '../comments/CommentPanel';

// 精选页面：网格阵列展示所有视频
export const FeaturedPage = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setComments(video.comments || []);
    setShowComments(false);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
    setShowComments(false);
  };

  const handleToggleComments = () => {
    setShowComments((v) => !v);
  };

  const handleCommentsChange = (newComments) => {
    setComments(newComments);
  };

  return (
    <div className="h-full relative">
      {/* 视频网格 */}
      <div className="h-full overflow-y-auto px-6 py-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-1">精选视频</h2>
          <p className="text-sm text-white/60">为你精选的优质内容</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-6">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => handleVideoClick(video)}
              className="group text-left bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
            >
              <div className="relative pb-[140%] bg-black overflow-hidden">
                <img
                  src={video.cover}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* 悬浮遮罩 */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pink-500/90 flex items-center justify-center text-white text-2xl">
                    ▶
                  </div>
                </div>
                {/* 点赞数 */}
                <div className="absolute bottom-2 right-2 text-[10px] bg-black/70 rounded-full px-2 py-1 backdrop-blur-sm">
                  ❤ {video.likes}
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs line-clamp-2 text-white/90 mb-2 leading-relaxed">
                  {video.title}
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={video.authorAvatar}
                    alt={video.authorName}
                    className="w-5 h-5 rounded-full"
                  />
                  <span className="text-[11px] text-white/60 truncate">
                    @{video.authorName}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 全屏视频播放器弹窗 */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm">
          {/* 关闭按钮 */}
          <button
            onClick={handleClosePlayer}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
          >
            ✕
          </button>

          {/* 视频播放器 */}
          <div className="flex items-center justify-center h-full">
            <VideoPlayer video={selectedVideo} />
          </div>

          {/* 操作按钮 */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40">
            <button
              onClick={handleToggleComments}
              className="flex flex-col items-center text-xs text-white/80 hover:text-white transition-all hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl">
                💬
              </div>
              <span className="mt-1">{comments.length}</span>
            </button>
          </div>

          {/* 评论面板 */}
          {showComments && (
            <div className="absolute right-0 top-0 h-full">
              <CommentPanel
                isVisible={showComments}
                onToggle={handleToggleComments}
                comments={comments}
                onCommentsChange={handleCommentsChange}
                videoTitle={selectedVideo.title}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};


