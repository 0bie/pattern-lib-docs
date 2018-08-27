var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './item';
import { addClassNames } from 'utils';
import { getActiveClassName } from './utils';

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        isActive: false
      }
    });
    Object.defineProperty(_this, 'handleToggle', {
      enumerable: true,
      writable: true,
      value: function value(evt) {
        var key = evt.keyCode || evt.which;
        if (evt.type === 'keypress' && key !== 13) return null;
        _this.setState(function (prevState) {
          return {
            isActive: !prevState.isActive
          };
        });
      }
    });
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {
      var isActive = this.state.isActive;

      var _props = this.props,
          id = _props.id,
          items = _props.items,
          label = _props.label,
          _props$position = _props.position,
          position = _props$position === undefined ? 'left' : _props$position,
          classNames = _props.classNames,
          props = _objectWithoutProperties(_props, ['id', 'items', 'label', 'position', 'classNames']);

      return React.createElement(
        'nav',
        _extends({ id: id, className: addClassNames(classNames) }, props),
        React.createElement(
          'ul',
          { className: 'sidebar sidebar--' + position + ' ' + getActiveClassName(isActive) },
          items.map(function (_ref) {
            var id = _ref.id,
                content = _ref.content,
                classNames = _ref.classNames;
            return React.createElement(SidebarItem, {
              key: id,
              content: content,
              classNames: classNames
            });
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'a',
            {
              tabIndex: '0',
              onClick: this.handleToggle,
              onKeyPress: this.handleToggle,
              className: 'btn btn--xs btn--full'
            },
            label
          )
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

export default Sidebar;


Sidebar.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};