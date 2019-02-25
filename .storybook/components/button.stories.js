import React, {Fragment} from 'react';
import {Button, ButtonGroup} from 'pattern-lib-react';
import {btnGroupBlock, btnGroupInline} from '../data/button';
import {storiesOf} from '@storybook/react';
import {favoriteIcon} from '../data/icon';

storiesOf('Button', module)
  .add('default', () => (
    <Fragment>
      <Button size="xs" label="Button-xs" classNames={['mr--xs']} />
      <Button size="sm" label="Button-sm" classNames={['mr--xs']} />
      <Button size="md" label="Button-md" classNames={['mr--xs']} />
      <Button size="lg" label="Button-lg" classNames={['mr--xs']} />
      <Button size="xl" label="Button-xl" />
    </Fragment>
  ), {notes: 'button'})
  .add('rounded', () => (
    <Fragment>
      <Button size="xs" rounded label="Button-xs" classNames={['mr--xs']} />
      <Button size="sm" rounded label="Button-sm" classNames={['mr--xs']} />
      <Button size="md" rounded label="Button-md" classNames={['mr--xs']} />
      <Button size="lg" rounded label="Button-lg" classNames={['mr--xs']} />
      <Button size="xl" rounded label="Button-xl" />
    </Fragment>
  ), {notes: 'button rounded'})
  .add('loading', () => (
    <Fragment>
      <Button size="sm" label="Button-sm" loading classNames={['mr--xs']} />
      <Button size="md" label="Button-md" loading classNames={['mr--xs']} />
      <Button size="lg" label="Button-lg" loading classNames={['mr--xs']} />
      <Button size="xl" label="Button-xl" loading />
    </Fragment>
  ), {notes: 'button loading'})
  .add('with icon', () => (
    <Fragment>
      <Button size="xs" label="Button-xs" icon={favoriteIcon} iconPosition="right" classNames={['mr--xs']} />
      <Button size="sm" label="Button-sm" icon={favoriteIcon} iconPosition="right" classNames={['mr--xs']} />
      <Button size="md" label="Button-md" icon={favoriteIcon} iconPosition="right" classNames={['mr--xs']} />
      <Button size="lg" label="Button-lg" icon={favoriteIcon} iconPosition="right" classNames={['mr--xs']} />
      <Button size="xl" label="Button-xl" icon={favoriteIcon} iconPosition="right" />
    </Fragment>
  ), {notes: 'button with icon'})
  .add('with hover', () => (
    <Fragment>
      <Button size="xs" label="Button-xs" classNames={['btn--hover mr--xs']} />
      <Button size="sm" label="Button-sm" classNames={['btn--hover mr--xs']} />
      <Button size="md" label="Button-md" classNames={['btn--hover mr--xs']} />
      <Button size="lg" label="Button-lg" classNames={['btn--hover mr--xs']} />
      <Button size="xl" label="Button-xl" classNames={['btn--hover']} />
    </Fragment>
  ), {notes: 'button with icon'})
  .add('with circle', () => (
    <Fragment>
      <Button size="xs" icon={favoriteIcon} classNames={['btn--circle']} />
      <Button size="sm" icon={favoriteIcon} classNames={['btn--circle']} />
      <Button size="md" icon={favoriteIcon} classNames={['btn--circle']} />
      <Button size="lg" icon={favoriteIcon} classNames={['btn--circle']} />
      <Button size="xl" icon={favoriteIcon} classNames={['btn--circle']} />
    </Fragment>
  ), {notes: 'button with icon'})
  .add('with group', () => (
    <Fragment>
      <ButtonGroup display="inline" buttonArr={btnGroupInline} classNames={['mb--sm']} />
      <ButtonGroup display="block" buttonArr={btnGroupBlock} classNames={['mb--sm']} />
      <ButtonGroup rounded display="inline" buttonArr={btnGroupInline} classNames={['mb--sm']} />
      <ButtonGroup rounded display="block" buttonArr={btnGroupBlock} />
    </Fragment>
  ), {notes: 'button with icon'});

