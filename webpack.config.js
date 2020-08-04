const path = require('path');
module.exports = {
  entry: './snapshot-testing/app.js',
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
    ],
  },
};
