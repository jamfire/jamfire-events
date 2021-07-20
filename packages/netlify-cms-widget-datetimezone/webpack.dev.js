const { merge } = require(`webpack-merge`);
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const common = require(`./webpack.common.js`);

module.exports = merge(common, {
	mode: `development`,
	devtool: `eval-source-map`,
	entry: {
		index: `./dev/index.js`,
	},
	output: {
		filename: `index.js`,
		path: path.resolve(__dirname, `public`),
		clean: true,
	},
	devServer: {
		contentBase: `./public`,
		port: 9000,
		openPage: `#/collections/datetime/entries/datetime`,
		inline: false,
		hot: true,
		clientLogLevel: `info`,
		compress: true,
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	plugins: [new HtmlWebpackPlugin()],
});
