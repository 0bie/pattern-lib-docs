var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Spinner from '../components/spinner';

/**
 * Asynchronously load a component
 * @param {function} getComponent - Callback that imports a given component
 * @returns {object} A component
 */

export default function asyncComponent(getComponent) {
  var AsyncComponent = function (_Component) {
    _inherits(AsyncComponent, _Component);

    function AsyncComponent(props) {
      _classCallCheck(this, AsyncComponent);

      var _this = _possibleConstructorReturn(this, (AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call(this, props));

      Object.defineProperty(_this, 'state', {
        enumerable: true,
        writable: true,
        value: {
          component: null
        }
      });
      return _this;
    }

    _createClass(AsyncComponent, [{
      key: 'componentDidMount',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref2, component;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return getComponent();

                case 2:
                  _ref2 = _context.sent;
                  component = _ref2.default;

                  this.setState(function () {
                    return {
                      component: component
                    };
                  });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _ref.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: 'render',
      value: function render() {
        var Component = this.state.component;
        return Component ? React.createElement(Component, this.props) : React.createElement(Spinner, { text: 'Loading...' });
      }
    }]);

    return AsyncComponent;
  }(Component);

  return AsyncComponent;
}

// https://medium.com/@assortedPickle/es6-static-properties-b7fd2a163328