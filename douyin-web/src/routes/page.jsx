import React, { useEffect, useState } from 'react';
import { fetchVideoList } from '../mock/videos';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { FeaturedPage } from '../components/pages/FeaturedPage';
import { RecommendPage } from '../components/pages/RecommendPage';
import { PlaceholderPage } from '../components/pages/PlaceholderPage';

// Page 组件就是首页内容，Modern.js 会自动渲染它
const Page = () => {
  const [videos, setVideos] = useState([]);
  const [currentTab, setCurrentTab] = useState('featured');
  const [searchHistory, setSearchHistory] = useLocalStorage(
    'douyin_search_history',
    [],
  );

  // 初始化：请求视频列表（mock）
  useEffect(() => {
    fetchVideoList().then((list) => {
      setVideos(list);
    });
  }, []);

  // 搜索：只记录关键字到历史，不做实际过滤（作业要求）
  const handleSearch = (keyword) => {
    const trimmed = keyword.trim();
    if (!trimmed) return;
    setSearchHistory((prev) => {
      const next = [trimmed, ...prev.filter((item) => item !== trimmed)];
      return next.slice(0, 10);
    });
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  // 根据当前tab渲染不同的页面
  const renderContent = () => {
    if (!videos.length) {
      return (
        <div className="h-full flex items-center justify-center">
          <div className="text-xl text-white/60">加载中...</div>
        </div>
      );
    }

    switch (currentTab) {
      case 'featured':
        return <FeaturedPage videos={videos} />;
      
      case 'recommend':
        return <RecommendPage videos={videos} />;
      
      case 'ai':
        return (
          <PlaceholderPage
            title="AI抖音"
            icon="🤖"
            description="智能推荐，精准匹配你的兴趣"
          />
        );
      
      case 'follow':
        return (
          <PlaceholderPage
            title="关注"
            icon="❤️"
            description="查看你关注的创作者的最新动态"
          />
        );
      
      case 'friends':
        return (
          <PlaceholderPage
            title="朋友"
            icon="👥"
            description="与好友分享精彩时刻"
          />
        );
      
      case 'my':
        return (
          <PlaceholderPage
            title="我的"
            icon="👤"
            description="管理你的个人主页和作品"
          />
        );
      
      case 'live':
        return (
          <PlaceholderPage
            title="直播"
            icon="📹"
            description="实时互动，精彩不断"
          />
        );
      
      case 'cinema':
        return (
          <PlaceholderPage
            title="放映厅"
            icon="🎬"
            description="高清影视，畅享观影体验"
          />
        );
      
      case 'drama':
        return (
          <PlaceholderPage
            title="短剧"
            icon="📺"
            description="精彩短剧，追剧必备"
          />
        );
      
      default:
        return <FeaturedPage videos={videos} />;
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col relative">
      {/* 顶部导航 - 最高层级 */}
      <div className="relative z-50">
        <Header onSearch={handleSearch} history={searchHistory} />
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* 左侧导航菜单 */}
        <div className="relative z-10">
          <Sidebar currentTab={currentTab} onTabChange={handleTabChange} />
        </div>

        {/* 主内容区域 */}
        <main className="flex-1 overflow-hidden relative">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Page;
