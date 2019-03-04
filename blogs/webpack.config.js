// eslint-disable-next-line import/no-unresolved
const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'dev';
const HTMLPlugin = require('html-webpack-plugin');

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.styl/,
      use: ['style-loader', 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
        'stylus-loader',
      ],
    }],
  },
  resolve: {
    extensions: ['.js', '*', '.css'],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    // eslint-disable-next-line no-undef
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
    new HTMLPlugin(),
  ],

};
if (isDev) {
  // config.devtool = '#cheap=module-eval-source-map';
  // eslint-disable-next-line no-undef
  config.mode = 'development';
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true,
    open: true,
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  );
}
// eslint-disable-next-line no-undef
module.exports = config;
