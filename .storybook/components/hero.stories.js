import React from 'react';
import {Hero} from 'pattern-lib-react';
import {heroCta, heroImage} from '../data/hero';
import {storiesOf} from '@storybook/react';

storiesOf('Hero', module)
  .add('without image', () => (
    <Hero
      cta={heroCta}
      subtitle="Hero subtitle"
      title="This is placeholder text for a hero title"
    />
  ), {notes: 'hero?'})
  .add('with image', () => (
    <Hero
      cta={heroCta}
      image={heroImage}
      subtitle="Hero subtitle"
      title="This is placeholder text for a hero title"
    />
  ), {notes: 'dropdown?'});
