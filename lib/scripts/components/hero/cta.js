var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default function HeroCta(_ref) {
  var cta = _ref.cta,
      props = _objectWithoutProperties(_ref, ['cta']);

  return React.createElement(
    'div',
    _extends({ className: 'hero-cta' }, props),
    cta.icon ? React.createElement(Icon, cta.icon) : '',
    React.createElement(
      'span',
      { className: 'vert--mid' },
      cta.text
    )
  );
}

HeroCta.propTypes = {
  cta: PropTypes.shape({
    icon: PropTypes.object,
    text: PropTypes.string
  })
};