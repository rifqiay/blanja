const initialState = {
  data: {
    fullname: "",
    email: "",
    role: "",
  },
  isLoading: false,
};

export const usersReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCES") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "SELLER_LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "REGISTER_CUSSTOMMER_SUCCES") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "REGISTER_SELLER_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
