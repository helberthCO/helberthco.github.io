const path = require('path');
const jsPath = require.resolve('./source/js/app.js');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: jsPath,
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist/js'),
	},

	plugins: [
    new MiniCSSExtractPlugin({
			filename: '../css/style.css',
		}),
	],
	
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        loader: [
          MiniCSSExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer()]
						}
					},
					'sass-loader',
        ]
      }
    ]
  }
}