import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function PaginationItem(_ref) {
  var link = _ref.link,
      number = _ref.number,
      classNames = _ref.classNames;

  return React.createElement(
    'li',
    { className: 'pagination-item pagination-b-item ' + addClassNames(classNames) },
    React.createElement(
      'a',
      { href: link, className: 'pagination-link' },
      number
    )
  );
}

PaginationItem.propTypes = {
  link: PropTypes.string,
  number: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};