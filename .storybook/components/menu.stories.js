import React from 'react';
import {Container, Menu} from 'pattern-lib-react';
import {menuProps, menuRoundedProps} from '../data/menu';
import {storiesOf} from '@storybook/react';

storiesOf('Menu', module)
  .add('default', () => (
    <Container>
      <Menu {...menuProps} />
    </Container>
  ), {notes: 'menu'})
  .add('rounded', () => (
    <Container>
      <Menu {...menuRoundedProps} />
    </Container>
  ), {notes: 'menu'});
