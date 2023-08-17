const {buildPath, isProdEnv} = require('./define');
const loaders = require('./loaders');
const plugins = require('./plugins');
const resolve = require('./resolve');

module.exports = {
	devServer: {
		allowedHosts: 'all',
		historyApiFallback: true,
		open: true,
		static: {
			directory: buildPath,
			publicPath: 'auto',
		},
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
