import React from 'react';
import {Bulletlist, Container} from '@0bie/pattern-lib-react';
import {bulletlistItems} from '../data/bulletlist';
import {storiesOf} from '@storybook/react';

storiesOf('Bulletlist', module)
  .add('default', () => (
    <Container>
      <Bulletlist items={bulletlistItems} />
    </Container>
  ));
