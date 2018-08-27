var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from 'utils';
import Icon from '../icon';

export default function Button(_ref) {
  var size = _ref.size,
      text = _ref.text,
      icon = _ref.icon,
      rounded = _ref.rounded,
      loading = _ref.loading,
      classNames = _ref.classNames,
      iconPosition = _ref.iconPosition,
      props = _objectWithoutProperties(_ref, ['size', 'text', 'icon', 'rounded', 'loading', 'classNames', 'iconPosition']);

  var isLoading = loading ? 'btn--loading btn--loading--' + size : '';
  var btnClassNames = 'btn btn--' + size + ' ' + isLoading + ' ' + getShape(rounded, 'btn') + ' ' + addClassNames(classNames);
  return React.createElement(
    'button',
    _extends({ className: btnClassNames }, props),
    icon && iconPosition == 'left' ? React.createElement(Icon, icon) : null,
    text ? React.createElement(
      'span',
      { className: 'btn-text' },
      text
    ) : loading ? React.createElement(
      'span',
      { className: 'text--sr' },
      'loading'
    ) : icon && !iconPosition ? React.createElement(Icon, icon) : null,
    icon && iconPosition == 'right' ? React.createElement(Icon, icon) : null
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};