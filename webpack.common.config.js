const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  externals: 'nodeModules', //Prevents bundling in Node modules. These should be handled by node, not webpack

  module: {
        loaders: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|gif|jpg|jpeg)$/, use: 'file-loader'},
            { test: /Cesium\.js$/, use: 'script-loader' }
        ]
  }
};