import React from 'react';
import {Modal} from 'pattern-lib-react';
import {modalProps} from '../data/modal';
import {storiesOf} from '@storybook/react';

storiesOf('Modal', module)
  .add('default', () => (
    <Modal {...modalProps} />
  ), {notes: 'modal'})
  .add('without dismiss', () => (
    <Modal
      {...modalProps}
      rounded
      id="modal2"
      preventClose
    />
  ), {notes: 'modal'});
