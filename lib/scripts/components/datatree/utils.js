var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import DataTreeItem from './item';

export var renderItems = function renderItems(items) {
  if (items && items.length) {
    return items.map(function (item) {
      return React.createElement(DataTreeItem, _extends({
        key: item.id
      }, item));
    });
  }
};

export var renderSubItems = function renderSubItems(item) {
  if (item instanceof Array) {
    return item.map(function (item) {
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object') {
        return React.createElement(
          'li',
          { key: item.id, className: 'datatree-subitem' },
          React.createElement(
            'span',
            { className: 'datatree-subtitle' },
            item.title
          ),
          React.createElement(
            'ul',
            { className: 'datatree-sublist' },
            renderSubItems(item.value)
          )
        );
      }
      return React.createElement(
        'li',
        { key: 'subitem-' + item, className: 'datatree-subitem' },
        React.createElement(
          'span',
          null,
          item
        )
      );
    });
  }
  return React.createElement(
    'li',
    { className: 'datatree-subitem' },
    React.createElement(
      'span',
      null,
      item
    )
  );
};