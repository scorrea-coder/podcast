const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require('sass');

const client = {
  target: 'web',
  entry: {
    bundle: ['./client/assets/javascript/app.js', './client/assets/styles/_root.scss']
  },
  output: {
    path: path.resolve(__dirname, 'client/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss'
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8000,
    open: true,
    contentBase: path.join(__dirname, 'client/build'),
    proxy: {
      '/api': 'http://localhost:8080'
    },
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin()
  ]
};

const server = {
  target: 'node',
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, 'server/build'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = [client, server];
