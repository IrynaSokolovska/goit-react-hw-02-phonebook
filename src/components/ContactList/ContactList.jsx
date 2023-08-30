import React from 'react'
import { ContactListItems } from './ContactListItems'

export const ContactList = ({contacts, onDeleteContact}) => {
  return (
      <ul>{contacts.map(contact => (
          <ContactListItems key={contact.id} name={contact.name} number={contact.number} onDeleteContact={() => onDeleteContact(contact.id)}/>
      ))}</ul>
  )
}
