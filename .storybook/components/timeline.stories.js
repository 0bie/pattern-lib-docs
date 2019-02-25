import React from 'react';
import {Timeline, Container} from 'pattern-lib-react';
import {timelineEvents} from '../data/timeline';
import {storiesOf} from '@storybook/react';

storiesOf('Timeline', module)
  .add('default', () => (
    <Container>
      <Timeline events={timelineEvents} />
    </Container>
  ), {notes: 'timeline'});
