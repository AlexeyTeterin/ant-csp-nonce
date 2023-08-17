const {isDevEnv} = require('./define');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	rules: [
		{
			resolve: {
				fullySpecified: false,
			},
			test: /\.m?js&/,
			type: 'javascript/auto',
		},
		{
			exclude: /node_modules/,
			test: /\.(ts|js)x?$/,
			use: {
				loader: 'babel-loader',
				options: {
					cacheCompression: false,
					cacheDirectory: true,
					configFile: './babel.config.js',
				},
			},
		},
		{
			test: /\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {plugins: ['autoprefixer']},
						sourceMap: isDevEnv,
					},
				},
			],
		},
		{
			test: /\.(less)$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: '',
					},
				},
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: '[name]__[local]',
						},
						sourceMap: isDevEnv,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {plugins: ['autoprefixer']},
						sourceMap: isDevEnv,
					},
				},
				{
					loader: 'less-loader',
					options: {
						lessOptions: {
							javascriptEnabled: true,
						},
						sourceMap: isDevEnv,
					},
				},
			],
		},
		{
			test: /\.(gif|png|jpg|jpeg|woff|woff2|ttf|eot|svg)$/,
			type: 'asset/resource',
		},
	],
};
