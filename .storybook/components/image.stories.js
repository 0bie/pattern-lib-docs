import React, {Fragment} from 'react';
import {Image} from '@0bie/pattern-lib-react';
import {storiesOf} from '@storybook/react';

const imageSource = '/bag/bag2.jpg';

storiesOf('Image', module)
  .add('sizes', () => (
    <Fragment>
      <Image size="xs" src={imageSource} />
      <Image size="sm" src={imageSource} />
      <Image size="md" src={imageSource} />
      <Image size="lg" src={imageSource} />
      <Image size="xl" src={imageSource} />
    </Fragment>
  ), {notes: 'image?'})
  .add('with caption', () => (
    <Fragment>
      <Image size="xl" src={imageSource} caption="More colors available" />
    </Fragment>
  ));
