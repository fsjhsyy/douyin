import React, { useEffect, useRef, useState } from 'react';

// 评论抽屉：右侧滑出，支持点赞、隐藏、复制评论
export const CommentDrawer = ({ isOpen, onClose, comments, onCommentsChange }) => {
  const [input, setInput] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [isOpen]);

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

  return (
    <>
      {/* 抽屉本体 */}
      <div
        className={`fixed top-0 right-0 h-full w-[360px] bg-[#111] border-l border-white/10 transform transition-transform duration-300 z-30 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 抽屉头部 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-sm font-semibold">评论 {comments.length}</div>
          <button
            onClick={onClose}
            className="text-xl leading-none text-white/70 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* 评论列表 */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 text-xs">
              <img
                src={comment.avatar}
                alt={comment.userName}
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div className="flex-1">
                {comment.hidden ? (
                  <div className="text-white/40 italic">该评论已被隐藏</div>
                ) : (
                  <>
                    <div className="font-semibold mb-0.5">{comment.userName}</div>
                    <div className="text-white leading-snug whitespace-pre-wrap break-words">
                      {comment.content}
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-white/40">
                      <span>{comment.time}</span>
                      {/* 点赞按钮 */}
                      <button
                        type="button"
                        onClick={() => handleToggleLike(comment.id)}
                        className={`flex items-center gap-1 hover:text-pink-400 transition-transform ${
                          comment.liked ? 'scale-110 text-pink-500' : ''
                        }`}
                      >
                        <span
                          className={`text-base ${
                            comment.liked ? 'text-pink-500 heart-pop' : 'text-white/40'
                          }`}
                        >
                          {comment.liked ? '❤' : '♡'}
                        </span>
                        <span>{comment.likes}</span>
                      </button>
                      {/* 隐藏 */}
                      <button
                        type="button"
                        className="hover:text-white"
                        onClick={() => handleHide(comment.id)}
                      >
                        隐藏
                      </button>
                      {/* 更多操作：复制评论 */}
                      <div className="ml-auto relative">
                        <details className="group">
                          <summary className="list-none cursor-pointer select-none text-white/60 hover:text-white">
                            ···
                          </summary>
                          <div className="absolute right-0 mt-1 w-28 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-lg z-10">
                            <button
                              type="button"
                              className="w-full text-left text-xs px-3 py-2 hover:bg-white/5"
                              onClick={() => handleCopy(comment.content)}
                            >
                              复制评论
                            </button>
                          </div>
                        </details>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {comments.length === 0 && (
            <div className="text-center text-xs text-white/40 mt-10">
              还没有评论，快来抢沙发吧～
            </div>
          )}
        </div>

        {/* 底部输入框 */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-white/10 px-3 py-2 flex items-center gap-2"
        >
          <div className="flex-1 bg-white/5 rounded-full px-3 py-1.5 flex items-center">
            <input
              className="flex-1 bg-transparent outline-none text-xs text-white placeholder:text-white/40"
              placeholder="留下你的精彩评论"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim()}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              input.trim()
                ? 'bg-pink-500 hover:bg-pink-600 text-white'
                : 'bg-white/10 text-white/40 cursor-not-allowed'
            }`}
          >
            发布
          </button>
        </form>
      </div>

      {/* 复制成功提示 */}
      {showCopied && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-3 py-2 rounded-full bg-white text-black text-xs z-40 shadow-lg">
          复制成功
        </div>
      )}
    </>
  );
};
