var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from 'utils';

export default function Checkbox(_ref) {
  var id = _ref.id,
      size = _ref.size,
      label = _ref.label,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'size', 'label', 'rounded', 'classNames']);

  return React.createElement(
    'label',
    _extends({ id: id, className: 'checkbox-container ' + addClassNames(classNames) }, props),
    React.createElement('input', { id: id, className: 'checkbox checkbox--' + size + ' ' + getShape(rounded, 'checkbox') + ' hidden', type: 'checkbox', name: id }),
    React.createElement(
      'div',
      null,
      label && React.createElement(
        'span',
        { className: 'checkbox-label' },
        label
      )
    )
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};