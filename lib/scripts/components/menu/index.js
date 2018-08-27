var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './item';
import { getShape, addClassNames } from 'utils';

export default function Menu(_ref) {
  var title = _ref.title,
      items = _ref.items,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['title', 'items', 'rounded', 'classNames']);

  return React.createElement(
    'nav',
    _extends({ className: addClassNames(classNames) }, props),
    React.createElement(
      'ul',
      { className: 'menu ' + getShape(rounded) },
      title && React.createElement(
        'li',
        { className: 'menu-header' },
        React.createElement(
          'span',
          { className: 'menu-title pl--xs pr--xs' },
          title
        )
      ),
      items.map(function (_ref2) {
        var id = _ref2.id,
            content = _ref2.content,
            icon = _ref2.icon,
            classNames = _ref2.classNames;
        return React.createElement(MenuItem, {
          key: id,
          icon: icon,
          content: content,
          classNames: classNames
        });
      })
    )
  );
}

Menu.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    icon: PropTypes.shape({
      id: PropTypes.string,
      classNames: PropTypes.arrayOf(PropTypes.string),
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  }))
};