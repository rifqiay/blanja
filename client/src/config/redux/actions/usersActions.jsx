import axios from "axios";
import swal from "sweetalert2";

export const loginUser = (data, navigate, setLoading) => async (dispacth) => {
  try {
    const result = await axios.post(
      process.env.REACT_APP_API_BACKEND + "/custommer/login",
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("role", user.role);
    dispacth({ type: "USER_LOGIN_SUCCESS", payload: user });
    swal.fire({
      text: result.data.message,
      icon: "success",
    });

    navigate("/home");
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
    setLoading(false);
  }
};

export const loginSeller = (data, navigate, setLoading) => async (dispacth) => {
  try {
    const result = await axios.post(
      process.env.REACT_APP_API_BACKEND + "/sellers/login",
      data
    );
    const seller = result.data.data;
    localStorage.setItem("token", seller.token);
    localStorage.setItem("role", seller.role);
    dispacth({ type: "SELLER_LOGIN_SUCCESS", payload: seller });
    swal.fire({
      text: result.data.message,
      icon: "success",
    });

    navigate("/home");
  } catch (error) {
    swal.fire({
      text: error.response.data.message,
      icon: "warning",
    });
    setLoading(false);
  }
};

export const registerCustommer =
  (data, navigate, setLoading) => async (dispatch) => {
    try {
      const result = await axios.post(
        process.env.REACT_APP_API_BACKEND + "/custommer/signup",
        data
      );
      const custommer = result.data.data;
      dispatch({ type: "REGISTER_CUSSTOMMER_SUCCES", payload: custommer });
      swal.fire({
        text: result.data.message,
        icon: "succes",
      });
      navigate("/login");
    } catch (error) {
      swal.fire({
        text: error.response.data.message,
        icon: "warning",
      });
      setLoading(false);
    }
  };

export const registerSeller =
  (data, navigate, setLoading) => async (dispacth) => {
    try {
      const result = await axios.post(
        process.env.REACT_APP_API_BACKEND + "/sellers/register",
        data
      );
      const seller = result.data.data;
      dispacth({ type: "REGISTER_SELLER_SUCCESS", payload: seller });
      swal.fire({
        text: result.data.message,
        icon: "succes",
      });
      navigate("/login");
    } catch (error) {
      swal.fire({
        text: error.response.data.message,
        icon: "warning",
      });
      setLoading(false);
    }
  };
