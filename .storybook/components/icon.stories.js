import React from 'react';
import {Icon} from 'pattern-lib-react';
import {twitterIcon} from '../data/icon';
import {storiesOf} from '@storybook/react';

storiesOf('Icon', module)
  .add('sizes', () => (
    <React.Fragment>
      <span className="mr--sm">{<Icon {...twitterIcon} size="sm" />}</span>
      <span className="mr--sm">{<Icon {...twitterIcon} size="md" />}</span>
      <span className="mr--sm">{<Icon {...twitterIcon} size="lg" />}</span>
      <span className="mr--sm">{<Icon {...twitterIcon} size="xl" />}</span>
    </React.Fragment>
  ), {notes: 'icon?'});
