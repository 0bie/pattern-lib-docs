var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from './index';
import { getShape, addClassNames } from 'utils';

export default function ButtonGroup(_ref) {
  var display = _ref.display,
      buttonArr = _ref.buttonArr,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['display', 'buttonArr', 'rounded', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'btngroup--' + display + ' ' + getShape(rounded, 'btngroup') + ' ' + addClassNames(classNames) }, props),
    buttonArr.map(function (button, i) {
      return React.createElement(Button, _extends({}, button, {
        key: 'btngroup-btn-' + i
      }));
    })
  );
}

ButtonGroup.propTypes = {
  display: PropTypes.oneOf(['block', 'inline']),
  buttonArr: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    loading: PropTypes.bool,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }))
};