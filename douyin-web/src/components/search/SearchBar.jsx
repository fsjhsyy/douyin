import React, { useState } from 'react';

// 简单搜索框 + 历史记录下拉
export const SearchBar = ({ onSearch, history }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = value.trim();
    if (!keyword) return;
    onSearch(keyword);
    setValue('');
  };

  const handleClickHistory = (item) => {
    onSearch(item);
    setValue('');
  };

  return (
    <div className="relative z-[100]">
      <form
        onSubmit={handleSubmit}
        className={`flex items-center rounded-full bg-white/5 px-4 py-1.5 border transition-all ${
          focused ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-white/20'
        }`}
      >
        <span className="text-white/40 mr-2">🔍</span>
        <input
          className="bg-transparent flex-1 outline-none text-sm text-white placeholder:text-white/40"
          placeholder="搜索视频、用户或话题"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-1.5 rounded-full bg-pink-500 text-xs font-medium hover:bg-pink-600 active:scale-95 transition-all hover:shadow-lg hover:shadow-pink-500/30"
        >
          搜索
        </button>
      </form>

      {/* 搜索历史下拉 - 最高层级 */}
      {focused && history.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-[#181818] border border-pink-500/30 rounded-xl text-xs max-h-60 overflow-y-auto shadow-2xl z-[110] animate-fadeIn">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-white/60 text-[11px]">搜索历史</span>
            <span className="text-white/40 text-[10px]">{history.length} 条记录</span>
          </div>
          <div className="py-1">
            {history.map((item, index) => (
              <button
                key={item}
                type="button"
                onMouseDown={(e) => e.preventDefault()} // 防止 blur 关闭下拉
                onClick={() => handleClickHistory(item)}
                className="w-full text-left px-4 py-2.5 hover:bg-pink-500/10 transition-colors flex items-center gap-2 group"
              >
                <span className="text-white/40 text-[10px] group-hover:text-pink-400">
                  {index + 1}.
                </span>
                <span className="flex-1 text-white/80 group-hover:text-white">
                  {item}
                </span>
                <span className="text-white/20 group-hover:text-pink-400 text-[10px]">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
