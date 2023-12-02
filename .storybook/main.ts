import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],

  addons: [
    '@storybook/preset-create-react-app', 
    '@storybook/addon-essentials', 
    '@storybook/addon-actions', 
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          '@wcpos/hooks', 
          '@wcpos/themes', 
          '@wcpos/utils', 
          'react-native-reanimated', 
          'react-native-gesture-handler',
        ],
        babelPlugins: [
          'react-native-reanimated/plugin',
          'babel-plugin-styled-components'
        ],
      }
    }
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  typescript: {
		// check: false,
	},

  babel: async (options) => {
    // Update your babel configuration here
    return {
      ...options,
      presets: [
        ...options.presets,
        'babel-preset-expo',
      ],
    }
  },

  // typescript: { reactDocgen: 'react-docgen' },
  webpackFinal: async (config, { configType }) => {
    const rules = [{
      test: /\.(md|html)$/,
      type: 'asset/source'
    }];
    config.module.rules = config.module.rules.concat(rules);
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Mock expo-haptics
      'expo-haptics$': path.resolve(__dirname, 'utils/expo-haptics'),
    };
    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;
