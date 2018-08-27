import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Image from '../image';

export default function MediaItem(_ref) {
  var item = _ref.item;
  var icon = item.icon,
      image = item.image;

  return React.createElement(
    'div',
    { className: 'media-item' },
    icon && React.createElement(Icon, icon),
    image && React.createElement(Image, image)
  );
}

MediaItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    }),
    icon: PropTypes.shape({
      id: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
};