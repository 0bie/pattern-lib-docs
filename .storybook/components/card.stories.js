import React from 'react';
import {Card} from '@0bie/pattern-lib-react';
import {card1, card2, card3, card4} from '../data/card';
import {storiesOf} from '@storybook/react';

storiesOf('Card', module)
  .add('default', () => (
    <Card footer {...card1} />
  ))
  .add('rounded', () => (
    <Card footer rounded {...card2} />
  ))
  .add('with image', () => (
    <Card footer {...card3} />
  ))
  .add('rounded with image', () => (
    <Card footer rounded {...card4} />
  ));
