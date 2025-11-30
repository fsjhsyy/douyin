import React, { useEffect, useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { CommentPanel } from '../comments/CommentPanel';

// 整个中间区域：左边视频播放器 + 右边评论区
export const VideoPlayerSection = ({ videos, currentIndex, setCurrentIndex }) => {
  const [showComments, setShowComments] = useState(true);
  const video = videos[currentIndex];
  const [comments, setComments] = useState(video.comments);
  const [videoLikes, setVideoLikes] = useState(video.likes);
  const [isLiked, setIsLiked] = useState(false);

  // 当切换视频时，更新评论和点赞
  useEffect(() => {
    setComments(video.comments);
    setVideoLikes(video.likes);
    setIsLiked(false);
  }, [video]);

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

  const handleToggleComments = () => setShowComments((v) => !v);

  const handleCommentsChange = (next) => {
    setComments(next);
  };

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
    setVideoLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex h-full relative">
      {/* 中间播放器区域 */}
      <div className="flex-1 flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black">
        <VideoPlayer video={video} />

        {/* 右侧悬浮操作区域：点赞 + 评论 + 分享 */}
        <div className="absolute right-6 bottom-32 flex flex-col items-center gap-5 z-20">
          {/* 点赞按钮 */}
          <button
            className="flex flex-col items-center text-xs transition-all"
            onClick={handleToggleLike}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 transition-all ${
                isLiked
                  ? 'bg-pink-500 text-white scale-110'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105'
              }`}
            >
              <span className="text-xl">{isLiked ? '❤️' : '🤍'}</span>
            </div>
            <span className={isLiked ? 'text-pink-400 font-semibold' : 'text-white/80'}>
              {videoLikes}
            </span>
          </button>

          {/* 评论按钮 */}
          <button
            className="flex flex-col items-center text-xs text-white/80 hover:text-white transition-all hover:scale-105"
            onClick={handleToggleComments}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1 hover:bg-white/20">
              <span className="text-xl">💬</span>
            </div>
            <span>{comments.length}</span>
          </button>

          {/* 分享按钮 */}
          <button className="flex flex-col items-center text-xs text-white/60 hover:text-white/80 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1 hover:bg-white/20">
              <span className="text-xl">↗️</span>
            </div>
            <span>分享</span>
          </button>
        </div>
      </div>

      {/* 右侧评论面板 */}
      <CommentPanel
        isVisible={showComments}
        onToggle={handleToggleComments}
        comments={comments}
        onCommentsChange={handleCommentsChange}
        videoTitle={video.title}
      />
    </div>
  );
};
