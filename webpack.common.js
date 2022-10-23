const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const TranslationsPlugin = require('./webpack/translations-plugin')

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings.
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS.
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader", // Compiles Sass to CSS.
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  externals: {
    zendesk_app_framework_sdk: "ZAFClient",
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*']),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true,
    }),

    new CopyWebpackPlugin([
      { from: "src/manifest.json", to: "../" },
      { from: 'src/images/*', to: '.', flatten: true },
    ]),

    new TranslationsPlugin({
      path: path.resolve(__dirname, './src/translations'),
    }),

  ],
}
