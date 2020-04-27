const path = require("path");

module.exports = {
  mode: "development", // production,  development
  entry: "./src/index.js",
  module: {
    rules: [
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   use: {
      //     loader: "file-loader", // npm install file-loader -D\
      //     options: {
      //       name: "[name]_[hash].[ext]", // https://www.webpackjs.com/loaders/file-loader/#placeholders
      //       outputPath: "images/", // https://www.webpackjs.com/loaders/file-loader/#outputpath
      //     },
      //   },
      // },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: {
          loader: "url-loader", // npm install url-loader -D\
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 204800, // 小于limit值会打包成base64
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      // css 解析loader npm install css-loader style-loader -D
      // sass-loader 安装命令   npm install sass-loader node-sass -D
      //自动加css浏览器样式前缀 npm install postcss-loader -D
      // {
      // test: /\.vue$/,
      // use: {
      //   loader: 'vue-loader' // npm install vue-loader -D
      // }
      // }
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
