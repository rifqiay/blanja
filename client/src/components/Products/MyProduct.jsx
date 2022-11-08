import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProduct from "../../config/redux/actions/ProductActionGetAll";
import ModalDelete from "../modals/ModalDelete";
import ModalEdit from "../modals/ModalEdit";

const MyProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="col-lg-8 col-12 ">
            <h1>My Product</h1>
            <div>
              <ul className="d-flex list-unstyled">
                <li>All item</li>
                <li className="mr">Sould Out</li>
                <li>Archived</li>
              </ul>
            </div>

            {/* search */}
            <div className="col-4 mt-2">
              <input
                type="search"
                className="form-control rounded-pill"
                id="inputNameSeller"
                placeholder="search"
                name="name"
              />
            </div>
            {/* table */}
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Description</th>
                      <th scope="col">Merk</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.description}</td>
                        <td>{item.merk}</td>
                        <td>
                          <img
                            src={item.photo}
                            alt={item.photo}
                            width="50px"
                            height="50px"
                          />
                        </td>
                        <td>
                          <div>
                            <ModalEdit
                              id={item.id}
                              name={item.name}
                              stock={item.stock}
                              price={item.price}
                              photo={item.photo}
                              description={item.description}
                            >
                              edit
                            </ModalEdit>
                          </div>
                          <div className="mt-2">
                            <ModalDelete id={item.id} name={item.name}>
                              Delete
                            </ModalDelete>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyProduct;
