import React from 'react';

// 左侧侧边栏导航菜单
export const Sidebar = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: 'featured', label: '精选', icon: '⭐', color: 'yellow' },
    { id: 'recommend', label: '推荐', icon: '🔥', color: 'orange' },
    { id: 'ai', label: 'AI抖音', icon: '🤖', color: 'blue' },
    { id: 'follow', label: '关注', icon: '❤️', color: 'red' },
    { id: 'friends', label: '朋友', icon: '👥', color: 'green' },
    { id: 'my', label: '我的', icon: '👤', color: 'purple' },
    { id: 'live', label: '直播', icon: '📹', color: 'pink' },
    { id: 'cinema', label: '放映厅', icon: '🎬', color: 'indigo' },
    { id: 'drama', label: '短剧', icon: '📺', color: 'violet' },
  ];

  return (
    <aside className="w-32 border-r border-white/10 h-full flex flex-col py-4 gap-2 overflow-y-auto">
      <div className="text-xs text-white/40 mb-2 font-semibold px-4">菜单</div>

      {navItems.map((item) => {
        const isActive = currentTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onTabChange(item.id)}
            className={`relative group w-full flex flex-row items-center gap-3 py-2.5 px-4 transition-all ${
              isActive
                ? 'bg-pink-500/20 text-white'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-xl leading-none flex items-center justify-center w-6 h-6">{item.icon}</span>
            <span className={`text-sm font-medium leading-none ${isActive ? 'text-pink-400' : ''}`}>
              {item.label}
            </span>
            
            {/* 激活指示器 */}
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-500 rounded-r-full" />
            )}
          </button>
        );
      })}
    </aside>
  );
};
