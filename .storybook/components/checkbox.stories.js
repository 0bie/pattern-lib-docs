import React, {Fragment} from 'react';
import {Checkbox} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Fragment>
      <Checkbox size="sm" id="check_sm" label="Checkbox Label" classNames={['mr--xs']} />
      <Checkbox size="md" id="check_md" label="Checkbox Label" classNames={['mr--xs']} />
      <Checkbox size="lg" id="check_lg" label="Checkbox Label" />
    </Fragment>
  ))
  .add('rounded', () => (
    <Fragment>
      <Checkbox rounded size="sm" id="check_sm1" label="Checkbox Label" classNames={['mr--xs']} />
      <Checkbox rounded size="md" id="check_md1" label="Checkbox Label" classNames={['mr--xs']} />
      <Checkbox rounded size="lg" id="check_lg1" label="Checkbox Label" />
    </Fragment>
  ));
