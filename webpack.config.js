const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
    entry: "./index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
	context: path.resolve(__dirname, 'src'),
	plugins: [
		new CleanWebpackPlugin(['public']),
		new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
	optimization: {
		nodeEnv: 'development',
		splitChunks: {
		  chunks: 'async',
		  minSize: 30,
		  maxSize: 0,
		  minChunks: 1,
		  maxAsyncRequests: 5,
		  maxInitialRequests: 3,
		  automaticNameDelimiter: '~',
		  name: true,
		  cacheGroups: {
			vendors: {
			  test: /[\\/]node_modules[\\/]/,
			  priority: -10
			},
			default: {
			  minChunks: 2,
			  priority: -20,
			  reuseExistingChunk: true
			}
		  }
		}
	},
	devServer: {
	   contentBase: path.resolve(__dirname, 'public/assets'),
	   stats: 'errors-only',
	   open: true,
	   port: 8080,
	   compress: true
	},
    module: {
        rules: [{
			test: /\.(jpg|png|gif|svg|json)$/,
			exclude: /node_modules/,
            use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/',
                }
            }]
        }, 
		{
			test: /\.(sa|sc|c)ss$/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'sass-loader',
			]
        },
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
				  presets: ['env', 'stage-0', 'react']
				}
			}
		}]
    }
}