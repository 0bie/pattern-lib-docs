const {resolve} = require('path');
const commonPaths = require('../config/common-paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {cssLoader, postcssLoader, scssLoader} = require('../config/postcss.config')();

module.exports = (baseConfig, env, defaultConfig) => {

  defaultConfig.output.publicPath = '/';
  baseConfig.module.rules = [
    ...defaultConfig.module.rules,
    {
      include: resolve(__dirname, "../"),
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        cssLoader,
        postcssLoader,
        scssLoader
      ]
    },
    {
      include: resolve(__dirname, "../"),
      test: /\.(jpe?g|\.png|gif|\.svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {limit: 10000, outputPath: commonPaths.outputPath}
        },
        {
          loader: 'image-webpack-loader',
          options: {bypassOnDebug: true}
        }
      ]
    },
    {
      test: /\.stories\.js?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  ];
  baseConfig.plugins = [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash:8].css',
      chunkFilename: 'styles/[id].css'
    })
  ];

  return baseConfig;
};
