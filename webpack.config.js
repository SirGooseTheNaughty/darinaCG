const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  entry: {
    index: './index.js',
    preloader: './preloader.js',
    page: './page.js',
    ai: './ai.js',
    darStudioRender: './darStudioRender.js',
    about: './about.js',
  },
  mode: env.mode || 'development',
  watch: env.watch || false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
        },
    ]
  }
});