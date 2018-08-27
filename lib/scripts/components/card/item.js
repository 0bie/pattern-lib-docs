import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

export default function CardItem(_ref) {
  var image = _ref.image,
      icon = _ref.icon;

  return React.createElement(
    'div',
    { className: 'card-item' },
    image && React.createElement('img', { src: image.url, alt: image.alt }),
    icon && React.createElement(Icon, icon)
  );
}

CardItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })
};