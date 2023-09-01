import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action) => {
    const { payload } = action;

      const contact = state.contacts.find(item => state.contacts.indexOf(item) === payload.index.index)


      if (contact) {
        contact.first = action.payload.first;
        contact.last = action.payload.last;
        contact.status = action.payload.status;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((x) => x !== state.contacts[action.payload]);
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
