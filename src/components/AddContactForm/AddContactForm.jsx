import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { PropTypes } from 'prop-types';
import { Component } from "react";
import { nanoid } from "nanoid";

// const Title = styled.form`
// /* font-size:18px;
// font-weight: 500; */
// margin: 0 auto;
// display: flex;
// flex-direction: column;
// gap: 10px;
// width: 400px;
// `;

const Form = styled.form`
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 10px;
width: 400px;
`;

export class AddContactForm extends Component { 
    state = {
        name: '',
        number: '',
    };
    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value,
        })
    };

    // onSubmit = (newContact) => {
    //     console.log(this.props)
    //  };

    render() {

        return (

            <Form onSubmit={evt => {
                evt.preventDefault();
                this.props.addNewContact({ id: nanoid(5), ...this.state });
                this.setState({
                    name: '',
                    number: '',
                });
            }}>
                
            <label>
                Name
                <input
                    id="name"
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required                   
                />
             </label>

            <label>
                Number
                    <input
                    id="number"
                    onChange={this.handleChange}
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            
            <Button type="submit" variant="outlined">Add contact</Button>
                </Form>
        )
        }
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddContactForm;