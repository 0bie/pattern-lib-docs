var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';
import { getActiveClass } from './utils';

export default function TabSection(_ref) {
  var id = _ref.id,
      title = _ref.title,
      content = _ref.content,
      isActive = _ref.isActive,
      children = _ref.children,
      classNames = _ref.classNames,
      handleToggleActive = _ref.handleToggleActive,
      props = _objectWithoutProperties(_ref, ['id', 'title', 'content', 'isActive', 'children', 'classNames', 'handleToggleActive']);

  return React.createElement(
    'li',
    _extends({ className: 'tab-item ' + addClassNames(classNames) + ' ' + getActiveClass(isActive), role: 'presentation' }, props),
    React.createElement(
      'h1',
      {
        id: id + '-title',
        tabIndex: !isActive ? 0 : -1,
        onClick: handleToggleActive,
        onKeyPress: handleToggleActive,
        className: 'tab-title', role: 'tab', 'aria-controls': id + '-section'
      },
      title
    ),
    React.createElement(
      'section',
      {
        id: id + '-section',
        className: 'tab-section',
        'aria-hidden': !isActive,
        'aria-labelledby': id + '-title'
      },
      title && React.createElement(
        'h3',
        { tabIndex: '0' },
        'Tab section ',
        title
      ),
      content ? React.createElement(
        'div',
        null,
        content
      ) : children
    )
  );
}

TabSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  isActive: PropTypes.bool,
  handleToggleActive: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};