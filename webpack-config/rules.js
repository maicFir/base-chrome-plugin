// rules
module.exports = {
  rules: [
    {
      test: /\.(js|jsx|tsx)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
    {
      test: /\.(tsx|ts)$/i,
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]_[hash:base64:5]",
            },
          },
        },
        "postcss-loader",
      ],
    },
    {
      test: /\.css$/,
      include: /node_modules/, // 新增的CSS loader规则，只处理node_modules下的CSS
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]_[hash:base64:5]",
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              localIdentName: "[name]_[hash:base64:5]",
            },
          },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024, // 小于4kb将会base64输出
        },
      },
    },
    {
      test: /\.mp3$/,
      type: "asset/resource",
    },
  ],
};
