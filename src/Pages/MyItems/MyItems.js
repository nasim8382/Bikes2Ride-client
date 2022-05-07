import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./MyItems.css";
import { RiChatDeleteLine } from "react-icons/ri";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [userProducts, setUserProducts] = useState([]);
  let [ID, setID] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const email = user.email;
      const url = `http://localhost:5000/userproducts?email=${email}`;
      const { data } = await axios.get(url);
      setUserProducts(data);
    };
    getProducts();
  }, [user]);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setID(id);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/product/${ID}`).then((res) => {
      const remaining = userProducts.filter((service) => service._id !== ID);
      setUserProducts(remaining);
      toast.success("Product deleted successfully");
    });
    handleClose();
    return;
};

  return (
    <div className="my-items-section">
      <PageTitle title="My-Items"></PageTitle>
      <div className="d-flex align-items-center justify-content-center mt-5 mb-4">
        <div className="straight-line"></div>
        <h1 className="section-header-title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Your Products").start();
            }}
          />
        </h1>
      </div>
      <h1 className="red text-center mb-5">
        Your total items: {userProducts.length}
      </h1>
      {userProducts.map((product) => (
        <div className="container" key={product._id}>
          <div className="d-flex align-items-center items-div mx-auto shadow-lg">
            <img className="my-items-img me-4" src={product.image} alt="" />
            <h2 className="me-5 green items-header">{product.name}</h2>
            <div className="d-flex my-2">
              <h2 className="me-5 green">${product.price}</h2>
              <button onClick={() => handleShow(product._id)} className="delete-button">
                <RiChatDeleteLine />
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer position="top-center" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="red">Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="green">
          Are you sure! you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <button className="dialog-btn-cancel" onClick={handleClose}>
            Cancel
          </button>
          <button className="dialog-btn-confirm" onClick={handleDelete}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyItems;
