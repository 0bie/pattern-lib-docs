import React, {Fragment} from 'react';
import {Avatar} from 'pattern-lib-react';
import {userIcon} from '../data/icon';
import {avatarProps, avatarWithImgProps} from '../data/avatar';
import {storiesOf} from '@storybook/react';

storiesOf('Avatar', module)
  .add('with icon', () => (
    <Fragment>
      <Avatar size="sm" icon={userIcon} classNames={['mr--xs']} />
      <Avatar size="md" icon={userIcon} classNames={['mr--xs']} />
      <Avatar size="lg" icon={userIcon} classNames={['mr--xs']} />
      <Avatar size="xl" icon={userIcon} />
    </Fragment>
  ), {notes: 'avatar with icon?'})
  .add('with user initials', () => (
    <Fragment>
      <Avatar size="sm" user={avatarProps} classNames={['mr--xs']} />
      <Avatar size="md" user={avatarProps} classNames={['mr--xs']} />
      <Avatar size="lg" user={avatarProps} classNames={['mr--xs']} />
      <Avatar size="xl" user={avatarProps} />
    </Fragment>
  ), {notes: 'avatar with initials?'})
  .add('with user image', () => (
    <Fragment>
      <Avatar size="sm" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar size="md" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar size="lg" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar size="xl" user={avatarWithImgProps} />
    </Fragment>
  ), {notes: 'avatar with image?'})
  .add('rounded', () => (
    <Fragment>
      <Avatar rounded size="sm" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar rounded size="md" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar rounded size="lg" user={avatarWithImgProps} classNames={['mr--xs']} />
      <Avatar rounded size="xl" user={avatarWithImgProps} />
    </Fragment>
  ), {notes: 'avatar with image?'});
