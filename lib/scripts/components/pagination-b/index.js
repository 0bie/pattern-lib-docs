var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './item';
import { getShape, addClassNames } from 'utils';

export default function PaginationB(_ref) {
  var items = _ref.items,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['items', 'rounded', 'classNames']);

  return React.createElement(
    'nav',
    _extends({ className: 'pagination cf ' + getShape(rounded, 'pagination') + ' ' + addClassNames(classNames) }, props),
    React.createElement(
      'ul',
      { className: 'pagination-list pagination-b-list' },
      React.createElement(
        'li',
        { className: 'pagination-item pagination-b-item' },
        React.createElement(
          'a',
          { href: '#', className: 'pagination-link pagination-item--disabled' },
          React.createElement(
            'span',
            { className: 'chevron vert--mid' },
            '\u2039'
          ),
          React.createElement(
            'span',
            { className: 'pagination-b-ctrls' },
            'Prev'
          )
        )
      ),
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
      }),
      React.createElement(
        'li',
        { className: 'pagination-item pagination-b-item' },
        React.createElement(
          'a',
          { href: '#', className: 'pagination-link' },
          React.createElement(
            'span',
            { className: 'pagination-b-ctrls' },
            'Next'
          ),
          React.createElement(
            'span',
            { className: 'chevron vert--mid' },
            '\u203A'
          )
        )
      )
    )
  );
}

PaginationB.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};