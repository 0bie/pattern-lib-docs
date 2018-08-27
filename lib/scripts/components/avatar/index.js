var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from 'utils';
import { getName, getInitials } from './utils';

export default function Avatar(_ref) {
  var user = _ref.user,
      size = _ref.size,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['user', 'size', 'rounded', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'avatar avatar--' + size + ' ' + getShape(rounded, 'avatar') + ' ' + addClassNames(classNames) }, props),
    user.image ? React.createElement('img', { className: 'avatar-img', src: user.image, alt: 'a profile photo of ' + getName(user.firstName, user.lastName) }) : user.icon ? React.createElement(
      'div',
      null,
      'icon...'
    ) : user.firstName || user.lastName ? React.createElement(
      'div',
      { className: 'avatar-text' },
      getInitials(user.firstName, user.lastName)
    ) : new Error('Avatar requires an image, icon, firstName or lastName')
  );
}

Avatar.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string
  })
};