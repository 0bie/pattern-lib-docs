const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  output: {
    filename: 'scripts/[name].[chunkhash:8].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /react|react-dom/,
        sideEffects: false
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    usedExports: true, // https://bit.ly/2qdxWNx
    occurrenceOrder: true,
    runtimeChunk: 'single',
    // https://bit.ly/2qgDCpl https://bit.ly/2BuL3wF
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /react/,
          enforce: true
        }
      }
    },
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true
    })]
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
