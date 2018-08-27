var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './item';
import { getShape, addClassNames } from 'utils';

export default function Media(_ref) {
  var title = _ref.title,
      description = _ref.description,
      item = _ref.item,
      footer = _ref.footer,
      footerContent = _ref.footerContent,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['title', 'description', 'item', 'footer', 'footerContent', 'rounded', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'media-container' }, props),
    React.createElement(
      'div',
      { className: 'media ' + addClassNames(classNames) + ' ' + getShape(rounded) },
      item && React.createElement(MediaItem, { item: item }),
      React.createElement(
        'div',
        { className: 'media-content' },
        React.createElement(
          'div',
          { className: 'media-titlebar' },
          React.createElement(
            'h4',
            { className: 'media-title' },
            title
          )
        ),
        description && React.createElement(
          'div',
          { className: 'media-description' },
          description
        )
      ),
      footer && React.createElement(
        'footer',
        { className: 'media-footer' },
        React.createElement(
          'div',
          { className: 'content' },
          React.createElement(
            'span',
            { className: 'block' },
            footerContent
          )
        )
      )
    )
  );
}

Media.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  footerContent: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string),
  item: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    }),
    icon: PropTypes.shape({
      id: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  })
};