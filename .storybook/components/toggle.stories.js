import React from 'react';
import {Toggle} from 'pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Toggle', module)
  .add('sizes', () => (
    <div>
      <Toggle id="toggle_sm" size="sm" />
      <Toggle id="toggle_md" size="md" />
      <Toggle id="toggle_lg" size="lg" checked />
    </div>
  ), {notes: 'toggle'});
