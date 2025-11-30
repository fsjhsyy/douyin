import React from 'react';
import { SearchBar } from '../search/SearchBar';
import douyinLogo from './抖音.png';

// 顶部导航栏：左边 Logo，中间搜索框，右边登录/注册按钮
export const Header = ({ onSearch, history }) => {
  return (
    <header className="h-16 border-b border-white/10 flex items-center px-6 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg overflow-hidden">
          <img
            src={douyinLogo}
            alt="抖音"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-lg">抖音</span>
      </div>

      <div className="flex-1 max-w-xl">
        <SearchBar onSearch={onSearch} history={history} />
      </div>

      <div className="flex items-center gap-4 text-sm text-white/70">
        <button className="px-3 py-1 rounded-full border border-white/20 hover:bg-white/10">
          注册
        </button>
        <button className="px-3 py-1 rounded-full bg-white text-black hover:bg-gray-200">
          登录
        </button>
      </div>
    </header>
  );
};
