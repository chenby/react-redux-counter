var webpack = require('webpack')

module.exports = {
  entry: [
    './main'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ]
      },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
}


// // When inside Redux repo, prefer src to compiled version.
// // You can safely delete these lines in your project.
// var reduxSrc = path.join(__dirname, '..', '..', 'src')
// var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
// var fs = require('fs')
// if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//   // Resolve Redux to source
//   module.exports.resolve = { alias: { 'redux': reduxSrc } }
//   // Compile Redux from source
//   module.exports.module.loaders.push({
//     test: /\.js$/,
//     loaders: [ 'babel' ],
//     include: reduxSrc
//   })
// }
