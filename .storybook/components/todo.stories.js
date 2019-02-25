import React from 'react';
import {Todo, Container} from 'pattern-lib-react';
import {todoItems1, todoItems2} from '../data/todo';
import {storiesOf} from '@storybook/react';

storiesOf('Todo', module)
  .add('default', () => (
    <Container>
      <Todo title="Todo Title" items={todoItems1} />
    </Container>
  ), {notes: 'timeline'})
  .add('rounded', () => (
    <Container>
      <Todo rounded title="Todo Title" items={todoItems2} classNames={['rounded']} />
    </Container>
  ), {notes: 'todo'});
