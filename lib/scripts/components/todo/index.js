var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Input from '../input';
import TodoItem from './item';
import { getShape, addClassNames } from 'utils';
import { todoInput, plusIcon } from './constants';

var Todo = function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo(props) {
    _classCallCheck(this, Todo);

    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

    Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        items: []
      }
    });
    Object.defineProperty(_this, 'addItem', {
      enumerable: true,
      writable: true,
      value: function value(evt) {
        evt.preventDefault();
        var form = _this.form.current;
        var input = form.querySelector('.input--todo');
        if (input.value !== '') {
          var newItem = {
            id: Date.now(),
            text: input.value,
            done: false
          };
          _this.setState(function (prevState) {
            return {
              items: prevState.items.concat(newItem)
            };
          });
        }
        input.value = '';
      }
    });
    Object.defineProperty(_this, 'deleteTodo', {
      enumerable: true,
      writable: true,
      value: function value(id, evt) {
        var key = evt.keyCode || evt.which;
        if (evt.type === 'keypress' && key !== 13) return null;
        var filteredItems = _this.state.items.filter(function (item) {
          return item.id !== id;
        });
        _this.setState(function () {
          return {
            items: filteredItems
          };
        });
      }
    });

    _this.form = React.createRef();
    return _this;
  }

  _createClass(Todo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState(function () {
        return {
          items: _this2.props.items
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var initItems = this.state.items;
      var _props = this.props,
          title = _props.title,
          rounded = _props.rounded,
          classNames = _props.classNames;

      return React.createElement(
        'div',
        { className: 'todo-container ' + addClassNames(classNames) + ' ' + getShape(rounded) },
        React.createElement(
          'header',
          { className: 'todo-header' },
          React.createElement(
            'h1',
            { className: 'todo-title' },
            title
          ),
          React.createElement(
            'form',
            { id: 'todo-form', className: 'todo-form', onSubmit: this.addItem, ref: this.form },
            React.createElement(Input, _extends({}, todoInput, { inputClassNames: ['input--todo', 'input--full', getShape(rounded)] })),
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn--xs btn--todo ' + getShape(rounded), 'data-todo': 'add', tabIndex: '0' },
              React.createElement(Icon, plusIcon),
              React.createElement(
                'span',
                { className: 'btn-text' },
                'Add'
              )
            )
          )
        ),
        React.createElement(
          'ul',
          { id: 'todo-list', className: 'list todo-list ' + getShape(rounded, 'todo') },
          initItems.map(function (_ref) {
            var id = _ref.id,
                text = _ref.text,
                done = _ref.done,
                classNames = _ref.classNames;
            return React.createElement(TodoItem, {
              id: id,
              key: id,
              text: text,
              done: done,
              classNames: classNames,
              handleDelete: _this3.deleteTodo.bind(null, id)
            });
          })
        )
      );
    }
  }]);

  return Todo;
}(React.Component);

export default Todo;


Todo.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    text: PropTypes.string,
    handleDelete: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};