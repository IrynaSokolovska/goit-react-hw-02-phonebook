import React from 'react'

export const ContactListItems = ({name, contacts, number, onDeleteContact}) => {
  return (
   <li>
          <p>{contacts}: {name}: {number}</p>
          <button type='button' onClick={onDeleteContact}>Delete</button>
      </li>
  )
}
