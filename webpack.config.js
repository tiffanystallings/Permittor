module.exports = {
  entry: __dirname + '/app/script.js',
  module: {
  	loaders: [
  	   {
  	   	  test: /\.js$/,
  	   	  exclude: /node_modules/,
  	   	  loader: 'babel-loader'
  	   },
       {
          test: /\.json$/,
          exclude: /node_modules/,
          loader: 'json-loader'
       }
  	]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js']
  },
  output: {
  	filename: 'final.js',
  	path: __dirname + '/build'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};