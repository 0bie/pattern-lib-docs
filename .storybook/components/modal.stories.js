import React from 'react';
import {Modal} from '@0bie/pattern-lib-react';
import {modalProps} from '../data/modal';
import {storiesOf} from '@storybook/react';

storiesOf('Modal', module)
  .add('default', () => (
    <Modal {...modalProps} />
  ))
  .add('without dismiss', () => (
    <Modal
      {...modalProps}
      rounded
      id="modal2"
      preventClose
    />
  ));
