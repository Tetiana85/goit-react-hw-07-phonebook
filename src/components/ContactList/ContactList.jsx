import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
import { selectFilteredContacts } from '../../redux-folder/selectors';
import { deleteContact, fetchContacts } from 'redux-folder/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
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
