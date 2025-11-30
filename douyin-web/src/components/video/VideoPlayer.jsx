import React, { useCallback, useEffect, useRef, useState } from 'react';

const VOLUME_KEY = 'douyin_volume';

// 工具：把秒数变成 00:00 格式
function formatTime(seconds) {
  if (!seconds || Number.isNaN(seconds)) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// 真正的视频播放器组件
export const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [lastVolume, setLastVolume] = useState(0.6);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [danmuText, setDanmuText] = useState('');
  const [aspectRatio, setAspectRatio] = useState('9/16'); // 9/16竖屏, 16/9横屏
  const [showControls, setShowControls] = useState(false);

  const isMuted = volume === 0;

  // 初始：从 localStorage 读取音量
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(VOLUME_KEY);
      if (stored) {
        const v = parseFloat(stored);
        if (!Number.isNaN(v)) {
          setVolume(v);
          setLastVolume(v || 0.6);
          if (videoRef.current) {
            videoRef.current.volume = v;
          }
        }
      } else if (videoRef.current) {
        videoRef.current.volume = volume;
      }
    } catch {
      // 忽略错误
    }
  }, []);

  // 音量变化时写入 localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(VOLUME_KEY, String(volume));
    } catch {
      // 忽略错误
    }
  }, [volume]);

  // 同步倍速到 video 标签
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, video.id]);

  // 点击视频或空格键：切换播放 / 暂停
  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, []);

  // 监听空格键
  useEffect(() => {
    const handler = (event) => {
      const target = event.target;
      const isTyping =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      if (isTyping) return;

      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [togglePlay]);

  // 视频切换时重置进度并尝试自动播放
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    setCurrentTime(0);
    setDuration(el.duration || 0);
    setBuffered(0);

    el
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // 浏览器可能禁止自动播放
        setIsPlaying(false);
      });
  }, [video.id]);

  // 监听全屏状态变化
  useEffect(() => {
    const onFsChange = () => {
      const fsElement = document.fullscreenElement;
      setIsFullscreen(fsElement === containerRef.current);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // 播放进度更新
  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime);
    setDuration(el.duration || 0);
  };

  // 缓冲进度更新
  const handleProgress = () => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const ranges = el.buffered;
    if (!ranges.length) return;
    const end = ranges.end(ranges.length - 1);
    setBuffered(end / el.duration);
  };

  const progress = duration ? currentTime / duration : 0;

  // 根据鼠标事件算出进度条上的比例（0 ~ 1）
  const getProgressFromEvent = (e) => {
    if (!progressBarRef.current || !duration) return 0;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    return Math.min(1, Math.max(0, ratio));
  };

  // 按下进度条：立即跳到对应位置，并进入拖动状态
  const handleProgressMouseDown = (e) => {
    e.preventDefault();
    const ratio = getProgressFromEvent(e);
    setIsSeeking(true);
    if (videoRef.current && duration) {
      const nextTime = ratio * duration;
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  // 拖动进度条：不断更新 currentTime
  const handleProgressMouseMove = (e) => {
    if (!isSeeking) return;
    const ratio = getProgressFromEvent(e);
    if (videoRef.current && duration) {
      const nextTime = ratio * duration;
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const stopSeeking = () => setIsSeeking(false);

  // 调整音量（用于滚轮）
  const changeVolume = (delta) => {
    setVolume((prev) => {
      let next = prev + delta;
      if (next < 0) next = 0;
      if (next > 1) next = 1;
      if (videoRef.current) {
        videoRef.current.volume = next;
      }
      if (next > 0) setLastVolume(next);
      return next;
    });
  };

  // 鼠标滚轮：调节音量
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    changeVolume(delta);
  };

  // 点击垂直音量条：设置音量
  const handleVolumeClick = (e) => {
    if (!volumeBarRef.current) return;
    const rect = volumeBarRef.current.getBoundingClientRect();
    const ratio = 1 - (e.clientY - rect.top) / rect.height;
    let next = ratio;
    if (next < 0) next = 0;
    if (next > 1) next = 1;
    if (videoRef.current) {
      videoRef.current.volume = next;
    }
    if (next > 0) setLastVolume(next);
    setVolume(next);
  };

  // 静音 / 取消静音
  const toggleMute = () => {
    if (isMuted) {
      const target = lastVolume || 0.6;
      if (videoRef.current) videoRef.current.volume = target;
      setVolume(target);
    } else {
      setLastVolume(volume || 0.6);
      if (videoRef.current) videoRef.current.volume = 0;
      setVolume(0);
    }
  };

  // 全屏 / 退出全屏
  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // 切换横竖屏
  const toggleAspectRatio = () => {
    setAspectRatio((prev) => (prev === '9/16' ? '16/9' : '9/16'));
  };

  // 网页全屏（不是浏览器全屏）
  const toggleWebFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!isFullscreen) {
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.zIndex = '100';
      setIsFullscreen(true);
    } else {
      container.style.position = '';
      container.style.top = '';
      container.style.left = '';
      container.style.width = '';
      container.style.height = '';
      container.style.zIndex = '';
      setIsFullscreen(false);
    }
  };

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // 弹幕表单仅做 UI，提交后清空输入框
  const handleDanmuSubmit = (e) => {
    e.preventDefault();
    setDanmuText('');
  };

  const containerStyle = aspectRatio === '9/16' 
    ? 'w-[320px] sm:w-[360px] md:w-[420px] aspect-[9/16]' 
    : 'w-[560px] md:w-[720px] aspect-[16/9]';

  return (
    <div
      ref={containerRef}
      className={`relative ${containerStyle} bg-black rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 z-30`}
      onWheel={handleWheel}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.cover}
        className="w-full h-full object-cover"
        playsInline
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onProgress={handleProgress}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* 覆盖在视频上的 UI */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
        {/* 左上：作者信息 */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <img
            src={video.authorAvatar}
            alt={video.authorName}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">@{video.authorName}</span>
          </div>
        </div>

        {/* 下方：标题 + 弹幕输入框 + 控制条 */}
        <div className="pointer-events-auto">
          {/* 视频标题与描述 */}
          <div className="mb-2">
            <div className="font-semibold text-sm mb-1">{video.title}</div>
            <div className="text-xs text-white/80 max-h-10 overflow-hidden">
              {video.description}
            </div>
          </div>

          {/* 弹幕输入框（仅 UI，不做真实弹幕） */}
          <form
            onSubmit={handleDanmuSubmit}
            className="mb-3 inline-flex items-center bg-black/40 rounded-full px-3 py-1 text-xs text-white/80 max-w-full"
          >
            <span className="mr-2 text-[11px] text-white/60">弹幕</span>
            <input
              className="bg-transparent outline-none text-xs text-white placeholder:text-white/40 w-40 sm:w-52 md:w-64"
              placeholder="发一条友善的弹幕吧～"
              value={danmuText}
              onChange={(e) => setDanmuText(e.target.value)}
            />
            <button
              type="submit"
              disabled={!danmuText.trim()}
              className={`ml-2 text-[11px] ${
                danmuText.trim()
                  ? 'text-pink-400'
                  : 'text-white/40 cursor-not-allowed'
              }`}
            >
              发送
            </button>
          </form>

          {/* 控制条 */}
          <div className="space-y-2">
            {/* 自定义进度条：缓冲条 + 播放条 + 小球 */}
            <div
              ref={progressBarRef}
              className="relative h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group"
              onMouseDown={handleProgressMouseDown}
              onMouseMove={handleProgressMouseMove}
              onMouseUp={stopSeeking}
              onMouseLeave={stopSeeking}
            >
              {/* 缓冲 */}
              <div
                className="absolute inset-y-0 bg-white/30"
                style={{ width: `${buffered * 100}%` }}
              />
              {/* 已播放 */}
              <div
                className="absolute inset-y-0 bg-pink-500"
                style={{ width: `${progress * 100}%` }}
              />
              {/* 小圆点 */}
              <div
                className="absolute top-1/2 w-3 h-3 rounded-full bg-white shadow group-hover:scale-110 transition-transform"
                style={{
                  left: `${progress * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            {/* 底部按钮区域 */}
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-3">
                {/* 播放 / 暂停 */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition"
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <span>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* 音量控制区域 */}
                <div
                  className="relative flex items-center gap-2"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs"
                    title={isMuted ? '取消静音' : '静音'}
                  >
                    {isMuted ? '🔇' : '🔊'}
                  </button>
                  {showVolumeSlider && (
                    <div
                      ref={volumeBarRef}
                      className="h-20 w-1.5 bg-white/20 rounded-full relative cursor-pointer"
                      onClick={handleVolumeClick}
                    >
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-white/70"
                        style={{ height: `${volume * 100}%` }}
                      />
                      <div
                        className="absolute left-1/2 w-3 h-3 rounded-full bg-white shadow"
                        style={{
                          bottom: `${volume * 100}%`,
                          transform: 'translate(-50%, 50%)',
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* 倍速菜单 */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSpeedMenu((v) => !v)}
                    className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-[10px] font-bold"
                    title="播放速度"
                  >
                    {playbackRate}×
                  </button>
                  {showSpeedMenu && (
                    <div className="absolute right-0 bottom-8 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-lg text-[11px] py-1 z-50">
                      {speeds.map((speed) => (
                        <button
                          key={speed}
                          type="button"
                          onClick={() => {
                            setPlaybackRate(speed);
                            setShowSpeedMenu(false);
                          }}
                          className={`px-4 py-1.5 w-full text-left hover:bg-white/5 transition-colors ${
                            playbackRate === speed ? 'text-pink-400 font-semibold' : 'text-white'
                          }`}
                        >
                          {speed === 1 ? '正常' : `${speed}×`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 横竖屏切换按钮 */}
                <button
                  type="button"
                  onClick={toggleAspectRatio}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs"
                  title={aspectRatio === '9/16' ? '切换到横屏' : '切换到竖屏'}
                >
                  {aspectRatio === '9/16' ? '📱' : '🖥️'}
                </button>

                {/* 网页全屏按钮 */}
                <button
                  type="button"
                  onClick={toggleWebFullscreen}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs"
                  title="网页全屏"
                >
                  {isFullscreen ? '⤫' : '⤢'}
                </button>

                {/* 浏览器全屏按钮 */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs"
                  title="浏览器全屏"
                >
                  🔲
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
