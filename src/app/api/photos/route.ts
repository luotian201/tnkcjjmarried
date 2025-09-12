import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDirectory = path.join(process.cwd(), 'public', 'photos');
    
    // 检查photos目录是否存在
    if (!fs.existsSync(photosDirectory)) {
      return NextResponse.json({ photos: [] });
    }

    // 读取目录中的所有文件
    const files = fs.readdirSync(photosDirectory);
    
    // 过滤出图片文件
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
    const photos = files
      .filter(file => {
        const extension = path.extname(file).toLowerCase();
        return imageExtensions.includes(extension);
      })
      .map(file => `/photos/${file}`)
      .sort(); // 按文件名排序

    return NextResponse.json({ 
      photos,
      count: photos.length 
    });
  } catch (error) {
    console.error('获取照片列表时出错:', error);
    return NextResponse.json(
      { error: '获取照片列表失败', photos: [] },
      { status: 500 }
    );
  }
}