const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.noDeprecation = true;

module.exports = {
  entry: './src/index',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.scss',
      '.css',
      '.svg',
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: 'dist/css' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: [path.resolve(__dirname, 'stylesheets')],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: 'dist/css' },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: 'dist/css' },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ collapseGroups: false }],
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.[hash].js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static', to: '' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.[hash].css',
    }),
  ],
  stats: {
    colors: true,
  }
};
