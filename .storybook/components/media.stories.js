import React, {Fragment} from 'react';
import {Avatar, Container, Image, Media, Icon} from 'pattern-lib-react';
import {mediaDescription} from '../data/media';
import {avatarWithImgProps} from '../data/avatar';
import {favoriteIcon} from '../data/icon';
import {storiesOf} from '@storybook/react';

const mediaItem =
  <Image
    size="md"
    src='/bag/bag3.jpg'
  />;

const mediaItemAvatar =
  <Avatar
    size="xxl"
    user={avatarWithImgProps}
  />;

const mediaFooterContent =
  <Fragment>
    Handcrafted with <Icon {...favoriteIcon} fill="EC675C" />
  </Fragment>;

storiesOf('Media', module)
  .add('default', () => (
    <Container>
      <Media
        footer
        item={mediaItem}
        title="Media Title"
        footerContent={mediaFooterContent}
        description="Handcrafted with the highest quality materials."
      />
    </Container>
  ), {notes: 'list?'})
  .add('rounded', () => (
    <Container classNames={['mb--md']}>
      <Media
        footer
        rounded
        item={mediaItem}
        title="Media Title"
        footerContent={mediaFooterContent}
        description="Handcrafted with the highest quality materials."
      />
    </Container>
  ))
  .add('no footer', () => (
    <Container>
      <Media
        rounded
        item={mediaItemAvatar}
        title="Joan Holloway"
        footerContent={mediaFooterContent}
        description={mediaDescription}
      />
    </Container>
  ));
