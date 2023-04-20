const path = require('path');
// const webpack = require('webpack');

module.exports = {
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
      ],
      babelPlugins: ['react-native-reanimated/plugin']
    }
  }],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  babel: async options => ({
    // Update your babel configuration here
    ...options,
    presets: [['babel-preset-expo', {
      jsxRuntime: 'automatic'
    }], '@babel/preset-typescript']
  }),
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
    console.log(config.module.rules);
    return config;
  },
  docs: {
    autodocs: true
  }
};
