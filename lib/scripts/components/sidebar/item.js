import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';

export default function SidebarItem(_ref) {
  var content = _ref.content,
      classNames = _ref.classNames;

  return React.createElement(
    'li',
    { className: 'sidebar-item ' + addClassNames(classNames) },
    content
  );
}

SidebarItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string)
};