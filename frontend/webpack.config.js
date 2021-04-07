const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    historyApiFallback: true
  },

  output: {
    path: path.resolve("../dist/"),
    filename: "bundle.js",
    publicPath: "http://localhost:3000/"
  },

  resolve: {
    alias: {
      vue: "vue/dist/vue.js", // Vue toastr needs this
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(woff2?|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1 * 1024 ** 1,
          outputPath: "fonts/",
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1 * 1024 ** 1,
          outputPath: "images/",
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin,
    new MomentLocalesPlugin,
  ]
};
