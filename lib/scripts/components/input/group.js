var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Input from './index';
import { getShape, addClassNames } from 'utils';

export default function InputGroup(_ref) {
  var display = _ref.display,
      inputArr = _ref.inputArr,
      classNames = _ref.classNames,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, ['display', 'inputArr', 'classNames', 'rounded']);

  return React.createElement(
    'div',
    _extends({ className: 'input-group--' + display + ' ' + getShape(rounded, 'input-group') + ' ' + addClassNames(classNames) }, props),
    inputArr.map(function (input) {
      return React.createElement(Input, _extends({ key: input.id }, input));
    })
  );
}

InputGroup.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.oneOf(['inline', 'block']),
  inputArr: PropTypes.arrayOf(PropTypes.shape({
    rounded: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    pattern: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.oneOf(['success', 'error', 'diabled']),
    type: PropTypes.oneOf(['text', 'number', 'textField']),
    classNames: PropTypes.arrayOf(PropTypes.string),
    inputClassNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  }))
};