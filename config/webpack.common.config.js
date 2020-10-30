const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const scssRegex = /\.(scss)$/;
const scssModuleRegex = /\.module\.(scss)$/;

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../build'),
    filename: `static/js/[name]${isDev ? '' : '.[contenthash:8]'}.chunk.js`,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx|js$/,
        exclude: /node_modules/,
        use: ['thread-loader', 'babel-loader'],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: scssModuleRegex,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
              },
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: scssRegex,
        exclude: scssModuleRegex,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false,
              sourceMap: isDev,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: isDev } },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../src/assets/svg'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeAttrs: { attrs: 'fill' } }],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: path.resolve(__dirname, '../src/assets/svg'),
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              outputPath: 'assets/images',
              name: '[name]-[hash:8].[ext]',
              limit: 8192,
              fallback: require.resolve('file-loader'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new WebpackBar({
      name: isDev ? '冲鸭' : '全速打包中',
      color: '#61dafb',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../build/index.html'),
      template: path.resolve(__dirname, '../public/index.html'),
      cache: false,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', 'scss', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  optimization: {},
  externals: {},
};
