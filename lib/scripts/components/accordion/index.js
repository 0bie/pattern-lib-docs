var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from 'utils';

export default function Accordion(_ref) {
  var id = _ref.id,
      rounded = _ref.rounded,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'rounded', 'children', 'classNames']);

  return React.createElement(
    'div',
    _extends({
      id: id
    }, props, {
      className: 'accordion ' + getShape(rounded) + ' ' + addClassNames(classNames)
    }),
    children
  );
}

Accordion.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
  // classNames: PropTypes.array
};