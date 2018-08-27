var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Status(_ref) {
  var state = _ref.state,
      text = _ref.text,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['state', 'text', 'classNames']);

  return React.createElement(
    'span',
    _extends({ className: 'status status--' + state + ' ' + addClassNames(classNames) }, props),
    React.createElement('span', { className: 'status-icon', 'aria-hidden': 'true' }),
    React.createElement(
      'span',
      { className: 'status-text' },
      text
    )
  );
}

Status.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.oneOf(['on', 'off', 'idle'])
};