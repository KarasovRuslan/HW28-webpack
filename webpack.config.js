const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin()  
  ],
  devServer:{
    static: {
        directory: path.join(__dirname, 'dist'),
      },          
    compress: true,
    port: 3000,
    open: true,
  },
  mode: 'development',
};