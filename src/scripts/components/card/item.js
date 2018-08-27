import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Card item
 * @param {object} image - The image properties
 * @param {object} icon - The icon properties
 * @returns {object} - React element tree describing the component
 */

export default function CardItem({image, icon}) {
  return (
    <div className="card-item">
      {image && <img src={image.url} alt={image.alt} />}
      {icon && <Icon {...icon} />}
    </div>
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
