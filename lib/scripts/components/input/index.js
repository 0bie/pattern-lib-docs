var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { getShape, addClassNames } from 'utils';
import { getInputState } from './utils';
import { errorIcon, successIcon } from './constants';

export default function Input(_ref) {
  var id = _ref.id,
      size = _ref.size,
      icon = _ref.icon,
      state = _ref.state,
      rounded = _ref.rounded,
      pattern = _ref.pattern,
      inputId = _ref.inputId,
      placeholder = _ref.placeholder,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type,
      classNames = _ref.classNames,
      inputClassNames = _ref.inputClassNames,
      props = _objectWithoutProperties(_ref, ['id', 'size', 'icon', 'state', 'rounded', 'pattern', 'inputId', 'placeholder', 'type', 'classNames', 'inputClassNames']);

  return React.createElement(
    'span',
    _extends({ id: id, className: 'input-field ' + getInputState(state) + ' ' + addClassNames(classNames) }, props),
    type !== 'textField' && React.createElement('input', {
      type: type,
      id: inputId,
      placeholder: placeholder,
      'data-pattern': pattern,
      'data-hint': pattern && id + '-hint',
      className: 'input input--' + size + ' ' + getShape(rounded, 'input') + ' ' + addClassNames(inputClassNames)
    }),
    type === 'textField' && React.createElement('textarea', {
      id: inputId,
      placeholder: placeholder,
      'data-pattern': pattern,
      'data-hint': pattern && id + '-hint',
      className: 'input input--' + size + ' ' + getShape(rounded) + ' ' + addClassNames(inputClassNames)
    }),
    icon && React.createElement(Icon, icon),
    state == 'error' && React.createElement(Icon, errorIcon),
    state == 'success' && React.createElement(Icon, successIcon)
  );
}

Input.propTypes = {
  id: PropTypes.string,
  inputId: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(['success', 'error', 'diabled']),
  type: PropTypes.oneOf(['text', 'number', 'textField']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  inputClassNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
};