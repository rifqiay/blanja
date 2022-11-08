import axios from "axios";
const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/products"
    );
    const result = res.data.data;
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export default getProduct;
