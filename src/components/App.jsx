import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <Container>
      <ToastContainer />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};

export default App;
