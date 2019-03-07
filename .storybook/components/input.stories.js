import React, {Fragment} from 'react';
import {Input, InputGroup} from '@0bie/pattern-lib-react';
import {
  input_sm,
  input_md,
  input_lg,
  input_xl,
  input_xxl,
  input_search,
  input_search_rounded,
  input_rounded,
  input_rounded_md,
  input_rounded_lg,
  input_rounded_xl,
  input_rounded_xxl,
  inputGroupItems
} from '../data/input';
import {storiesOf} from '@storybook/react';

storiesOf('Input', module)
  .add('sizes', () => (
    <Fragment>
      <Input {...input_sm} size="xs" />
      <Input {...input_sm} />
      <Input {...input_md} />
      <Input {...input_lg} />
      <Input {...input_xl} />
      <Input {...input_xxl} />
    </Fragment>
  ), {notes: 'input?'})
  .add('rounded', () => (
    <Fragment>
      <Input {...input_rounded} />
      <Input {...input_rounded_md} />
      <Input {...input_rounded_lg} />
      <Input {...input_rounded_xl} />
      <Input {...input_rounded_xxl} />
    </Fragment>
  ))
  .add('states', () => (
    <Fragment>
      <Input {...input_sm} size="xs" state="error" classNames={['mr--sm']} />
      <Input {...input_sm} size="xs" state="success" />
    </Fragment>
  ))
  .add('with icon', () => (
    <Fragment>
      <Input {...input_search} />
      <Input {...input_search_rounded} />
    </Fragment>
  ))
  .add('with group', () => (
    <Fragment>
      <div className="mb--sm">
        <InputGroup display="inline" inputArr={inputGroupItems} classNames={['mb--sm']} />
        <InputGroup display="block" inputArr={inputGroupItems} />
      </div>
      <div>
        <InputGroup rounded display="inline" inputArr={inputGroupItems} classNames={['mb--sm']} />
        <InputGroup rounded display="block" inputArr={inputGroupItems} />
      </div>
    </Fragment>
  ), {notes: 'input?'});
