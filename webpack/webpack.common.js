'use strict';

const path = require('path');
const port = require('../port');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../app'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify")
    },
    alias: {
      Helpers: path.resolve(__dirname, '../app/helpers/'),
      Components: path.resolve(__dirname, '../app/components/'),
      Contexts: path.resolve(__dirname, '../app/contexts/'),
      Actions: path.resolve(__dirname, '../app/redux/actions/'),
      API: path.resolve(__dirname, '../app/api/')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port,
    historyApiFallback: true
  }
};
