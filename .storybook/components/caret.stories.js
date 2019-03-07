import React, {Fragment} from 'react';
import {Caret} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Caret', module)
  .add('default', () => (
    <Fragment>
      <Caret direction="top" />
      <Caret direction="right" />
      <Caret direction="bottom" />
      <Caret direction="left" />
    </Fragment>
  ));
