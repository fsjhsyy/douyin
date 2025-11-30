import React, { useEffect, useRef, useState } from 'react';

// 右侧固定评论面板（非抽屉）
export const CommentPanel = ({
  isVisible,
  onToggle,
  comments,
  onCommentsChange,
  videoTitle,
}) => {
  const [input, setInput] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (isVisible && listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [comments, isVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    const newComment = {
      id: String(Date.now()),
      avatar: 'https://placehold.co/40x40',
      userName: '游客',
      content: value,
      time: '刚刚',
      likes: 0,
      liked: false,
    };
    const next = [newComment, ...comments];
    onCommentsChange(next);
    setInput('');
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleLike = (id) => {
    const next = comments.map((c) =>
      c.id === id
        ? {
            ...c,
            liked: !c.liked,
            likes: c.likes + (c.liked ? -1 : 1),
          }
        : c,
    );
    onCommentsChange(next);
  };

  const handleHide = (id) => {
    const next = comments.map((c) => (c.id === id ? { ...c, hidden: true } : c));
    onCommentsChange(next);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="w-[380px] border-l border-white/10 flex flex-col bg-[#0d0d0d] z-10">
        {/* 评论面板头部 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div>
            <div className="text-sm font-semibold flex items-center gap-2">
              <span>评论</span>
              <span className="text-xs text-white/60">{comments.length}</span>
            </div>
            <div className="text-xs text-white/50 line-clamp-1 mt-0.5">
              {videoTitle}
            </div>
          </div>
          <button
            onClick={onToggle}
            className="text-xl leading-none text-white/70 hover:text-white transition-colors p-1"
            title="隐藏评论"
          >
            ✕
          </button>
        </div>

        {/* 评论列表 */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          {comments.length === 0 ? (
            <div className="text-center text-xs text-white/40 mt-10">
              还没有评论，快来抢沙发吧～
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 text-xs">
                <img
                  src={comment.avatar}
                  alt={comment.userName}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  {comment.hidden ? (
                    <div className="text-white/40 italic">该评论已被隐藏</div>
                  ) : (
                    <>
                      <div className="font-semibold mb-0.5">{comment.userName}</div>
                      <div className="text-white/90 leading-relaxed whitespace-pre-wrap break-words">
                        {comment.content}
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-white/40 text-[11px]">
                        <span>{comment.time}</span>
                        {/* 点赞按钮 */}
                        <button
                          type="button"
                          onClick={() => handleToggleLike(comment.id)}
                          className={`flex items-center gap-1 hover:text-pink-400 transition-all ${
                            comment.liked ? 'text-pink-500 scale-105' : ''
                          }`}
                        >
                          <span className={`text-sm ${comment.liked ? 'animate-pulse' : ''}`}>
                            {comment.liked ? '❤️' : '🤍'}
                          </span>
                          <span>{comment.likes}</span>
                        </button>
                        {/* 隐藏 */}
                        <button
                          type="button"
                          className="hover:text-white transition-colors"
                          onClick={() => handleHide(comment.id)}
                        >
                          隐藏
                        </button>
                        {/* 更多操作：复制评论 */}
                        <div className="ml-auto relative group">
                          <button
                            type="button"
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            ⋯
                          </button>
                          <div className="absolute right-0 mt-1 w-28 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <button
                              type="button"
                              className="w-full text-left text-xs px-3 py-2 hover:bg-white/5 transition-colors"
                              onClick={() => handleCopy(comment.content)}
                            >
                              复制评论
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* 底部输入框 */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-white/10 px-3 py-3 flex items-center gap-2"
        >
          <div className="flex-1 bg-white/5 rounded-full px-4 py-2 flex items-center hover:bg-white/10 transition-colors">
            <input
              className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-white/40"
              placeholder="留下你的精彩评论..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim()}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              input.trim()
                ? 'bg-pink-500 hover:bg-pink-600 text-white scale-100 hover:scale-105'
                : 'bg-white/10 text-white/40 cursor-not-allowed scale-95'
            }`}
          >
            发布
          </button>
        </form>
      </div>

      {/* 复制成功提示 */}
      {showCopied && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white text-black text-xs z-50 shadow-lg animate-fadeIn">
          ✓ 复制成功
        </div>
      )}
    </>
  );
};

