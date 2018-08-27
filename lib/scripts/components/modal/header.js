import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { exitIcon } from './constants';

export default function ModalHeader(_ref) {
  var title = _ref.title,
      preventClose = _ref.preventClose;

  var closeButton = null;
  if (!preventClose) {
    closeButton = React.createElement(
      'button',
      { className: 'btn btn--sm btn--link' },
      React.createElement(Icon, exitIcon)
    );
  }
  return React.createElement(
    'header',
    { className: 'modal-header' },
    React.createElement(
      'h1',
      { className: 'modal-title' },
      title
    ),
    closeButton
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  preventClose: PropTypes.bool
};