const common = require('./common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = merge.smart(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, '..', 'src', 'static'),
        from: '**/*'
      }
    ])
  ]
})
