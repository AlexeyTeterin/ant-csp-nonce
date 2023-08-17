const {resolve} = require('path');

const environment = process.env.NODE_ENV;
const isDevEnv = environment === 'development';
const isProdEnv = environment === 'production';
const src = resolve(__dirname, '../src');

const buildPath = resolve('./build/dist');

module.exports = {
	buildPath,
	isDevEnv,
	isProdEnv,
	src,
};
