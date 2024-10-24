import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  nationalID: "",
  createdAt: null,
};

const customerSlice = createSlice({
  initialState,
  name: "customer",
  reducers: {
    createNewCustomer: {
      prepare(firstName, nationalID) {
        return {
          payload: { firstName, nationalID },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      },
    },
    updateCustomerName(state, action) {
      state.firstName = action.payload;
    },
  },
});

console.log(customerSlice);
const { reducer: reducerCustomer } = customerSlice.reducer;

export const { createNewCustomer, updateCustomerName } = customerSlice.actions;
export default reducerCustomer;

// export default function reducerCustomer(state = initialState, action) {
//   switch (action.type) {
//     case "customer/createNewCustomer":
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateCustomerName":
//       return {
//         ...state,
//         firstName: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// function createNewCustomer(firstName, nationalID) {
//   return {
//     type: "customer/createNewCustomer",
//     payload: { firstName, nationalID, createdAt: new Date().toISOString() },
//   };
// }
//
// function updateCustomerName(firstName) {
//   return {
//     type: "customer/updateCustomerName",
//     payload: firstName,
//   };
// }
//
