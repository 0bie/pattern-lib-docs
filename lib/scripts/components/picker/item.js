var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function PickerItem(_ref) {
  var id = _ref.id,
      item = _ref.item,
      title = _ref.title,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'item', 'title', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'picker-item ' + addClassNames(classNames) }, props),
    React.createElement(
      'label',
      { htmlFor: id },
      React.createElement(
        'div',
        { className: 'checkbox-container' },
        React.createElement('input', { className: 'checkbox checkbox--sm checkbox--rounded hidden', type: 'checkbox', name: id, id: id }),
        React.createElement('div', null)
      ),
      React.createElement(
        'div',
        { className: 'media' },
        React.createElement(
          'div',
          { className: 'media-item float--left' },
          item
        ),
        React.createElement(
          'div',
          { className: 'media-content' },
          React.createElement(
            'h4',
            { className: 'media-title' },
            title
          )
        )
      )
    )
  );
}

PickerItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.element,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};