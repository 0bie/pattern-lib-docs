import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import DropdownItem from './item';
import {getShape, addClassNames, debounce} from 'utils';
import {dropdownPositionHandler, getActiveClassName} from './utils';
import {dropdownPositions} from './constants';

/**
 * Dropdown
 * @param {string} id - The dropdown `id`
 * @param {string} label - The dropdown label
 * @param {object} labelIcon - A toggle icon (Optional)
 * @param {array} items - The dropdown items
 * @param {object} content - React element (Optional)
 * @param {array} classNames - Additional classnames (Optional)
 * @param {array} wrapClassNames- Additional classnames (Optional)
 * @param {boolean} rounded - The dropdown shape (Optional)
 * @returns {object} React element tree describing the component
 */

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.label = React.createRef();
    this.wrap = React.createRef();
    this.parent = React.createRef();
  }

  state = {
    isActive: false
  }

  componentDidMount() {
    const container = this.wrap.current;
    this.handleResize(container, dropdownPositions);
    document.addEventListener('mousedown', this.toggleVisibilityHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.toggleVisibilityHandler);
  }

  handleToggle = (evt) => {
    evt.preventDefault();
    const container = this.wrap.current;
    dropdownPositionHandler(container, dropdownPositions);
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  }

  handleResize = (container, classNames) => {
    window.addEventListener('resize', debounce(handler, 250));
    function handler() {
      dropdownPositionHandler(container, classNames);
    }
  }

  toggleVisibilityHandler = (evt) => {
    const label = this.label.current;
    const container = this.parent.current;
    const toggleInitiated = (evt.target !== label) && (!container.contains(evt.target));
    if (toggleInitiated) {
      this.setState(() => ({
        isActive: false
      }));
    }
  }

  render() {
    const {
      id,
      label,
      labelIcon,
      items,
      content,
      rounded,
      classNames,
      wrapClassNames,
      ...props
    } = this.props;
    const {isActive} = this.state;
    return (
      <div id={id} className={`dropdown-container ${addClassNames(classNames)} ${getShape(rounded, 'dropdown')} ${getActiveClassName(isActive)}`} {...props} ref={this.parent}>
        <span
          tabIndex="0"
          ref={this.label}
          id={`${id}-target`}
          className="dropdown-label"
          aria-expanded={isActive}
          aria-controls={`${id}-list`}
          onClick={this.handleToggle}
          onKeyPress={this.handleToggle}
        >
          {label && label}
          {labelIcon && <button type="button" className="btn">{<Icon {...labelIcon} />}</button>}
        </span>
        <div className={`dropdown-wrap ${addClassNames(wrapClassNames)}`} ref={this.wrap}>
          {content || <ul id={`${id}-list`} className="dropdown-list" aria-live="off">
            {items.map(({id, label, icon, iconPosition}) =>
              <DropdownItem
                key={id}
                label={label}
                icon={icon}
                iconPosition={iconPosition}
              />
            )}
          </ul>}
        </div>
      </div>
    );
  }

}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  })),
  content: PropTypes.any
};