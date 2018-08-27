import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { addClassNames } from 'utils';
import { checkIcon, deleteIcon } from './constants';

export default function TodoItem(_ref) {
  var id = _ref.id,
      text = _ref.text,
      done = _ref.done,
      classNames = _ref.classNames,
      handleDelete = _ref.handleDelete;

  return React.createElement(
    'li',
    { id: 'todo-item-' + id, className: 'list-item todo-item ' + addClassNames(classNames) },
    React.createElement('input', { className: 'text--sr', type: 'checkbox', id: 'todo-check-' + id, name: 'todo-check-' + id, defaultChecked: done }),
    React.createElement(
      'label',
      { htmlFor: 'todo-check-' + id, className: 'todo-label' },
      React.createElement(
        'span',
        { className: 'todo-check', title: 'Complete Task', tabIndex: '0' },
        React.createElement(Icon, checkIcon)
      ),
      React.createElement(
        'span',
        { className: 'todo-text' },
        text
      )
    ),
    React.createElement(
      'button',
      { className: 'btn btn--xs btn--todo', tabIndex: '0', onClick: handleDelete, onKeyPress: handleDelete },
      React.createElement(Icon, deleteIcon)
    )
  );
}

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  handleDelete: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};