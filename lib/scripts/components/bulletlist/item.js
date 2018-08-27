var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

/**
 * Render a bulletlist item
 * @param {string} text - The item text
 * @param {array} classNames - Additional Classnames (Optional)
 * @returns {object} Markup for bulletlist item
 */

export default function BulletItem(_ref) {
  var text = _ref.text,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['text', 'classNames']);

  return React.createElement(
    'li',
    _extends({ className: 'bulletlist-item ' + addClassNames(classNames) }, props),
    text
  );
}

BulletItem.propTypes = {
  text: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};