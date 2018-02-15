const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export const config = {
	entry: {
		app: './src/index.ts',
	},
	target: 'web',
	/*
	output: {
		path: path.resolve('./dist'),
		publicPath: '.',
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	*/
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	resolve: {
		extensions: ['.js', '.ts', '.html']
	},
	module: {
		rules: [
			{
				test: /.js$/,
				parser: {
					system: true
				}
			},
			// Typescript
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			// Templates
			{
				test: /\.html$/,
				exclude: /index.html$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/templates/[name].[ext]'
						}
					}
				]
			},
			// index file
			{
				test: /index.html$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			// .less files - components
			{
				test: /\.less$/,
				exclude: /app\.less$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/templates/[name].css'
						}
					},
					{
						loader: 'less-loader',
					}
				]
			},
			// main application .less file
			{
				test: /app\.less$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[name].css'
						}

					},
					{
						loader: 'less-loader',
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
			BUILDTIMESTAMP: JSON.stringify(Date.now()),
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets/images',
				to: './assets/images',
				toType: 'dir'
			}
		]),
	],
};