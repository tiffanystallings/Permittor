module.exports = {
  entry: __dirname + '/app/script.js',
  module: {
  	loaders: [
  	   {
  	   	  test: /\.js$/,
  	   	  exclude: /node_modules/,
  	   	  loader: 'babel-loader'
  	   }
  	]
  },
  output: {
  	filename: 'final.js',
  	path: __dirname + '/build'
  }
};