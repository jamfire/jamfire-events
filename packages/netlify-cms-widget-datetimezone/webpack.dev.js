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
		port: 9000,
		hot: true,
		compress: true,
	},
	plugins: [new HtmlWebpackPlugin()],
});
