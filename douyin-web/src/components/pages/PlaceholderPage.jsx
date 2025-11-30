import React from 'react';

// 占位页面：用于尚未实现的功能
export const PlaceholderPage = ({ title, icon, description }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="text-center space-y-6 px-8 max-w-md">
        <div className="text-8xl mb-4 animate-bounce">{icon}</div>
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/60 text-lg">{description}</p>
        <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-200"></div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-xs text-white/40">
            功能开发中，敬请期待
          </div>
        </div>
      </div>
    </div>
  );
};


