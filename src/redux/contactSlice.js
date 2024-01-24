import { createSlice } from '@reduxjs/toolkit';
import { firsInitialState } from './initialState';

export const contactSlice = createSlice({
  name: 'contactsSlice',
  initialState: firsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setContact: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, removeContact, setFilter, setContact } =
  contactSlice.actions;
