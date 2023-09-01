import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItems = ({ name, contacts, number, onDeleteContact }) => {
  return (
    <li>
      <p>{contacts}: {name}: {number}</p>
      <button type='button' onClick={onDeleteContact}>Delete</button>
    </li>
  )
};

ContactListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItems;