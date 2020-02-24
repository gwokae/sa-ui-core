/* eslint-env node */

const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'ui-core',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /.(jpg|jpeg|png)$/,
        use: ['file-loader'],
      },
      {
        test: /.svg$/,
        use: ['svg-url-loader'],
      },
    ],
  },
};
