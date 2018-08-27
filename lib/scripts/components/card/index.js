var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import CardItem from './item';
import CardFooter from './footer';
import { getShape, addClassNames } from 'utils';

export default function Card(_ref) {
  var image = _ref.image,
      icon = _ref.icon,
      title = _ref.title,
      description = _ref.description,
      actions = _ref.actions,
      footer = _ref.footer,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['image', 'icon', 'title', 'description', 'actions', 'footer', 'rounded', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'card-container ' + getShape(rounded) + ' ' + addClassNames(classNames) }, props),
    React.createElement(
      'div',
      { className: 'card' },
      (icon || image) && React.createElement(CardItem, { icon: icon, image: image }),
      React.createElement(
        'div',
        { className: 'card-content' },
        React.createElement(
          'div',
          { className: 'card-titlebar' },
          React.createElement(
            'h4',
            { className: 'card-title' },
            title
          ),
          React.createElement(Button, { size: 'xs', text: 'button', classNames: [getShape(rounded)] })
        ),
        React.createElement(
          'div',
          { className: 'card-description' },
          description
        )
      ),
      footer && React.createElement(
        'div',
        { className: 'card-footer' },
        React.createElement(CardFooter, { actions: actions })
      )
    )
  );
}

Card.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  classNames: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })
};