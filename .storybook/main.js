import path from 'path';
// const webpack = require('webpack');

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/preset-create-react-app', '@storybook/addon-essentials', '@storybook/addon-actions', {
    name: '@storybook/addon-react-native-web',
    options: {
      modulesToTranspile: [
        '@wcpos/hooks', 
        '@wcpos/themes', 
        '@wcpos/utils', 
        'react-native-reanimated', 
        'react-native-gesture-handler', 
      ]
    }
  }],

  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },

  babel: async (options) => {
    // Update your babel configuration here
    return {
      ...options,
      sourceType: "module",
      presets: [
        '@wcpos/babel-preset-expo',
      ],
    }
  },

  // typescript: { reactDocgen: 'react-docgen' },
  webpackFinal: async (config, {
    configType
  }) => {
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
    config.resolve.extensions.unshift('.web.ts', '.web.tsx', '.web.js', '.ts', '.tsx');
    //console.log(config.module.rules);
    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;
