import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {exitIcon} from './constants';

/**
 * Modal header
 * @param {string} title - Modal title
 * @param {boolean} preventClose - True if user can't dismiss
 * @returns {object} React element tree describing the component
 */

export default function ModalHeader({title, preventClose}) {
  let closeButton = null;
  if (!preventClose) {
    closeButton = <button type="button" className="btn btn--sm btn--link"><Icon {...exitIcon} /></button>;
  }
  return (
    <header className="modal-header">
      <h1 className="modal-title">{title}</h1>
      {closeButton}
    </header>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  preventClose: PropTypes.bool
};
