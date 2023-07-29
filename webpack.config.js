/**
 * @description 插件基础配置
 * @author maicFir
 */
const Html = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const dayjs = require("dayjs");
const path = require("path");
const Dotenv = require("dotenv-webpack");
// 压缩文件，给打出的包做版本号
const { ZipPlugin, rules } = require("./webpack-config");
const packageObj = require("./package.json");

const formatTime = (date, format = "MM/DD/YYYY, HH:mm:ss") => {
  return dayjs(date).format(format);
};
const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = (env) => {
  // 手动加载环境dotenv, 如果需要访问process.env.xx 需要手动加载这段代码
  // require("dotenv").config({
  //   path: `.env.${env.mode}`,
  // });
  const fileName = `${packageObj.name}-${formatTime(
    Date.now(),
    "YYYYMMDD-HHmmss"
  )}`;
  const PluginFileAssetsName = `dist/${env.mode}/${fileName}`;
  let mode = ["test", "local"].includes(env.mode) ? "production" : env.mode;
  return {
    mode,
    entry: {
      background: resolvePath("src/background/index"),
      popup: resolvePath("src/pages/popup/index"),
      content: resolvePath("src/pages/content/index"),
      set: resolvePath("src/pages/tabs/set/index"),
    },
    output: {
      publicPath: "/",
      path: path.join(__dirname, PluginFileAssetsName),
      filename: "src/[name]/index.js",
    },
    module: {
      rules,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: env.mode !== "development",
            },
          },
        }),
      ],
      // splitChunks: {
      //   cacheGroups: {
      //     vendors: {
      //       test: /[\\/]node_modules[\\/](?!howler[\\/])/, // 排除howler包，主要解决use-sound依赖这个包被单独打包了出去，导致访问这个包错误,会将其他其他第三方依赖包打包成vendors
      //       name: "vendors",
      //       chunks: "all",
      //     },
      //   },
      // },
    },

    devtool: false,
    performance: {
      hints: false,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      alias: {
        "@public": resolvePath("public/"),
        "@utils": resolvePath("src/utils/"),
        "@src": resolvePath("src/"),
        "@comp": resolvePath("src/components/"),
        "@assets": resolvePath("src/assets/"),
      },
    },
    plugins: [
      new Dotenv({
        path: path.resolve(process.cwd(), `.env.${env.mode}`),
      }), // 读取本地.env本地
      new Html({
        filename: "index.html",
        template: "./public/index.html",
        chunks: ["content"], // 打包后只会包含popup与content,避免将其他js引入
        hash: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
        },
        title: "content",
      }),
      new Html({
        filename: "popup.html",
        template: "./public/index.html",
        chunks: ["popup"], // 打包后只会包含popup与content,避免将其他js引入
        hash: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
        },
        title: "test popup",
      }),
      new Html({
        filename: "set.html",
        template: "./public/index.html",
        chunks: ["set"],
        hash: false,
        title: "set",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "css/[name].css",
      }),

      new copyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, "manifest.json"),
            to: path.join(__dirname, `${PluginFileAssetsName}/`),
          },
          {
            from: path.join(__dirname, "src/assets/imgs"),
            to: path.join(__dirname, `${PluginFileAssetsName}/assets/imgs`),
          },
          {
            from: path.join(__dirname, "src/assets/css"),
            to: path.join(__dirname, `${PluginFileAssetsName}/assets/css`),
          },
        ],
      }),
      new CleanWebpackPlugin(),
      // 压缩成zip包
      // new ZipPlugin({ fileName, mode: env.mode }),
    ],
  };
};
