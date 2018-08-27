var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { renderSubItems } from './utils';

export default function DataTreeItem(_ref) {
  var title = _ref.title,
      item = _ref.item,
      props = _objectWithoutProperties(_ref, ['title', 'item']);

  return React.createElement(
    'li',
    _extends({ className: 'datatree-item' }, props),
    React.createElement(
      'span',
      { className: 'datatree-title' },
      title
    ),
    item && React.createElement(
      'ul',
      { className: 'datatree-sublist' },
      renderSubItems(item)
    )
  );
}

DataTreeItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
};