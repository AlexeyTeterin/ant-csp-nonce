const {buildPath, isProdEnv} = require('./define');
const loaders = require('./loaders');
const plugins = require('./plugins');
const resolve = require('./resolve');

module.exports = {
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
		open: true,
		port: 6000,
	},
	devtool: 'source-map',
	mode: isProdEnv ? 'production' : 'development',
	module: loaders,
	output: {
		clean: true,
		filename: '[name].[contenthash].js',
		path: buildPath,
		publicPath: 'auto',
	},
	plugins,
	resolve,
	target: isProdEnv ? 'browserslist' : 'web',
};
