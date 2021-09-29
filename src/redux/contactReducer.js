const initialState = [
  { id: 0, 
    name: "Admin", 
    header: "My first note", 
    category: "Mobile",
    notes: "Lorem ipsum dolor sit amet. Aut officia quisquam aut accusantium dolores ea unde consequuntur et quas dolores et quia animi et saepe corrupti ad fugit enim. Ea nesciunt tempore quo omnis et quam nostrum." 
  },

  // // { id: 2, 
  // //   name: "Player", 
  // //   header: "My Note 2", 
  // //   category: "Desktop",
  // //   notes: "Lorem ipsum dolor sit amet. Aut officia quisquam aut accusantium dolores ea unde consequuntur et quas dolores et quia animi et saepe corrupti ad fugit enim. Ea nesciunt tempore quo omnis et quam nostrum." 
  // // },

  // // { id: 3, 
  // //   name: "Abcdef", 
  // //   header: "3rd Notes", 
  // //   category: "Desktop",
  // //   notes: "Lorem ipsum dolor sit amet. Aut officia quisquam aut accusantium dolores ea unde consequuntur et quas dolores et quia animi et saepe corrupti ad fugit enim. Ea nesciunt tempore quo omnis et quam nostrum." 
  // // },

];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "UPDATE_NOTE":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    case "RESET_NOTE":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
