import React from 'react';
import '../styles/index.css';
import { Outlet } from '@modern-js/runtime/router';

// 根布局：在这里可以放全局样式、通用壳子，真正页面通过 <Outlet /> 渲染
const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
