import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default function DropdownItem(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition;

  return React.createElement(
    'li',
    { className: 'dropdown-item' },
    icon && iconPosition == 'left' ? React.createElement(Icon, icon) : '',
    React.createElement(
      'span',
      { className: 'vert--mid' },
      text
    ),
    icon && iconPosition == 'right' ? React.createElement(Icon, icon) : ''
  );
}

DropdownItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};