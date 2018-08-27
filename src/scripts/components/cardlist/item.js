import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import {addClassNames} from 'utils';
import {shareIcon, favoriteIcon, toggleIcon, notificationIcon} from '../icon/constants';

/**
 * Cardlist item
 * @param {object} image - The image properties
 * @param {string} title - The item title
 * @param {string} subtitle - The item sub-title
 * @param {string} details - The item details
 * @param {array} classNames - Additional classNames
 * @returns {object} - React element tree describing the component
 */

export default class CardlistItem extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.image = React.createRef();
    this.imageContainer = React.createRef();
    this.toggleButton = React.createRef();
  }

  state = {
    isActive: false
  }

  handleToggle = (evt) => {
    let toggleInitiated;
    const key = evt.keyCode || evt.which;
    const container = this.container.current;
    const toggleButton = this.toggleButton.current;
    const image = this.image.current;
    const imageContainer = this.imageContainer.current;
    const toggleIcon = toggleButton.querySelector('.icon--expand');

    const toggled = (evt.target === toggleButton);
    if (evt.type === 'keypress' && key !== 13) return null;

    if (image.clientHeight) {
      toggleInitiated = container.contains(evt.target) && toggled;
    }

    if (toggleInitiated) {
      const imageIsExpanded = (imageContainer.clientHeight >= image.clientHeight);
      toggleIcon.setAttribute('style', `transform: rotate(${imageIsExpanded ? 0 : '0.12turn'})`);
      /**
       * Force the style mutation onto the task queue
       * 100ms delay required for transition between states
       */
      setTimeout(() => {
        imageContainer.setAttribute('style', `height: ${!imageIsExpanded ? image.clientHeight + 'px' : 0}`);
      }, 100);
      imageContainer.style.height = image.clientHeight + 'px';
      this.setState((prevState) => ({
        isActive: !prevState.isActive
      }));
    }
  }

  handleTransitionEnd = () => {
    const container = this.container.current;
    const image = container.querySelector('img');
    const imageContainer = container.querySelector('.image-container');
    const contentIsOpen = imageContainer.style.height === image.clientHeight;
    const contentIsClosed = imageContainer.style.height < image.clientHeight || imageContainer.style.height === '0px';
    if (contentIsClosed) return false;
    if (!contentIsOpen && !contentIsClosed) imageContainer.style.height = 'auto';
  }

  render() {
    const {isActive} = this.state;
    const {image, title, subtitle, details, classNames, ...props} = this.props;
    return (
      <li className={`cardlist-item ${addClassNames(classNames)}`} {...props} ref={this.container}>
        <div className="cardlist-content">
          <a className="cardlist-overlay" href="#" />
          <div
            ref={this.imageContainer}
            className="image-container"
            onTransitionEnd={this.handleTransitionEnd}
          >
            <div className="media-placeholder" />
            <img src={image.url} alt={image.alt} ref={this.image} />
          </div>
          <div className="cardlist-options">
            <Button size="xs" icon={favoriteIcon} />
            <a
              ref={this.toggleButton}
              title="toggle card image"
              tabIndex={!isActive ? 0 : -1}
              onClick={this.handleToggle}
              onKeyPress={this.handleToggle}
              className="btn btn--xs cardlist-expand"
            >
              {<Icon {...toggleIcon} classNames={['icon--expand']} />}
            </a>
            <Button size="xs" icon={shareIcon} classNames={['cardlist-share']} />
            <Button size="xs" icon={notificationIcon} />
          </div>
        </div>
        <div className="cardlist-info">
          {title ? <h3>{title}</h3> : null}
          {subtitle ? <h4>{subtitle}</h4> : null}
          <div>{details}</div>
        </div>
      </li>
    );
  }

}

CardlistItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  sibtitle: PropTypes.string,
  details: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
