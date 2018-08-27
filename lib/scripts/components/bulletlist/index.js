var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import BulletItem from './item';
import { addClassNames } from 'utils';

/**
 * Render a bulletlist
 * @param {array} items - The bulletlist items
 * @returns {object} Markup for bulletlist component
 */

export default function Bulletlist(_ref) {
  var items = _ref.items,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['items', 'classNames']);

  return React.createElement(
    'ul',
    _extends({ className: 'bulletlist ' + addClassNames(classNames) }, props),
    items.map(function (_ref2) {
      var id = _ref2.id,
          text = _ref2.text,
          classNames = _ref2.classNames;
      return React.createElement(BulletItem, {
        key: id,
        text: text,
        classNames: classNames
      });
    })
  );
}

Bulletlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  classNames: PropTypes.arrayOf(PropTypes.string)
};