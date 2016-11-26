const common = require('./common')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge.smart(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
