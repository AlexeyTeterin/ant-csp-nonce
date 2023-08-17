const {version} = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {DefinePlugin} = require('webpack');

module.exports = [
	new DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		},
	}),
	new HtmlWebpackPlugin({
		meta: {version},
		template: './src/index.html',
	}),
	new MiniCssExtractPlugin({
		chunkFilename: '[id].[contenthash].css',
		filename: '[name].[contenthash].css',
	}),
];
