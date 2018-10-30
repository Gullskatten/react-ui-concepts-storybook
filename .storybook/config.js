import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import defaultTheme from '../src/utils/theme.default';

const req = require.context('../src/stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
));

configure(loadStories, module);
