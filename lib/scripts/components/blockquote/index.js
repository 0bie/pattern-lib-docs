var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import Icon from '../icon';
import { getShape, addClassNames } from 'utils';
import { truncateQuote, getName } from './utils';

var Blockquote = function (_React$Component) {
  _inherits(Blockquote, _React$Component);

  function Blockquote(props) {
    _classCallCheck(this, Blockquote);

    var _this = _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).call(this, props));

    Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: {
        quote: truncateQuote(_this.props.quote, _this.props.maxLength, _this.expandQuoteHandler.bind(_this))
      }
    });
    return _this;
  }

  _createClass(Blockquote, [{
    key: 'expandQuoteHandler',
    value: function expandQuoteHandler() {
      var _this2 = this;

      this.setState(function () {
        return {
          quote: _this2.props.quote
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var quote = this.state.quote;
      var _props = this.props,
          id = _props.id,
          user = _props.user,
          link = _props.link,
          linkCta = _props.linkCta,
          footer = _props.footer,
          rounded = _props.rounded,
          classNames = _props.classNames;

      return React.createElement(
        'div',
        { id: id, className: 'blockquote-container ' + getShape(rounded) + ' ' + addClassNames(classNames) },
        React.createElement(
          'div',
          { className: 'blockquote-icon' },
          React.createElement(Icon, {
            size: 'sm',
            title: 'quotation mark',
            description: 'quotation mark',
            id: 'double-quote-serif-left'
          })
        ),
        React.createElement(
          'blockquote',
          { className: 'blockquote', cite: link },
          React.createElement(
            'div',
            { className: 'blockquote-content' },
            quote
          )
        ),
        footer && React.createElement(
          'footer',
          { className: 'blockquote-footer' },
          React.createElement(
            'div',
            { className: 'media' },
            React.createElement(
              'div',
              { className: 'media-item mr--xs' },
              (user.firstName || user.lastName) && React.createElement(Avatar, { user: user, size: 'sm' })
            ),
            (user.firstName || user.lastName) && React.createElement(
              'div',
              { className: 'media-content' },
              React.createElement(
                'h4',
                { className: 'media-title' },
                getName(user.firstName, user.lastName)
              )
            )
          ),
          React.createElement(
            'div',
            null,
            user.quote && React.createElement(
              'a',
              { href: link, className: 'icon-container btn' },
              React.createElement(Icon, linkCta)
            )
          )
        )
      );
    }
  }]);

  return Blockquote;
}(React.Component);

export default Blockquote;


Blockquote.propTypes = {
  id: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  linkCta: PropTypes.object,
  link: PropTypes.string,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string
  })
};