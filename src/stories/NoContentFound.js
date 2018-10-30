import React from 'react';
import { storiesOf } from '@storybook/react';
import NoContentFound  from '../components/NoContentFound';

storiesOf('NoContentFound', module).add('Default', () => <NoContentFound />);
storiesOf('NoContentFound', module).add('With custom label', () => <NoContentFound label="No information found. Sorry! (≥o≤)" />);