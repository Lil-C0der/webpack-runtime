const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DllReferencePlugin } = require('webpack');

const path = require('path');

module.exports = function (_, { mode }) {
  const isProd = mode === 'production';

  const outputDir = path.resolve(__dirname, isProd ? './build' : './dist');

  const manifest = require(`./dll/${isProd ? 'build' : 'dist'}/manifest.json`);

  return {
    entry: {
      a: './src/index-a.js',
      // b: './src/index-b.js',
    },
    mode: mode ?? 'development',
    output: { path: outputDir },

    optimization: {
      usedExports: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),

      new DllReferencePlugin({
        manifest,
      }),
    ],

    devServer: {
      hot: true,
    },
  };
};
