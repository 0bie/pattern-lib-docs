import React, {Fragment} from 'react';
import {Radio} from 'pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Radio', module)
  .add('default', () => (
    <Fragment>
      <Radio size="sm" id="radio_sm" label="Radio Label" />
      <Radio size="md" id="radio_md" label="Radio Label" />
      <Radio size="lg" id="radio_lg" label="Radio Label" />
    </Fragment>
  ), {notes: 'radio'});
