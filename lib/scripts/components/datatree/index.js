var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';
import { renderItems } from './utils';

export default function DataTree(_ref) {
  var items = _ref.items,
      classNames = _ref.classNames,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['items', 'classNames', 'children']);

  return React.createElement(
    'div',
    _extends({ className: 'datatree ' + addClassNames(classNames) }, props),
    React.createElement(
      'ul',
      { className: 'datatree-list' },
      children || renderItems(items)
    )
  );
}

DataTree.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
  }))
};