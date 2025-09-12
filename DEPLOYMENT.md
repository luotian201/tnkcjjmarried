# 🚀 部署指南

## GitHub + Vercel 部署步骤

### 1. GitHub 仓库设置

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "🎉 初始化结婚邀请网站"

# 设置主分支
git branch -M main

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git

# 推送到 GitHub
git push -u origin main
```

### 2. Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择 `wedding-website` 仓库
5. 保持默认配置
6. 点击 "Deploy"

### 3. 环境变量（如需要）

目前项目不需要环境变量，所有配置都在代码中。

### 4. 自定义域名（可选）

在 Vercel 项目设置中：
1. 进入 "Domains" 选项卡
2. 添加您的自定义域名
3. 按照提示配置 DNS

## 📁 照片管理

### 添加照片
1. 将照片放入 `public/photos/` 文件夹
2. 支持格式：jpg, jpeg, png, gif, webp, bmp
3. 提交并推送到 GitHub
4. Vercel 会自动重新部署

### 建议规格
- **尺寸**: 最小 800px 宽度
- **比例**: 4:3 或 16:9
- **大小**: 每张照片不超过 1MB
- **数量**: 10-30 张为佳

### 文件命名
```
01-engagement.jpg
02-couple-photo.jpg
03-wedding-prep.jpg
...
```

## ⚡ 性能优化

- 网站使用 Next.js 静态生成
- 图片自动优化
- Tailwind CSS 提供最小化样式
- 支持渐进式网页应用(PWA)特性

## 🔧 维护说明

### 更新内容
1. 修改代码后提交到 GitHub
2. Vercel 会自动部署更新
3. 部署通常在 1-2 分钟完成

### 监控访问
- Vercel 提供访问统计
- 可查看页面加载性能
- 支持实时访问监控

## 📱 分享方式

部署完成后，您将获得：
- 主域名: `https://your-project-name.vercel.app`
- 可生成二维码分享
- 支持社交媒体分享

---

**🎊 准备好分享您的幸福时刻了吗？**