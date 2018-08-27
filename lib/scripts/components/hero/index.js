var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from './title';
import HeroCta from './cta';
import { addClassNames } from 'utils';

export default function Hero(_ref) {
  var cta = _ref.cta,
      image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['cta', 'image', 'title', 'subtitle', 'classNames']);

  return React.createElement(
    'div',
    _extends({ className: 'hero-container ' + addClassNames(classNames) }, props),
    React.createElement(
      'section',
      { className: 'hero' },
      React.createElement(
        'div',
        { className: 'hero-content' },
        title && React.createElement(HeroTitle, { title: title, subtitle: subtitle }),
        cta && React.createElement(HeroCta, { cta: cta })
      ),
      React.createElement('div', { className: 'hero-placeholder' }),
      image && React.createElement('img', { className: 'hero-image', src: image.url, alt: image.alt })
    )
  );
}

Hero.propTypes = {
  cta: PropTypes.object,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};