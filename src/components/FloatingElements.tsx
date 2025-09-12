'use client';

import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  symbol: string;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  // 喜庆符号数组
  const symbols = ['囍', '💕', '🌸', '🎊', '✨', '💖', '🌹', '🎉', '💐', '🦋'];

  useEffect(() => {
    // 生成20个随机飘动元素
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100, // 0-100% 的位置
        animationDelay: Math.random() * 10, // 0-10秒的延迟
        animationDuration: 8 + Math.random() * 12, // 8-20秒的动画时长
        size: 0.8 + Math.random() * 0.8, // 0.8-1.6倍大小
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-70"
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
            fontSize: `${element.size}rem`,
            top: '100vh', // 从底部开始
            color: element.symbol === '囍' ? '#dc2626' : 'inherit', // 囍字设为红色
          }}
        >
          {element.symbol}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}