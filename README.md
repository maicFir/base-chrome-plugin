### base-chrome-plugin

> webpack5 构建 chrome 插件基础项目模版架子

### 项目使用技术栈

- 🔥 `webpack5`、`webpack-cli`,`webpack-dev-server`
- 🔥 `react`, `react-router`,`typescript`
- 🔥`babel`,`typescript`、`tailwindcss`, `sass`
- ...

### 如何运行

- 克隆该项目地址

```bash
  git clone https://github.com/maicFir/base-chrome-plugin.git
```

- 进入当前目录

```bash
  cd base-chrome-plugin
```

- 安装依赖包

```bash
  npm i
  // or
  pnpm i
  // or
  yarn i
```

- 打包运行插件,生成插件`manifest.json`包

```bash
npm run build
// or
pnpm run build
```

- 浏览器输入`chrome://extensions`or `扩展程序>管理扩展程序>加载已解压的扩展程序`>加载含有`manifest.json`文件夹

### 插件不同环境

- 本地开发环境

```bash
  npm run build:dev
  // or
  pnpm run build:dev
```

- 测试环境

```bash
  npm run build:test
  // or
  pnpm run build:test
```

- 生产环境

```bash
  npm run build
  // or
  pnpm run build`
```

### 插件预览

![](https://files.mdnice.com/user/24614/214d8805-afa2-4c24-9e0a-dafa3289323c.png)

![](https://files.mdnice.com/user/24614/214d8805-afa2-4c24-9e0a-dafa3289323c.png)

### 最后

- 如果看完项目，觉得有所有收获或有所帮助，就不要吝啬给个`star`鼓励下作者吧~
  ![](https://files.mdnice.com/user/24614/1dacc796-7728-42f2-8e5c-918faaed1958.png)
