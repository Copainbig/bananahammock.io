const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
   rules: [
      {
        test: /\.js|jsx$/,
        exclude: [
          /node_modules/,
          /tests/
        ],
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.global\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.global\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Sources: path.resolve(__dirname, './src/'),
      Styles: path.resolve(__dirname, './src/styles/')
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: process.env.production ? `index.[chunkHash].js` : `index.[hash].js`
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3030,
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'BananaHammock.io',
      template: 'src/assets/index.html',
      meta: {
        'http-equiv': 'cache-control',
        'content': 'no-cache'
      }
    }),
  ]
};
