var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { getShape, addClassNames } from 'utils';
import { rightIcon, leftIcon } from './constants';

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        activeItem: 1
      }
    });
    Object.defineProperty(_this, 'handleNextItem', {
      enumerable: true,
      writable: true,
      value: function value() {
        var maxItems = React.Children.count(_this.props.children);
        var activeItem = _this.state.activeItem;
        var nextItem = activeItem + 1;
        if (nextItem > maxItems) nextItem = 1;
        _this.setState(function () {
          return {
            activeItem: nextItem
          };
        });
      }
    });
    Object.defineProperty(_this, 'handlePrevItem', {
      enumerable: true,
      writable: true,
      value: function value() {
        var maxItems = React.Children.count(_this.props.children);
        var activeItem = _this.state.activeItem;
        var prevItem = activeItem - 1;
        if (prevItem < 1) prevItem = maxItems;
        _this.setState(function () {
          return {
            activeItem: prevItem
          };
        });
      }
    });
    return _this;
  }

  _createClass(Carousel, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var activeItem = this.state.activeItem;

      return React.Children.map(children, function (child, i) {
        return React.cloneElement(child, {
          isActive: i + 1 === activeItem
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          rounded = _props.rounded,
          classNames = _props.classNames,
          props = _objectWithoutProperties(_props, ['id', 'rounded', 'classNames']);

      return React.createElement(
        'div',
        _extends({ id: id, className: 'carousel-container ' + addClassNames(classNames) }, props),
        React.createElement(
          'div',
          { className: 'carousel ' + getShape(rounded, 'carousel') },
          React.createElement(
            'ul',
            { className: 'carousel-list' },
            this.renderChildren()
          )
        ),
        React.createElement(
          'div',
          { className: 'carousel-controls' },
          React.createElement(Button, {
            size: 'md',
            tabIndex: '0',
            icon: leftIcon,
            onClick: this.handlePrevItem
          }),
          React.createElement(Button, {
            size: 'md',
            tabIndex: '0',
            icon: rightIcon,
            onClick: this.handleNextItem
          })
        )
      );
    }
  }]);

  return Carousel;
}(Component);

export default Carousel;


Carousel.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};