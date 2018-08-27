var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { addClassNames } from 'utils';
import PropTypes from 'prop-types';
import { getActiveClass } from './utils';

var AccordionSection = function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  function AccordionSection(props) {
    _classCallCheck(this, AccordionSection);

    var _this = _possibleConstructorReturn(this, (AccordionSection.__proto__ || Object.getPrototypeOf(AccordionSection)).call(this, props));

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
        var isActive = _this.state.isActive;

        var container = _this.container.current;
        var content = _this.content.current;
        var toggleInitiated = !isActive && container.clientHeight !== content.clientHeight;
        var key = evt.keyCode || evt.which;
        if (evt.type === 'keypress' && key !== 13) return null;
        _this.setState(function () {
          return {
            isActive: !isActive
          };
        });
        setTimeout(function () {
          container.setAttribute('style', 'height: ' + (toggleInitiated ? content.clientHeight + 'px' : 0));
        }, 100);
        container.style.height = content.clientHeight + 'px';
      }
    });
    Object.defineProperty(_this, 'handleTransitionEnd', {
      enumerable: true,
      writable: true,
      value: function value() {
        var container = _this.container.current;
        var content = _this.content.current;
        var contentIsOpen = container.style.height === content.clientHeight;
        var contentIsClosed = container.style.height < content.clientHeight || container.style.height === '0px';
        if (contentIsClosed) return false;
        if (!contentIsOpen && !contentIsClosed) container.style.height = 'auto';
      }
    });

    _this.container = React.createRef();
    _this.content = React.createRef();
    return _this;
  }

  _createClass(AccordionSection, [{
    key: 'render',
    value: function render() {
      var isActive = this.state.isActive;

      var _props = this.props,
          id = _props.id,
          title = _props.title,
          children = _props.children,
          classNames = _props.classNames,
          props = _objectWithoutProperties(_props, ['id', 'title', 'children', 'classNames']);

      return React.createElement(
        'section',
        _extends({ key: id, className: 'accordion-section ' + getActiveClass(isActive) + ' ' + addClassNames(classNames) }, props),
        React.createElement(
          'h3',
          {
            id: id,
            className: 'accordion-title',
            tabIndex: isActive ? 0 : -1,
            onClick: this.handleToggle,
            onKeyPress: this.handleToggle
          },
          title
        ),
        React.createElement(
          'div',
          { className: 'accordion-wrap', ref: this.container, onTransitionEnd: this.handleTransitionEnd },
          React.createElement(
            'div',
            {
              ref: this.content,
              'aria-labelledby': id,
              'aria-hidden': !isActive,
              className: 'accordion-content'
            },
            children
          )
        )
      );
    }
  }]);

  return AccordionSection;
}(React.Component);

export default AccordionSection;


AccordionSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  classNames: PropTypes.array
};