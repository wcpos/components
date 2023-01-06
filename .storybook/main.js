const path = require('path');
// const webpack = require('webpack');

module.exports = {
  core: {
    builder: 'webpack5'
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/preset-create-react-app', '@storybook/addon-essentials', '@storybook/addon-actions', {
    name: '@storybook/addon-react-native-web',
    options: {
      modulesToTranspile: [
        '@wcpos/hooks',
        '@wcpos/themes',
        '@wcpos/utils',
        'react-native-reanimated',
        'react-native-gesture-handler'
      ],
      babelPlugins: ['react-native-reanimated/plugin', '@babel/plugin-proposal-export-namespace-from'],
    }
  }],
  framework: '@storybook/react',
  typescript: {// @TODO remove this https://github.com/styleguidist/react-docgen-typescript/issues/356
    // reactDocgen: false,
  },

  babel: async options => ({ // Update your babel configuration here
    ...options,
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }], '@babel/preset-typescript'],
  }),

  webpackFinal: async (config, { configType }) => {

    const rules = [
      {
        test: /\.(md|html)$/,
        type: 'asset/source',
      },
    ];
    config.module.rules = config.module.rules.concat(rules);

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Mock expo-haptics
      'expo-haptics$': path.resolve(__dirname, 'utils/expo-haptics')
    };

    console.log(config.module.rules);
    return config;
  }

};