var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import PickerItem from './item';
import PickerGroup from './group';
import Button from '../button';
import Input from '../input';
import { getShape, addClassNames, preventOuterScroll } from 'utils';
import { exitIcon } from './constants';

var Picker = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

    Object.defineProperty(_this, 'handleScroll', {
      enumerable: true,
      writable: true,
      value: function value(evt) {
        preventOuterScroll(evt);
      }
    });
    return _this;
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          title = _props.title,
          subtitle = _props.subtitle,
          items = _props.items,
          groups = _props.groups,
          rounded = _props.rounded,
          classNames = _props.classNames,
          props = _objectWithoutProperties(_props, ['id', 'title', 'subtitle', 'items', 'groups', 'rounded', 'classNames']);

      return React.createElement(
        'div',
        _extends({ className: 'picker ' + getShape(rounded) + ' ' + addClassNames(classNames) }, props),
        React.createElement(
          'header',
          { className: 'picker-header' },
          React.createElement(
            'div',
            { className: 'picker-titlebar' },
            React.createElement(
              'h1',
              { className: 'picker-title' },
              title
            ),
            React.createElement(Button, { size: 'sm', icon: exitIcon, classNames: ['btn--link'] })
          ),
          React.createElement(Input, {
            size: 'xs',
            id: 'input_' + id,
            placeholder: 'Type to filter...',
            inputClassNames: ['picker-searchbar']
          })
        ),
        React.createElement(
          'h3',
          { className: 'picker-subtitle' },
          subtitle
        ),
        React.createElement(
          'div',
          { id: id, className: 'picker-content', onWheel: this.handleScroll },
          items && !groups ? items.map(function (_ref) {
            var id = _ref.id,
                item = _ref.item,
                title = _ref.title,
                classNames = _ref.classNames;
            return React.createElement(PickerItem, {
              key: id,
              title: title,
              item: item,
              classNames: classNames
            });
          }) : null,
          groups && !items ? groups.map(function (_ref2) {
            var id = _ref2.id,
                title = _ref2.title,
                pickerArr = _ref2.pickerArr,
                classNames = _ref2.classNames;
            return React.createElement(PickerGroup, {
              key: id,
              title: title,
              pickerArr: pickerArr,
              classNames: classNames
            });
          }) : null
        )
      );
    }
  }]);

  return Picker;
}(React.Component);

export default Picker;


Picker.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rounded: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })),
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};