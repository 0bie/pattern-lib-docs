var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { addClassNames } from 'utils';

export default function ListItem(_ref) {
  var text = _ref.text,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['text', 'classNames']);

  return React.createElement(
    'li',
    _extends({ className: 'list-item ' + addClassNames(classNames) }, props),
    text
  );
}