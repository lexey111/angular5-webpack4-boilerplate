const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export const config = {
	entry: {
		vendor: './src/vendor.ts',
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
				vendor: {
					chunks: 'initial',
					test: 'vendor',
					name: 'vendor',
					enforce: true
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
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader'
					},
					{
						loader: 'angular2-template-loader',
						options: {
							keepUrl: true
						}
					}
				]
			},
			// templates
			{
				test: /\.(html)$/,
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
			// index
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
			// .less files of the components
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
			},
			// svg: inline to manage styles
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets/images',
				to: './assets/images',
				toType: 'dir'
			}
		]),
		// workaround https://github.com/angular/angular/issues/11580#issuecomment-282705332
		new webpack.ContextReplacementPlugin(
			/(.+)?angular([\\\/])core(.+)?/,
			root('./src'), {}
		),
	],
};

function root(__path) {
	return path.join(__dirname, __path);
}