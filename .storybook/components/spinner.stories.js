import React, {Fragment} from 'react';
import {Spinner} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Spinner', module)
  .add('sizes', () => (
    <Fragment>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size="xxl" />
    </Fragment>
  ));
