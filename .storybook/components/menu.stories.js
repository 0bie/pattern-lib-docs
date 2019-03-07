import React from 'react';
import {Container, Menu} from '@0bie/pattern-lib-react';
import {menuProps, menuRoundedProps} from '../data/menu';
import {storiesOf} from '@storybook/react';

storiesOf('Menu', module)
  .add('default', () => (
    <Container>
      <Menu {...menuProps} />
    </Container>
  ))
  .add('rounded', () => (
    <Container>
      <Menu {...menuRoundedProps} />
    </Container>
  ));
