function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

export default function HeroTitle(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      props = _objectWithoutProperties(_ref, ['title', 'subtitle']);

  return React.createElement(
    'div',
    props,
    subtitle ? React.createElement(
      'span',
      { className: 'hero-subtitle' },
      subtitle
    ) : '',
    React.createElement(
      'div',
      { className: 'hero-titlewrap' },
      React.createElement(
        'h1',
        { className: 'hero-title' },
        title
      )
    )
  );
}

HeroTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};