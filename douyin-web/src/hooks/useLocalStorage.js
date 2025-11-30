import { useEffect, useState } from 'react';

// 一个非常简单的 localStorage Hook
// 用来存音量、搜索历史等
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 忽略写入错误
    }
  }, [key, value]);

  return [value, setValue];
}
