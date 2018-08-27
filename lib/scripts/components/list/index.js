var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './item.js';
import { getShape, addClassNames } from 'utils';

export default function List(_ref) {
  var items = _ref.items,
      children = _ref.children,
      classNames = _ref.classNames,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, ['items', 'children', 'classNames', 'rounded']);

  return React.createElement(
    'ul',
    _extends({ className: 'list ' + addClassNames(classNames) + ' ' + getShape(rounded) }, props),
    items && items.map(function (_ref2) {
      var id = _ref2.id,
          text = _ref2.text,
          classNames = _ref2.classNames;
      return React.createElement(ListItem, {
        key: id,
        text: text,
        classNames: classNames
      });
    }),
    children
  );
}

List.propTypes = {
  rounded: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};