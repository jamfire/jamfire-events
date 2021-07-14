const path = require(`path`)
const pkg = require(`./package.json`)

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      },
    ],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, `dist`),
    filename: `[name].js`,
    library: pkg.name,
    libraryTarget: `umd`,
  },
}
