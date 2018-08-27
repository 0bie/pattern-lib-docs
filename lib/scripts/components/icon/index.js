var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Icon(_ref) {
  var id = _ref.id,
      size = _ref.size,
      fill = _ref.fill,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 30 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 30 : _ref$height,
      classNames = _ref.classNames,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, ['id', 'size', 'fill', 'title', 'width', 'height', 'classNames', 'description']);

  return React.createElement(
    'svg',
    _extends({
      role: 'img',
      width: width,
      height: height,
      style: { fill: fill },
      'aria-labelledby': 'title',
      className: 'icon icon--' + size + ' ' + addClassNames(classNames)
    }, props),
    title ? React.createElement(
      'title',
      null,
      title
    ) : '',
    description ? React.createElement(
      'desc',
      null,
      description
    ) : '',
    React.createElement('use', { xlinkHref: '#' + id })
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  description: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};