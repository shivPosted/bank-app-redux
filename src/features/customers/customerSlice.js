const initialStateCustomer = {
  firstName: "",
  nationalID: "",
  createdAt: null,
};

export default function reducerCustomer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createNewCustomer":
      return {
        ...state,
        firstName: action.payload.firstName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomerName":
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return state;
  }
}

function createNewCustomer(firstName, nationalID) {
  return {
    type: "customer/createNewCustomer",
    payload: { firstName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateCustomerName(firstName) {
  return {
    type: "customer/updateCustomerName",
    payload: firstName,
  };
}

export { createNewCustomer, updateCustomerName };
