import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import useProducts from "../../hooks/useProducts";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./ManageItems.css";
import { RiChatDeleteLine } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      axios.delete(`http://localhost:5000/product/${id}`).then((res) => {
        console.log(res);
        const remaining = products.filter((service) => service._id !== id);
        setProducts(remaining);
        toast.success('Product deleted successfully');
      });
    }
  };

  return (
    <div>
      <PageTitle title="Manage-Items"></PageTitle>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="straight-line"></div>
        <h1 className="section-header-title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Manage Products").start();
            }}
          />
        </h1>
      </div>

      <div className="container">
        <div className="table-section">
          <Table bordered hover>
            <thead>
              <tr className="text-center">
                <th className="small-device">Image</th>
                <th className="text-start product-name">Name</th>
                <th className="small-device">Price</th>
                <th>Total</th>
                <th>Stock Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="text-center" key={product._id}>
                  <td className="small-device">
                    <img
                      className="table-img"
                      height={50}
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td className="text-start product-name">{product.name}</td>
                  <td className="small-device">${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/updatestock/${product._id}`)}
                      className="all-btn stock-update"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <RiChatDeleteLine onClick={() => handleDelete (product._id)} className="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button
            onClick={() => navigate("/additems")}
            className="all-btn mt-5 d-block mx-auto"
          >
            Add New Items
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ManageItems;
