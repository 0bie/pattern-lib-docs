import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {addClassNames} from 'utils';
import {checkIcon, deleteIcon} from './constants';

/**
 * Todo list item
 * @param {string} id - The item `id`
 * @param {string} content - The item content
 * @param {boolean} done - True if item is checked as completed
 * @param {array} classNames - Additional classNames (Optional)
 * @param {function} handleDelete - Callback handler for delete action
 * @returns {object} React element tree describing the component
 */

export default function TodoItem({id, content, done, classNames, handleDelete}) {
  return (
    <li id={`todo-item-${id}`} className={`list-item todo-item ${addClassNames(classNames)}`}>
      <input className="text--sr" type="checkbox" id={`todo-check-${id}`} name={`todo-check-${id}`} defaultChecked={done} />
      <label htmlFor={`todo-check-${id}`} className="todo-label">
        <span className="todo-check" title="Complete Task" tabIndex="0">{<Icon {...checkIcon} />}</span>
        <span className="todo-text">{content}</span>
      </label>
      <button
        tabIndex="0"
        type="button"
        onClick={handleDelete}
        onKeyPress={handleDelete}
        className="btn btn--xs btn--todo"
      >
        {<Icon {...deleteIcon} />}
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  handleDelete: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
