var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import DropdownItem from './item';
import { getShape, addClassNames, debounce } from 'utils';
import { dropdownPositionHandler, getActiveClassName } from './utils';
import { dropdownPositions } from './constants';

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

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
        evt.preventDefault();
        var container = _this.wrap.current;
        dropdownPositionHandler(container, dropdownPositions);
        _this.setState(function (prevState) {
          return {
            isActive: !prevState.isActive
          };
        });
      }
    });
    Object.defineProperty(_this, 'handleResize', {
      enumerable: true,
      writable: true,
      value: function value(container, classNames) {
        window.addEventListener('resize', debounce(handler, 250));
        function handler() {
          dropdownPositionHandler(container, classNames);
        }
      }
    });
    Object.defineProperty(_this, 'toggleVisibilityHandler', {
      enumerable: true,
      writable: true,
      value: function value(evt) {
        var label = _this.label.current;
        var container = _this.parent.current;
        var toggleInitiated = evt.target !== label && !container.contains(evt.target);
        if (toggleInitiated) {
          _this.setState(function () {
            return {
              isActive: false
            };
          });
        }
      }
    });

    _this.label = React.createRef();
    _this.wrap = React.createRef();
    _this.parent = React.createRef();
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var container = this.wrap.current;
      this.handleResize(container, dropdownPositions);
      document.addEventListener('mousedown', this.toggleVisibilityHandler);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.toggleVisibilityHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          label = _props.label,
          labelIcon = _props.labelIcon,
          items = _props.items,
          content = _props.content,
          rounded = _props.rounded,
          classNames = _props.classNames,
          wrapClassNames = _props.wrapClassNames,
          props = _objectWithoutProperties(_props, ['id', 'label', 'labelIcon', 'items', 'content', 'rounded', 'classNames', 'wrapClassNames']);

      var isActive = this.state.isActive;

      return React.createElement(
        'div',
        _extends({ id: id, className: 'dropdown-container ' + addClassNames(classNames) + ' ' + getShape(rounded, 'dropdown') + ' ' + getActiveClassName(isActive) }, props, { ref: this.parent }),
        React.createElement(
          'span',
          {
            tabIndex: '0',
            ref: this.label,
            id: id + '-target',
            className: 'dropdown-label',
            'aria-expanded': isActive,
            'aria-controls': id + '-list',
            onClick: this.handleToggle,
            onKeyPress: this.handleToggle
          },
          label && label,
          labelIcon && React.createElement(
            'button',
            { className: 'btn' },
            React.createElement(Icon, labelIcon)
          )
        ),
        React.createElement(
          'div',
          { className: 'dropdown-wrap ' + addClassNames(wrapClassNames), ref: this.wrap },
          items && React.createElement(
            'ul',
            { id: id + '-list', className: 'dropdown-list', 'aria-live': 'off' },
            items.map(function (_ref) {
              var id = _ref.id,
                  text = _ref.text,
                  icon = _ref.icon,
                  iconPosition = _ref.iconPosition;
              return React.createElement(DropdownItem, {
                key: id,
                text: text,
                icon: icon,
                iconPosition: iconPosition
              });
            })
          ),
          !items && content ? content : ''
        )
      );
    }
  }]);

  return Dropdown;
}(React.Component);

export default Dropdown;


Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  })),
  content: PropTypes.any
};