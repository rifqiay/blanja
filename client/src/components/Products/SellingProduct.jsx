import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../config/redux/actions/createProductAction";

const SellingProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [saveImage, setSaveImage] = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  const [data, setData] = useState({
    name: "",
    price: "",
    merk: "",
    stock: "",
    photo: "",
    description: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(createProduct(data, saveImage, setLoading));
  };
  return (
    <Fragment>
      <div className="col bg-main">
        <form onSubmit={handleSubmit}>
          <main>
            {/* inventory */}
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h4>Inventory</h4>
                    <hr />

                    <strong className="text-secondary">Name of Goods</strong>
                    <div className="col-8 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name Product"
                        name="name"
                        // value={data.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item detail */}
            <div className="row mt-3">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h4>Item details</h4>
                    <hr />
                    {/* Price */}
                    <strong className="text-secondary">Price</strong>
                    <div className="col-8 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        name="price"
                        // value={data.price}
                        onChange={handleChange}
                      />
                    </div>
                    {/* merk */}
                    <strong className="text-secondary">Merk</strong>
                    <div className="col-8 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="merk"
                        name="merk"
                        // value={data.merk}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Stock */}
                    <strong className="text-secondary">Stock</strong>
                    <div className="col-8 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Stock"
                        name="stock"
                        // value={data.stock}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="row mt-3">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h4>Photo of Goods</h4>
                    <hr />
                    <strong className="text-secondary">Photo</strong>
                    <div className="col-8 mt-2">
                      <input
                        type="file"
                        id="img"
                        className="form-control"
                        name="photo"
                        onChange={handleUpload}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="row mt-3">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h4>Description</h4>
                    <hr />
                    <div className="card">
                      <div className="card-body">
                        <div className="col mt-2">
                          <textarea
                            class="form-control"
                            rows="10"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="row mt-4">
            <div className="col d-flex justify-content-end">
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-danger rounded-pill"
                  style={{ width: "15%" }}
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-danger rounded-pill"
                  style={{ width: "15%" }}
                >
                  Jual
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SellingProduct;
