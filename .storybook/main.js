const path = require('path');
const webpack = require('webpack');

module.exports = {
	core: {
    builder: 'webpack5',
	},
	
	stories: ['../src/**/*.stories.tsx'],

	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		'@storybook/addon-react-native-web'
	],

	framework: '@storybook/react',

	typescript: {
		// @TODO remove this https://github.com/styleguidist/react-docgen-typescript/issues/356
		// reactDocgen: 'none',
	},

	babel: async (options) => ({
    // Update your babel configuration here
    ...options,
		presets: ['@wcpos/babel-preset-expo']
  }),

	webpackFinal: async (config, { configType }) => {
		// I need to transpile the packages from @wcpos 
		config.module.rules[7].exclude = [/node_modules\/(?!(@wcpos)\/)/]
		config.module.rules[7].include = /\.(js|jsx|ts|tsx)$/;
		console.log(config.module.rules[7]);

		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// Mock expo-haptics
			'expo-haptics$': path.resolve(__dirname, 'utils/expo-haptics'),
		}
			 
    return config;
	},
};
