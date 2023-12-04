import { defineConfig } from 'vite';
import { resolve } from 'path';
// const path = require('path')
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: 'env',
  base: './',
  // 构建
  build: {
    // rollup打包配置，具体看rollupAPI
    rollupOptions: {
      output: {
        assetFileNames: '[hash]-[name][extname]',
      },
    },

    // 4kb以下去打包成base64
    assetsInlineLimit: 4096,

    // 指定输出路径
    outDir: 'dist',

    //指定静态资源路径
    assetsDir: 'static',

    //打包前清空文件，默认true
    emptyOutDir: true,
  },
  // 设置别称
  resolve: {
    alias: [
      {
        find: '@', // 别名
        replacement: resolve(__dirname, 'src'), // 别名对应地址
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
    ],
    // 或者这种写法
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    //   '@components':path.resolve(__dirname, "src/components"),
    //   "@utils": path.resolve(__dirname, "src/utils"),
    // },

    // 导入时想要省略的扩展名列表
    extensions: ['.js', '.ts', '.json'],

    // dedupe是配置模块的去重规则
    dedupe: [],
  },
  // 引用全局scss
  css: {
    modules: {
      // 转换类名（camelCase为驼峰、camelCaseOnly只为驼峰其他都被替换、
      // dashes为中划线、dashesOnly为只能是中划线）
      localsConvention: 'dashes',

      // 设置样式是否是局部的 local(默认)生成hash，global全局样式
      scopeBehaviour: 'local',

      // 设置样式命名方式
      // generateScopedName:"[hash:5]_[name]_local"
      generateScopedName: (name, filename, css) => {
        return `${name}${filename}${css}`;
      },

      // 默认类名+其他字符串（文件名、随机）加入到hash生成中
      hashPrefix: 'myPro',

      // 不解析该文件样式名，一般用于引入第三方
      // globalModulePaths: ['base.module.css']
    },

    // 预处理器（常用）
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/index.scss";`,
      },
      // 整个配置会再less执行的时候当作参数提交执行lessc,所以怎么配置看less文档
      less: {
        //可以使用 100/2px --math="always"
        math: 'always',

        // 定义全局的样式变量
        globalVars: {},

        // 可以用来导入全局变量文件（常用）
        additionalData: `@import '@/styles/variables.less';`,

        //开启css映像索引，生产环境定位问题文件
        sourceMap: true,
      },
    },
    postcss: {
      plugins: [],
    },
  },
  // 服务
  server: {
    // 监听所有地址
    host: true,
    // 自定义端口，默认为5173
    port: 8880,
    // 服务启动后，自动在浏览器中打开，默认是不打开的
    open: false,
    // 为开发服务启用热更新，默认是不启用热更新的
    hmr: true,
    // 配置代理规则
    proxy: {
      // '/api': {
      //   // 配置接口调用目标地址
      //   target: 'https://www.xxxx.com/xxxx',
      //   // 当进行代理时，Host 的源默认会保留（即Host是浏览器发过来的host），如果将changeOrigin设置为true，则host会变成target的值。
      //   changeOrigin: true,
      //   // 前缀 /api 是否被替换为特定目标，不过大多数后端给到的接口都是以/api打头，这个没有完全固定的答案，根据自己的业务需求进行调整
      //   rewrite: path => path.replace(/^\/api/, ''),
      // }
    },
    // 环境变量模式，将会把 serve 和 build 时的模式 都 覆盖掉。
    // mode: 'development',
    // 端口被占用直接退出
    strictPort: true,
    // 启用TLS + http/2
    https: false,
    // 为开发服务器配置 CORS,默认启用
    cors: true,
    // 指定服务器响应的header
    headers: {},
    // 以中间件模式创建 Vite 服务器。
    middlewareMode: false,
    // 用于定义开发调试阶段生成资源的 origin。
    // origin: 'http://127.0.0.1:8848',
    // 是否忽略服务器 sourcemap 中的源文件，这是默认值，它将把所有路径中含有 node_modules 的文件添加到忽略列表中。
    // sourcemapIgnoreList(sourcePath, sourcemapPath) {
    //   return sourcePath.includes('node_modules');
    // },
    // 被监听的包必须被排除在优化之外，以便它能出现在依赖关系图中并触发热更新。
    watch: {
      ignored: ['!**/node_modules/vue/**'],
    },
    fs: {
      // 限制为工作区 root 路径以外的文件的访问。
      strict: true,
      // 限制哪些文件可以通过 /@fs/ 路径提供服务。设置为 true 时，访问这个目录列表外的文件将会返回 403 结果。
      allow: ['..'],
      // 用于限制 Vite 开发服务器提供敏感文件的黑名单。比 fs.allow 更高级
      deny: ['.env', '.env.*', '*.{crt,pem}'],
    },
  },
  // 是用于定义全局变量的
  define: {},
});
