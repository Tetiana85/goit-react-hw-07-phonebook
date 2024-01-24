import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contactsSlice.contacts;
export const selectFilter = store => store.contactsSlice.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
