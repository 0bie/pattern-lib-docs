var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from 'utils';
import { getActiveClass } from './utils';

export default function CarouselItem(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      isActive = _ref.isActive,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['image', 'title', 'description', 'isActive', 'classNames']);

  return React.createElement(
    'li',
    _extends({ className: 'carousel-item ' + getActiveClass(isActive) + ' ' + addClassNames(classNames), 'aria-hidden': !isActive }, props),
    React.createElement(
      'div',
      { className: 'media-container' },
      React.createElement(
        'div',
        { className: 'media' },
        React.createElement(
          'div',
          { className: 'media-item' },
          React.createElement('img', { className: 'carousel-image', src: image.url, alt: image.alt })
        ),
        React.createElement(
          'div',
          { className: 'media-content' },
          React.createElement(
            'h3',
            { className: 'media-title' },
            title
          ),
          React.createElement(
            'div',
            { className: 'media-description' },
            description
          )
        )
      )
    )
  );
}

CarouselItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  isActive: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};