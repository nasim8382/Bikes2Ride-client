import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Typewriter from 'typewriter-effect';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateStock.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStock = () => {
    const {id} =  useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`https://intense-castle-31682.herokuapp.com/product/${id}`)
            .then(res => setProduct(res.data));
    }, [ id, product ]);

    const handleIncreaseQuantity = e => {
        e.preventDefault();
        const quantity = parseInt(e.target.quantity.value) + parseInt(product.quantity);

        axios.put(`https://intense-castle-31682.herokuapp.com/product/${id}`, {quantity})
            .then(res => {
                toast.success('Stock Updated Successfully');
                e.target.reset();
            });
    }

    const handleDecreaseQuantity = () => {
        const quantity = parseInt(product.quantity) - 1;

        axios.put(`https://intense-castle-31682.herokuapp.com/product/${id}`, {quantity})
            .then(res => {
                toast.success('One Product Delivered');
            });
    }

    return (
        <div className='update-section'>
            <PageTitle title="Stock-Update"></PageTitle>
            <div className='d-flex align-items-center justify-content-center mt-5 mb-4'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Update Your Stock").start();
                        }}
                    />
                </h1>
            </div>

            <div className="container shadow-lg update-div">
                <div className="row">
                    <div className="col-12 col-md-5 my-auto">
                        <img src={product.image} className="img-fluid d-block mx-auto" alt="product" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h2 className='green mt-3 mb-3 text-uppercase'>{product.name}</h2>
                        <p className='product-description'>"{product.description}"</p>
                        <h4 className='mb-3'>
                            Category: {product.category}
                        </h4>
                        <h4 className='mb-3'>
                            Supplier: <span className='green text-capitalize'>{product.supplier}</span>
                        </h4>
                        <h4 className='mb-3'>
                            Price: <span className='green'>${product.price}</span>
                        </h4>
                        <h4 className='mb-3'>
                            Quantity: <span className='green'>{product.quantity}</span>
                        </h4>
                        <button onClick={handleDecreaseQuantity} className='all-btn mt-3 mb-4 delivered-btn'>Delivered</button>
                        <form onSubmit={handleIncreaseQuantity}>
                            <input className='quantity' type="number" placeholder="Quantity" name="quantity" required/>
                            <input className='restock' type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
            
            <button onClick={ () => navigate("/manageitems")} className='all-btn manage-btn inventory-btn d-block mx-auto'>Manage Inventory</button>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default UpdateStock;