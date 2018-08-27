var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Toggle(_ref) {
  var id = _ref.id,
      size = _ref.size,
      checked = _ref.checked,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'size', 'checked', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'toggle-container ' + addClassNames(classNames) }, props),
    React.createElement('input', { id: id, className: 'toggle toggle--' + size, name: id, type: 'checkbox', defaultChecked: checked }),
    React.createElement('label', { htmlFor: id })
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};