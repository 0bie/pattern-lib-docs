import React from 'react';
import {Card} from 'pattern-lib-react';
import {card1, card2, card3, card4} from '../data/card';
import {storiesOf} from '@storybook/react';

storiesOf('Card', module)
  .add('default', () => (
    <Card footer {...card1} />
  ), {notes: 'card?'})
  .add('rounded', () => (
    <Card footer rounded {...card2} />
  ), {notes: 'card?'})
  .add('with image', () => (
    <Card footer {...card3} />
  ), {notes: 'card?'})
  .add('rounded with image', () => (
    <Card footer rounded {...card4} />
  ), {notes: 'card?'});
