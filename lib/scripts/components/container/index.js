var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function Container(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['children', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'constrain ' + addClassNames(classNames) }, props),
    children
  );
}

Container.propTypes = {
  children: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string)
};