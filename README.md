# TechMaster 移动设备技术服务网站

专业移动设备技术服务网站，提供刷机、ROOT、救砖和系统优化等服务。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 现代化UI，动态视觉效果和过渡动画
- 完整的服务展示和案例展示
- 联系表单和咨询功能

## 部署指南

### 前置条件

在开始之前，请确保您已安装以下软件：

- [Node.js](https://nodejs.org/) (v14.0.0 或更高版本)
- [Git](https://git-scm.com/)

### 部署步骤

1. **克隆仓库**

   首先，将仓库克隆到本地：

   ```bash
   git clone https://github.com/FHYUYO/FUYUYO.git
   cd FUYUYO
   ```

2. **安装依赖**

   使用pnpm安装项目依赖：

   ```bash
   pnpm install
   ```

3. **构建项目**

   构建生产版本的网站：

   ```bash
   pnpm run build
   ```

4. **部署到GitHub Pages**

   运行部署命令，将网站发布到GitHub Pages：

   ```bash
   pnpm run deploy
   ```

5. **访问网站**

   部署完成后，您可以通过以下链接访问您的网站：
   https://FHYUYO.github.io/FUYUYO

### 常见问题

#### 部署失败怎么办？

如果部署命令失败，请检查以下几点：

1. 确保您的GitHub账号有权限推送至该仓库
2. 检查是否已安装gh-pages：`pnpm add -D gh-pages`
3. 确认package.json中的homepage和repository配置正确
4. 尝试删除node_modules和dist文件夹后重新安装依赖并构建：

   ```bash
   rm -rf node_modules dist
   pnpm install
   pnpm run build
   pnpm run deploy
   ```

#### 网站样式错乱或资源无法加载？

这通常是由于路径配置问题导致的，请确保：

1. package.json中的homepage设置正确
2. 项目中所有资源引用使用相对路径

## 联系方式

如有任何问题或需要技术支持，请通过以下方式联系：

- QQ: 3059516331