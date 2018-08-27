import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

export default function CardFooter(_ref) {
  var actions = _ref.actions;

  return React.createElement(
    'div',
    { className: 'content' },
    actions.map(function (action, i) {
      return React.createElement(Button, {
        size: 'md',
        icon: action,
        key: 'cardaction-' + i
      });
    })
  );
}

CardFooter.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};