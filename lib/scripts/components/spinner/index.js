var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Spinner(_ref) {
  var size = _ref.size,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['size', 'classNames']);

  return React.createElement('div', _extends({ className: 'spinner spinner--' + size + ' ' + addClassNames(classNames) }, props));
}

Spinner.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])
};