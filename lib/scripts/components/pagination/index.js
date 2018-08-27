var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './item';
import { getShape, addClassNames } from 'utils';

export default function Pagination(_ref) {
  var items = _ref.items,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['items', 'rounded', 'classNames']);

  return React.createElement(
    'nav',
    _extends({ className: 'pagination cf ' + getShape(rounded, 'pagination') + ' ' + addClassNames(classNames) }, props),
    React.createElement(
      'div',
      { className: 'pagination-wrap' },
      React.createElement(
        'span',
        { className: 'pagination-ctrls' },
        React.createElement(
          'a',
          { className: 'pagination-item--disabled' },
          React.createElement(
            'span',
            { className: 'chevron' },
            '\u2039'
          ),
          React.createElement(
            'span',
            null,
            'Prev'
          )
        ),
        React.createElement(
          'a',
          null,
          React.createElement(
            'span',
            null,
            'Next'
          ),
          React.createElement(
            'span',
            { className: 'chevron' },
            '\u203A'
          )
        )
      )
    ),
    React.createElement(
      'ul',
      { className: 'pagination-list' },
      items.map(function (_ref2) {
        var id = _ref2.id,
            link = _ref2.link,
            number = _ref2.number,
            classNames = _ref2.classNames;
        return React.createElement(PaginationItem, {
          key: id,
          link: link,
          number: number,
          classNames: classNames
        });
      })
    )
  );
}

Pagination.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};