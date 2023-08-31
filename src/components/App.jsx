import { Component } from "react";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { Container } from "@mui/material";

import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component  {
  state = {
  contacts: [],
  filter: ''
  }
  
  addContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  };

  handleDeleteContact = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter((contact) => contact.id !== id) }))
  };

  handleChangeFilter = (evt) => { 
    this.setState({ filter: evt.target.value });
  };

  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter((contact) => {
      return contact.name.concat(contact.number).toLowerCase().includes(normalizedFilter)
     });
  };

  render(){
  return (
    <Container maxWidth="xl">
      <AddContactForm addNewContact={this.addContact} />
      <Filter handleChangeFilter={this.handleChangeFilter} />
      <ContactList contacts={this.getFilterContacts()} onDeleteContact={this.handleDeleteContact} />    
    </Container>
    );
  };
};



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
