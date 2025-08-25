# TechMaster - 专业移动设备技术服务网站

一个展示移动设备技术服务的单页应用，包括刷机、ROOT、救砖等服务展示。

## 功能特点

- 响应式设计，适配各种设备尺寸
- 现代化UI设计，包含动画和过渡效果
- 服务展示、案例展示、关于我、联系表单等完整功能
- 深色主题支持

## 部署指南

### 前提条件

- Node.js 14+ 和 npm/pnpm
- GitHub账号和Git

### 部署步骤

1. **创建GitHub仓库**
   - 在GitHub上创建一个新仓库（推荐名称：`mobile-tech-service`）
   - 记录仓库URL：`https://github.com/your-github-username/mobile-tech-service.git`

2. **修改配置文件**
   - 编辑`package.json`文件，将以下占位符替换为你的信息：
     ```json
     "homepage": "https://your-github-username.github.io/mobile-tech-service",
     "repository": {
       "type": "git",
       "url": "https://github.com/your-github-username/mobile-tech-service.git"
     }
     ```

3. **初始化并推送项目到GitHub**
   ```bash
   # 初始化Git仓库
   git init
   
   # 添加所有文件
   git add .
   
   # 提交更改
   git commit -m "Initial commit"
   
   # 添加远程仓库
   git remote add origin https://github.com/your-github-username/mobile-tech-service.git
   
   # 推送到GitHub
   git push -u origin main
   ```

4. **安装依赖并部署**
   ```bash
   # 安装依赖包
   pnpm install
   
   # 执行部署命令
   pnpm run deploy
   ```

5. **访问网站**
   - 部署完成后，访问你的网站：`https://your-github-username.github.io/mobile-tech-service`
   - 首次部署可能需要几分钟时间生效

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看网站

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (动画效果)
- React Router (路由管理)