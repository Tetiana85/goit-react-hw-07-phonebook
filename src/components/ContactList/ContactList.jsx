import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
import { selectFilteredContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {name} - {number}
          </ListItemText>
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
