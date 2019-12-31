const merge = require('webpack-merge')

const loadModeConfig = env => require(`./webpack.${env.mode}`)(env)
const loadPresets    = require('./load-presets')

module.exports = ({mode = 'production', presets = [], ...rest} = {}) => {

	const corePresets = [
		"html",
		"es6",
		"css"
	]

	// if only one preset is there, it is parsed as string, otherwise array. We convert to array here
	const commandLinePresets = [].concat(...[presets])

	const env = {
		mode,
		presets: [...corePresets, ...commandLinePresets],
		...rest
	}

	return merge(
		loadModeConfig(env),
		loadPresets(env)
	)
}
