var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { addClassNames } from 'utils';

export default function MenuItem(_ref) {
  var content = _ref.content,
      icon = _ref.icon,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['content', 'icon', 'classNames']);

  return React.createElement(
    'li',
    _extends({ className: 'menu-item ' + addClassNames(classNames) }, props),
    icon && React.createElement(Icon, icon),
    content
  );
}

MenuItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};