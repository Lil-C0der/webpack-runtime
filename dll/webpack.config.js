const { DllPlugin } = require('webpack');

const path = require('path');

module.exports = function (_, { mode }) {
  const isProd = mode === 'production';

  const outputDir = path.resolve(__dirname, isProd ? './build' : './dist');

  return {
    entry: {
      dll: path.resolve(__dirname, './index.js'),
    },
    mode: mode ?? 'development',
    output: {
      path: outputDir,
      library: '[name]_[fullhash]',
    },

    optimization: {
      usedExports: true,
    },

    plugins: [
      new DllPlugin({
        format: true,
        path: path.join(outputDir, 'manifest.json'),
        name: '[name]_[fullhash]',
      }),
    ],
  };
};
