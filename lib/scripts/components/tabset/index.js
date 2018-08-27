var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from 'utils';

var TabSet = function (_Component) {
  _inherits(TabSet, _Component);

  function TabSet(props) {
    _classCallCheck(this, TabSet);

    var _this = _possibleConstructorReturn(this, (TabSet.__proto__ || Object.getPrototypeOf(TabSet)).call(this, props));

    Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        activeTab: 1
      }
    });
    Object.defineProperty(_this, 'handleToggle', {
      enumerable: true,
      writable: true,
      value: function value(activeTab) {
        _this.setState(function () {
          return {
            activeTab: activeTab
          };
        });
      }
    });
    return _this;
  }

  _createClass(TabSet, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;
      var activeTab = this.state.activeTab;

      var handleToggle = this.handleToggle;
      return React.Children.map(children, function (child, i) {
        return React.cloneElement(child, {
          isActive: i + 1 === activeTab,
          handleToggleActive: function handleToggleActive(evt) {
            var key = evt.keyCode || evt.which;
            if (evt.type === 'keypress' && key !== 13) return null;
            handleToggle(i + 1);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          classNames = _props.classNames,
          rounded = _props.rounded,
          props = _objectWithoutProperties(_props, ['id', 'classNames', 'rounded']);

      return React.createElement(
        'nav',
        props,
        React.createElement(
          'ul',
          { id: id, className: 'tab-list ' + getShape(rounded, 'tab-list') + ' ' + addClassNames(classNames) },
          this.renderChildren()
        )
      );
    }
  }]);

  return TabSet;
}(Component);

export default TabSet;


TabSet.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};