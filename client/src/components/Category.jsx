import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/category`)
      .then(function (response) {
        // handle success
        setCategory(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h1>Category</h1>
          <p>What are you currently looking for</p>
        </div>
      </div>
      <div className="row">
        {category.map((item) => (
          <div className="col-lg-3 col-md-3 col-3" key={item.id}>
            <strong>{item.name}</strong>
            <img
              src={item.photo}
              alt={item.photo}
              className="img-fluid shadow"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
