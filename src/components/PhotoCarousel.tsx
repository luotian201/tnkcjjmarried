'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PhotoCarouselProps {
  autoPlay?: boolean;
  autoPlayDelay?: number;
  className?: string;
}

export default function PhotoCarousel({ 
  autoPlay = true, 
  autoPlayDelay = 3000,
  className = ""
}: PhotoCarouselProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (!autoPlay || photos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayDelay, photos.length]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/photos');
      const data = await response.json();
      setPhotos(data.photos || []);
    } catch (error) {
      console.error('获取照片失败:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  };

  if (loading) {
    return (
      <div className={`relative w-full h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="animate-spin text-4xl mb-4">⭕</div>
            <p className="text-lg font-medium">正在加载照片...</p>
          </div>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className={`relative w-full h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-lg font-medium">请将您的照片</p>
            <p className="text-sm">放入 public/photos 文件夹</p>
            <p className="text-xs mt-2 text-gray-500">支持 .jpg, .jpeg, .png, .webp 格式</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg border-4 border-white group">
        {photos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={photo}
              alt={`婚礼照片 ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {photos.length > 1 && (
          <>
            {/* 左右导航按钮 */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 照片计数 */}
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {currentIndex + 1} / {photos.length}
            </div>
          </>
        )}
      </div>

      {/* 指示器 */}
      {photos.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}