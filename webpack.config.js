const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

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
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          }
        ]
      }
    ]
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
