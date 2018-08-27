var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { getShape, addClassNames } from 'utils';
import { getNoticeState } from './utils';

export default function Notice(_ref) {
  var id = _ref.id,
      state = _ref.state,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      message = _ref.message,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'state', 'icon', 'iconPosition', 'message', 'rounded', 'classNames']);

  return React.createElement(
    'div',
    _extends({ id: id, className: 'notice ' + getNoticeState(state) + ' ' + getShape(rounded, 'notice') + ' ' + addClassNames(classNames) }, props),
    icon && iconPosition == 'left' ? React.createElement(Icon, icon) : null,
    React.createElement(
      'p',
      null,
      message && message
    ),
    icon && iconPosition == 'right' ? React.createElement(Icon, icon) : null
  );
}

Notice.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.arrayOf(PropTypes.string),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  state: PropTypes.oneOf(['success', 'error', 'warn'])
};