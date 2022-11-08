import axios from "axios";
import swal from "sweetalert2";

export const createProduct =
  (data, saveImage, setLoading) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("merk", data.merk);
      formData.append("stock", data.stock);
      formData.append("photo", saveImage);
      formData.append("description", data.description);
      const products = await axios.post(
        process.env.REACT_APP_API_BACKEND + "/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      swal.fire({
        text: products.data.message,
        icon: "success",
      });
      const result = products.data.data;
      dispatch({ type: "CREATE_PRODUCT", payload: result });
      setLoading(false);
    } catch (err) {
      swal.fire({
        text: err.response.data.message,
        icon: "warning",
      });
      setLoading(false);
    }
  };

export const deleteProduct = (id, setShow) => async (dispatch) => {
  try {
    const product = await axios.delete(
      process.env.REACT_APP_API_BACKEND + "/products/" + id
    );
    const result = product.data.data;
    swal.fire({
      text: product.data.message,
      icon: "success",
    });
    setShow(false);
    window.location.reload();
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
  }
};

export const updateProduct =
  (data, id, saveImage, setShow) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("merk", data.merk);
      formData.append("stock", data.stock);
      formData.append("photo", saveImage);
      formData.append("description", data.description);
      const products = await axios.put(
        process.env.REACT_APP_API_BACKEND + "/products/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      swal.fire({
        text: products.data.message,
        icon: "success",
      });
      setShow(false);
      window.location.reload();
      const result = products.data.data;
      dispatch({ type: "UPDATE_PRODUCT", payload: result });
    } catch (err) {
      swal.fire({
        text: err.response.data.message,
        icon: "warning",
      });
      setShow(false);
    }
  };

export const getProductDetail = (id) => async (dispatch) => {
  try {
    const product = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/products/" + id
    );
    const result = product.data.data[0];
    dispatch({ type: "GET_DETAIL_PRODUCT", payload: result });
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
  }
};
