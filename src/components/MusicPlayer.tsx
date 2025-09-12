'use client';

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasMusic, setHasMusic] = useState(true); // 默认显示播放按钮
  const [showPlayButton, setShowPlayButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // 直接设置音乐源并显示播放按钮
    if (audioRef.current) {
      audioRef.current.src = '/music/wedding.mp3';
      console.log('设置音乐源: /music/wedding.mp3');
    }
    
    // 延迟显示播放按钮
    const timer = setTimeout(() => {
      setShowPlayButton(true);
      console.log('显示播放按钮');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    console.log('点击播放按钮');
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log('暂停音乐');
      } else {
        // 尝试播放音乐
        await audioRef.current.play();
        setIsPlaying(true);
        console.log('开始播放音乐');
      }
    } catch (error) {
      console.log('音乐播放失败:', error);
      setHasMusic(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    // 循环播放
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  };

  // 简化显示逻辑，总是显示播放器（如果有音乐文件）

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={handleEnded}
        onError={() => setHasMusic(false)}
      />
      
      {/* 音乐播放按钮 */}
      {showPlayButton && (
        <div className="fixed top-4 right-4 z-40">
          <button
            onClick={togglePlay}
            className={`
              flex items-center justify-center w-12 h-12 rounded-full
              transition-all duration-300 shadow-lg hover:shadow-xl
              ${isPlaying 
                ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                : 'bg-pink-500 hover:bg-pink-600'
              }
              text-white border-2 border-white
            `}
            title={isPlaying ? '暂停音乐' : '播放音乐'}
          >
            {isPlaying ? (
              // 暂停图标
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              // 播放图标
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          {/* 音乐波纹效果 */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-red-300 animate-ping"></div>
          )}
        </div>
      )}

      {/* 首次访问时的提示 */}
      {showPlayButton && !isPlaying && (
        <div className="fixed top-20 right-4 z-30 max-w-xs">
          <div className="bg-white rounded-lg shadow-lg p-3 text-sm text-gray-700 border-l-4 border-pink-500 animate-bounce">
            <p className="font-medium text-pink-600">🎵 点击播放婚礼音乐</p>
            <p className="text-xs text-gray-500 mt-1">为您的浏览增添喜庆氛围</p>
            {/* 5秒后自动隐藏提示 */}
            <style jsx>{`
              @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; pointer-events: none; }
              }
              div {
                animation: fadeOut 0.5s ease-out 5s forwards;
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  );
}