import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Input from '../input';
import TodoItem from './item';
import {getShape, addClassNames} from 'utils';
import {todoInput, plusIcon} from './constants';

/**
 * Todo list
 * @param {string} title - The list title
 * @param {array} items - The todo items
 * @param {boolean} rounded - The list shape (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  state = {
    items: this.props.items
  }

  addItem = (evt) => {
    evt.preventDefault();
    const form = this.form.current;
    const input = form.querySelector('.input--todo');
    if (input.value !== '') {
      const newItem = {
        id: Date.now(),
        content: input.value,
        done: false
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem)
      }));
    }
    input.value = '';
  }

  deleteTodo = (id, evt) => {
    const key = evt.keyCode || evt.which;
    if (evt.type === 'keypress' && key !== 13) return null;
    const filteredItems = this.state.items.filter((item) => {
      return (item.id !== id);
    });
    this.setState(() => ({
      items: filteredItems
    }));
  }

  render() {
    const initItems = this.state.items;
    const {title, rounded, classNames} = this.props;
    return (
      <div className={`todo-container ${addClassNames(classNames)} ${getShape(rounded)}`}>
        <header className="todo-header">
          <h1 className="todo-title">{title}</h1>
          <form id="todo-form" className="todo-form" onSubmit={this.addItem} ref={this.form}>
            <Input {...todoInput} inputClassNames={['input--todo', 'input--full', getShape(rounded)]} />
            <button type="submit" className={`btn btn--xs btn--todo ${getShape(rounded)}`} data-todo="add" tabIndex="0">
              <Icon {...plusIcon} />
              <span className="btn-text">Add</span>
            </button>
          </form>
        </header>
        <ul id="todo-list" className={`list todo-list ${getShape(rounded, 'todo')}`}>
          {initItems.map(({id, content, done, classNames}) =>
            <TodoItem
              id={id}
              key={id}
              done={done}
              content={content}
              classNames={classNames}
              handleDelete={this.deleteTodo.bind(null, id)}
            />
          )}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
