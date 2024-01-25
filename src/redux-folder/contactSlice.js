// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
//   filter: '',
// };

// export const contactSlice = createSlice({
//   name: 'contactsSlice',
//   initialState: initialState,
//   reducers: {
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = state.items.filter(
//           contact => contact.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { setFilter } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;

// ---------------------------------------------------------

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contactsSlice',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(action.payload)) {
          state.items.push(...action.payload);
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setFilter } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
