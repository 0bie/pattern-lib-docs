var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './header';
import { getShape, addClassNames, preventOuterScroll } from 'utils';
import { getActiveClassName } from './utils';

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    Object.defineProperty(_this, 'handleScroll', {
      enumerable: true,
      writable: true,
      value: function value(evt) {
        preventOuterScroll(evt);
      }
    });
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          title = _props.title,
          content = _props.content,
          rounded = _props.rounded,
          classNames = _props.classNames,
          state = _props.state,
          preventClose = _props.preventClose,
          props = _objectWithoutProperties(_props, ['id', 'title', 'content', 'rounded', 'classNames', 'state', 'preventClose']);

      return React.createElement(
        'div',
        _extends({}, props, {
          className: 'modal-container ' + getShape(rounded) + ' ' + addClassNames(classNames) + ' ' + getActiveClassName(state)
        }),
        React.createElement(ModalHeader, { title: title, preventClose: preventClose }),
        React.createElement(
          'section',
          { id: id, className: 'modal', onWheel: this.handleScroll },
          React.createElement(
            'div',
            { className: 'mb--xs' },
            content
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

export default Modal;


Modal.propTypes = {
  id: PropTypes.string,
  state: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
  rounded: PropTypes.bool,
  className: PropTypes.arrayOf(PropTypes.string)
};