import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addNewContact, deleteContactById, getAllContacts } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await getAllContacts();
      return contacts;
    } catch (error) {
      toast.error(`Oops, some error occurred... ${error.message}`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await addNewContact(newContact);
      toast('New contact added successfully!');
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const deletedContact = await deleteContactById(contactId);
      toast('Contact deleted successfully!');
      return deletedContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
