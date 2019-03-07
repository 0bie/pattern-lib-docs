import React from 'react';
import {Container, List} from '@0bie/pattern-lib-react';
import {listItems} from '../data/list';
import {storiesOf} from '@storybook/react';

storiesOf('List', module)
  .add('default', () => (
    <Container>
      <List items={listItems} classNames={['mb--md']} />
    </Container>
  ))
  .add('rounded', () => (
    <Container>
      <List items={listItems} rounded />
    </Container>
  ));
