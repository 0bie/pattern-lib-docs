import React from 'react';
import {Hero} from '@0bie/pattern-lib-react';
import {heroCta, heroImage} from '../data/hero';
import {storiesOf} from '@storybook/react';

storiesOf('Hero', module)
  .add('default', () => (
    <Hero
      cta={heroCta}
      subtitle="Hero subtitle"
      title="This is placeholder text for a hero title"
    />
  ))
