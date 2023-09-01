import React from 'react'
import { ContactListItems } from './ContactListItems';
import PropTypes from 'prop-types';
  
  
  
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>{contacts.map(contact => (
      <ContactListItems key={contact.id} name={contact.name} number={contact.number} onDeleteContact={() => onDeleteContact(contact.id)} />
    ))}</ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;