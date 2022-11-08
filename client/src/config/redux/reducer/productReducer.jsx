const initialState = {
  product: [],
  productDetail: [],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_PRODUCT") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "CREATE_PRODUCT") {
    return state;
  } else if (action.type === "DELETE_PRODUCT") {
    return state;
  } else if (action.type === "UPDATE_PRODUCT") {
    return state;
  } else if (action.type === "GET_DETAIL_PRODUCT") {
    return {
      ...state,
      productDetail: action.payload,
    };
  } else {
    return state;
  }
};
