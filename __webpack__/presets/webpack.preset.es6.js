module.exports = ({mode}) => ({
	module: {
		rules: [
			{
				test   : /\.js$/,
				exclude: /node_modules/,
				use    : [{
					loader: "babel-loader"
				}]
			}
		]
	},
	output: {
		filename: mode === 'production'
			? "[name]-[chunkhash].js"
			: "[name].js"
	}
})
