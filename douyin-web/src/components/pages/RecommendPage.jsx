import React, { useEffect, useState } from 'react';
import { CommentPanel } from '../comments/CommentPanel';

// 推荐页面：横屏视频播放，支持键盘上下切换
export const RecommendPage = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [videoLikes, setVideoLikes] = useState({});
  const [likedVideos, setLikedVideos] = useState({});

  const currentVideo = videos[currentIndex];

  // 更新评论和点赞状态
  useEffect(() => {
    if (currentVideo) {
      setComments(currentVideo.comments || []);
      if (!videoLikes[currentVideo.id]) {
        setVideoLikes((prev) => ({ ...prev, [currentVideo.id]: currentVideo.likes }));
      }
    }
  }, [currentVideo]);

  // 键盘上下键切换视频
  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);
      if (isTyping) return;

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, videos.length]);

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleToggleComments = () => {
    setShowComments((v) => !v);
  };

  const handleCommentsChange = (newComments) => {
    setComments(newComments);
  };

  const handleToggleLike = () => {
    const videoId = currentVideo.id;
    const isLiked = likedVideos[videoId];
    setLikedVideos((prev) => ({ ...prev, [videoId]: !isLiked }));
    setVideoLikes((prev) => ({
      ...prev,
      [videoId]: prev[videoId] + (isLiked ? -1 : 1),
    }));
  };

  if (!currentVideo) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-white/60">暂无视频</div>
      </div>
    );
  }

  return (
    <div className="h-full relative flex bg-gradient-to-b from-black via-gray-900 to-black">
      {/* 中间视频播放区域 */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-8">
        {/* 横屏视频播放器 */}
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            key={currentVideo.id}
            src={currentVideo.src}
            poster={currentVideo.cover}
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
          />
        </div>

        {/* 视频信息 */}
        <div className="w-full max-w-5xl mt-6 px-4">
          <div className="flex items-start gap-4">
            <img
              src={currentVideo.authorAvatar}
              alt={currentVideo.authorName}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-1">{currentVideo.title}</h3>
              <p className="text-sm text-white/70 mb-2">@{currentVideo.authorName}</p>
              <p className="text-xs text-white/60 line-clamp-2">
                {currentVideo.description}
              </p>
            </div>
          </div>
        </div>

        {/* 切换按钮 */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
              currentIndex === 0
                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                : 'bg-white/10 hover:bg-white/20 text-white hover:scale-110'
            }`}
          >
            ↑
          </button>
          <div className="text-sm text-white/60">
            {currentIndex + 1} / {videos.length}
          </div>
          <button
            onClick={goNext}
            disabled={currentIndex === videos.length - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
              currentIndex === videos.length - 1
                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                : 'bg-white/10 hover:bg-white/20 text-white hover:scale-110'
            }`}
          >
            ↓
          </button>
        </div>

        {/* 右侧操作按钮 */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          {/* 点赞 */}
          <button
            onClick={handleToggleLike}
            className="flex flex-col items-center text-xs transition-all hover:scale-110"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${
                likedVideos[currentVideo.id]
                  ? 'bg-pink-500 text-white scale-110'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {likedVideos[currentVideo.id] ? '❤️' : '🤍'}
            </div>
            <span
              className={`mt-1 ${
                likedVideos[currentVideo.id] ? 'text-pink-400 font-semibold' : 'text-white/80'
              }`}
            >
              {videoLikes[currentVideo.id] || currentVideo.likes}
            </span>
          </button>

          {/* 评论 */}
          <button
            onClick={handleToggleComments}
            className="flex flex-col items-center text-xs text-white/80 hover:text-white transition-all hover:scale-110"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl">
              💬
            </div>
            <span className="mt-1">{comments.length}</span>
          </button>

          {/* 分享 */}
          <button className="flex flex-col items-center text-xs text-white/60 hover:text-white/80 transition-all hover:scale-110">
            <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl">
              ↗️
            </div>
            <span className="mt-1">分享</span>
          </button>
        </div>
      </div>

      {/* 右侧评论面板 */}
      {showComments && (
        <div className="absolute right-0 top-0 h-full z-30">
          <CommentPanel
            isVisible={showComments}
            onToggle={handleToggleComments}
            comments={comments}
            onCommentsChange={handleCommentsChange}
            videoTitle={currentVideo.title}
          />
        </div>
      )}
    </div>
  );
};


