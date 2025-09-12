import PhotoCarousel from "@/components/PhotoCarousel";
import FloatingElements from "@/components/FloatingElements";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-yellow-50 relative">
      {/* 飘动的喜庆元素 */}
      <FloatingElements />
      
      {/* 音乐播放器 */}
      <MusicPlayer />
      
      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">💕</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2 animate-sparkle">
            我们结婚啦！
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-xl font-semibold text-gray-800">陶能科</span>
            <div className="text-2xl text-red-500">❤️</div>
            <span className="text-xl font-semibold text-gray-800">陈金金</span>
          </div>
        </div>

        {/* 照片轮播区域 */}
        <div className="mb-8">
          <PhotoCarousel autoPlay={true} autoPlayDelay={3000} />
        </div>

        {/* 婚礼信息卡片 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-red-400">
          <h2 className="text-xl font-bold text-red-600 mb-4 text-center">
            🎉 婚礼邀请
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-2xl mr-3">📅</div>
              <div>
                <p className="font-semibold text-gray-800">婚礼日期</p>
                <p className="text-gray-600">2025年9月30日</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-2xl mr-3">📍</div>
              <div>
                <p className="font-semibold text-gray-800">婚礼地点</p>
                <p className="text-gray-600">澧县梦溪镇</p>
                <p className="text-gray-600">子涵中心幼儿园对面</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="text-2xl mr-3">⏰</div>
              <div>
                <p className="font-semibold text-gray-800">敬请光临</p>
                <p className="text-gray-600">共同见证我们的幸福时刻</p>
              </div>
            </div>
          </div>
        </div>

        {/* 祝福语 */}
        <div className="text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-6 text-white shadow-md">
          <h3 className="text-lg font-bold mb-2">💝 真诚邀请</h3>
          <p className="text-sm leading-relaxed">
            感谢您一路以来的关心与支持<br/>
            诚挚邀请您见证我们的幸福时刻<br/>
            期待与您共同分享这份喜悦
          </p>
          <div className="mt-4 text-xl">🎊 🎉 🎊</div>
        </div>

        {/* 底部装饰 */}
        <div className="text-center mt-8 text-gray-500">
          <div className="text-3xl mb-2">🌸 💒 🌸</div>
          <p className="text-xs">
            陶能科 & 陈金金<br/>
            Forever Love ∞
          </p>
        </div>
      </div>
    </div>
  );
}
