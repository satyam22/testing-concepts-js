const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'snapshot-testing/app.js'),
  output: {
    path: path.resolve(__dirname, 'snapshot-testing/public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(
        __dirname,
        'snapshot-testing/public/template.html'
      ),
      filename: path.resolve(__dirname, 'snapshot-testing/public/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'snapshot-testing/public'),
  },
};
