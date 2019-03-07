import React from 'react';
import {Cardlist} from '@0bie/pattern-lib-react';
import {cardlistProps} from '../data/cardlist';
import {storiesOf} from '@storybook/react';

storiesOf('Cardlist', module)
  .add('default', () => (
    <Cardlist {...cardlistProps} />
  ));
