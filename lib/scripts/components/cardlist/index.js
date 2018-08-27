var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import CardlistItem from './item';
import { addClassNames } from 'utils';

export default function Cardlist(_ref) {
  var id = _ref.id,
      title = _ref.title,
      items = _ref.items,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['id', 'title', 'items', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'cardlist-container ' + addClassNames(classNames) }, props),
    title && React.createElement(
      'header',
      { className: 'cardlist-header' },
      React.createElement(
        'h1',
        { className: 'cardlist-title' },
        title
      )
    ),
    React.createElement(
      'ul',
      { id: id, className: 'cardlist' },
      items.map(function (_ref2) {
        var id = _ref2.id,
            image = _ref2.image,
            title = _ref2.title,
            subtitle = _ref2.subtitle,
            details = _ref2.details,
            classNames = _ref2.classNames;
        return React.createElement(CardlistItem, {
          key: id,
          image: image,
          title: title,
          subtitle: subtitle,
          details: details,
          classNames: classNames
        });
      })
    )
  );
}

Cardlist.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};