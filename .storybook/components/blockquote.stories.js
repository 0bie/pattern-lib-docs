import React from 'react';
import {Blockquote, Container} from '@0bie/pattern-lib-react';
import {quote1, quote2} from '../data/blockquote';
import {storiesOf} from '@storybook/react';

storiesOf('Blockquote', module)
  .add('default', () => (
    <Container>
      <Blockquote {...quote1} quote={quote1.user.quote} />
    </Container>
  ), {notes: 'blockquote?'})
  .add('rounded', () => (
    <Container>
      <Blockquote {...quote2} quote={quote2.user.quote} />
    </Container>
  ));
