# 🎉 陶能科 ❤️ 陈金金 结婚网站

这是一个专为陶能科和陈金金定制的结婚邀请网站，具有美丽的界面和自动照片轮播功能。

## 📱 特性

- ✨ 喜庆的红色主题设计
- 📱 完全响应式，完美适配手机
- 🖼️ 自动照片轮播
- 💕 结婚信息展示
- 🎊 美丽的渐变背景和动画

## 🚀 部署指南

### 步骤 1: 准备照片

1. 将您的结婚照片放入 `public/photos/` 文件夹
2. 支持的格式：`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.bmp`
3. 建议照片尺寸：宽度至少 800px，保持 4:3 或 16:9 比例
4. 照片将按文件名自动排序显示

### 步骤 2: GitHub 设置

1. 在 GitHub 上创建新仓库
2. 将代码推送到仓库：
   ```bash
   git init
   git add .
   git commit -m "初始化结婚网站"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git
   git push -u origin main
   ```

### 步骤 3: Vercel 部署

1. 访问 [vercel.com](https://vercel.com) 并用 GitHub 账号登录
2. 点击 "New Project"
3. 选择您的 wedding-website 仓库
4. 使用默认设置直接部署
5. 部署完成后将获得一个 `.vercel.app` 域名

## 📁 项目结构

```
wedding-website/
├── public/
│   └── photos/          # 📸 放置您的结婚照片
├── src/
│   ├── app/
│   │   ├── api/photos/  # 📡 照片API
│   │   ├── layout.tsx   # 🏗️ 页面布局
│   │   └── page.tsx     # 🏠 主页
│   └── components/
│       └── PhotoCarousel.tsx  # 🎠 照片轮播组件
└── WEDDING-GUIDE.md     # 📖 使用指南
```

## 🎨 自定义选项

### 修改结婚信息
编辑 `src/app/page.tsx` 文件中的以下信息：
- 新郎新娘姓名
- 结婚日期
- 婚礼地点
- 祝福语内容

### 调整轮播设置
在 `src/app/page.tsx` 中修改 `<PhotoCarousel>` 组件的属性：
- `autoPlay={true}` - 是否自动播放
- `autoPlayDelay={3000}` - 切换间隔（毫秒）

## 📸 照片建议

- **数量**：建议 10-30 张照片获得最佳效果
- **质量**：使用高质量照片，文件大小建议在 1MB 以内
- **内容**：包含订婚照、生活照、艺术照等多样内容
- **命名**：使用有序的文件名如 `01-engagement.jpg`, `02-couple.jpg` 等

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 💝 温馨提示

- 网站会自动检测 `public/photos/` 文件夹中的所有图片
- 支持手机和电脑端浏览
- 照片会自动轮播，也可以手动切换
- 完全免费托管在 Vercel 上

## 📞 技术支持

如果遇到任何问题，请检查：
1. 照片是否正确放置在 `public/photos/` 文件夹
2. 照片格式是否支持
3. GitHub 仓库是否正确推送
4. Vercel 部署是否成功

---

🎊 **祝愿陶能科和陈金金新婚快乐，白头偕老！** 🎊