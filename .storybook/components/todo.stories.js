import React from 'react';
import {Todo, Container} from '@0bie/pattern-lib-react';
import {todoItems1, todoItems2} from '../data/todo';
import {storiesOf} from '@storybook/react';

storiesOf('Todo', module)
  .add('default', () => (
    <Container>
      <Todo title="Todo Title" items={todoItems1} />
    </Container>
  ))
  .add('rounded', () => (
    <Container>
      <Todo rounded title="Todo Title" items={todoItems2} classNames={['rounded']} />
    </Container>
  ));
