var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import { addClassNames } from 'utils';
import { shareIcon, favoriteIcon, toggleIcon, notificationIcon } from '../icon/constants';

var CardlistItem = function (_React$Component) {
  _inherits(CardlistItem, _React$Component);

  function CardlistItem(props) {
    _classCallCheck(this, CardlistItem);

    var _this = _possibleConstructorReturn(this, (CardlistItem.__proto__ || Object.getPrototypeOf(CardlistItem)).call(this, props));

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
        var toggleInitiated = void 0;
        var key = evt.keyCode || evt.which;
        var container = _this.container.current;
        var toggleButton = _this.toggleButton.current;
        var image = _this.image.current;
        var imageContainer = _this.imageContainer.current;
        var toggleIcon = toggleButton.querySelector('.icon--expand');

        var toggled = evt.target === toggleButton;
        if (evt.type === 'keypress' && key !== 13) return null;

        if (image.clientHeight) {
          toggleInitiated = container.contains(evt.target) && toggled;
        }

        if (toggleInitiated) {
          var imageIsExpanded = imageContainer.clientHeight >= image.clientHeight;
          toggleIcon.setAttribute('style', 'transform: rotate(' + (imageIsExpanded ? 0 : '0.12turn') + ')');
          setTimeout(function () {
            imageContainer.setAttribute('style', 'height: ' + (!imageIsExpanded ? image.clientHeight + 'px' : 0));
          }, 100);
          imageContainer.style.height = image.clientHeight + 'px';
          _this.setState(function (prevState) {
            return {
              isActive: !prevState.isActive
            };
          });
        }
      }
    });
    Object.defineProperty(_this, 'handleTransitionEnd', {
      enumerable: true,
      writable: true,
      value: function value() {
        var container = _this.container.current;
        var image = container.querySelector('img');
        var imageContainer = container.querySelector('.image-container');
        var contentIsOpen = imageContainer.style.height === image.clientHeight;
        var contentIsClosed = imageContainer.style.height < image.clientHeight || imageContainer.style.height === '0px';
        if (contentIsClosed) return false;
        if (!contentIsOpen && !contentIsClosed) imageContainer.style.height = 'auto';
      }
    });

    _this.container = React.createRef();
    _this.image = React.createRef();
    _this.imageContainer = React.createRef();
    _this.toggleButton = React.createRef();
    return _this;
  }

  _createClass(CardlistItem, [{
    key: 'render',
    value: function render() {
      var isActive = this.state.isActive;

      var _props = this.props,
          image = _props.image,
          title = _props.title,
          subtitle = _props.subtitle,
          details = _props.details,
          classNames = _props.classNames,
          props = _objectWithoutProperties(_props, ['image', 'title', 'subtitle', 'details', 'classNames']);

      return React.createElement(
        'li',
        _extends({ className: 'cardlist-item ' + addClassNames(classNames) }, props, { ref: this.container }),
        React.createElement(
          'div',
          { className: 'cardlist-content' },
          React.createElement('a', { className: 'cardlist-overlay', href: '#' }),
          React.createElement(
            'div',
            {
              'aria-hidden': !isActive,
              ref: this.imageContainer,
              className: 'image-container',
              onTransitionEnd: this.handleTransitionEnd
            },
            React.createElement('div', { className: 'media-placeholder' }),
            React.createElement('img', { src: image.url, alt: image.alt, ref: this.image })
          ),
          React.createElement(
            'div',
            { className: 'cardlist-options' },
            React.createElement(Button, { size: 'xs', icon: favoriteIcon }),
            React.createElement(
              'a',
              {
                ref: this.toggleButton,
                title: 'toggle card image',
                tabIndex: !isActive ? 0 : -1,
                onClick: this.handleToggle,
                onKeyPress: this.handleToggle,
                className: 'btn btn--xs cardlist-expand'
              },
              React.createElement(Icon, _extends({}, toggleIcon, { classNames: ['icon--expand'] }))
            ),
            React.createElement(Button, { size: 'xs', icon: shareIcon, classNames: ['cardlist-share'] }),
            React.createElement(Button, { size: 'xs', icon: notificationIcon })
          )
        ),
        React.createElement(
          'div',
          { className: 'cardlist-info' },
          title ? React.createElement(
            'h3',
            null,
            title
          ) : '',
          subtitle ? React.createElement(
            'h4',
            null,
            subtitle
          ) : '',
          React.createElement(
            'div',
            null,
            details
          )
        )
      );
    }
  }]);

  return CardlistItem;
}(React.Component);

export default CardlistItem;


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