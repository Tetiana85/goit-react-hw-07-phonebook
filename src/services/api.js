import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65b0e50ad16d31d11bdd835c.mockapi.io/',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addNewContact = async newContact => {
  const { data } = await instance.post('/contacts', newContact);
  return data;
};

export const deleteContactById = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
