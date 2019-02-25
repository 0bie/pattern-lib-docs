import React, {Fragment} from 'react';
import {Status} from 'pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Status', module)
  .add('states', () => (
    <Fragment>
      <div className="mb--xs"><Status state="on" label="Online" /></div>
      <div className="mb--xs"><Status state="idle" label="Idle" /></div>
      <div><Status state="off" label="Offline" /></div>
    </Fragment>
  ), {notes: 'spinner'});
