const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
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
        }),
		new MiniCssExtractPlugin({
		  filename: '[name].css',
		  chunkFilename: '[id].css',
		})
    ],
	optimization: {
		nodeEnv: 'production',
		minimizer: [new UglifyJsPlugin()],
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
			test: /\.(jpg|png|gif|svg)$/,
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
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				'sass-loader',
			]
        },
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
				  presets: ['env', 'stage-0', 'react']
				}
			}
		}]
    }
}