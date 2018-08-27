var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Image(_ref) {
  var size = _ref.size,
      src = _ref.src,
      caption = _ref.caption,
      _ref$alt = _ref.alt,
      alt = _ref$alt === undefined ? '' : _ref$alt,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['size', 'src', 'caption', 'alt', 'classNames']);

  return React.createElement(
    'figure',
    _extends({ className: 'image-container' }, props),
    React.createElement('img', { className: 'image image--' + size + ' ' + addClassNames(classNames), src: src, alt: alt }),
    caption && React.createElement(
      'figcaption',
      { className: 'image-caption' },
      caption
    )
  );
}

Image.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};