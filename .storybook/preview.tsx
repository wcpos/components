import React from 'react';
// import { ThemeProvider } from 'styled-components/native';
// import getTheme from '@wcpos/themes';
import { Preview } from '@storybook/react';

import '../global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
			<Story />
    ),
  ],
};

export default preview;
