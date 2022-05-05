import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Typewriter from 'typewriter-effect';
import useProducts from '../../hooks/useProducts';
import './AllProducts.css';
import { Link, useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const [products] = useProducts();
    const navigate = useNavigate();

    return (
        <div>
            <PageTitle title="All-Products"></PageTitle>
            <div className='products-section'>
            <div className='d-flex align-items-center justify-content-center mt-5 mb-4'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("All Products").start();
                        }}
                    />
                </h1>
            </div>
            <h2 className='text-center green mb-5'>Total : {products.length}</h2>
            <div className="container">
                <div className='products-div'>
                {
                    products.map(product => 
                        <div key={product._id}className="product shadow">
                            <img src={product.image} className="img-fluid" alt="product" />
                            <div className='d-flex justify-content-center align-items-center'>
                                    <div className='product-line'></div>
                                    <h5 className='category-text'>{product.catagory}</h5>
                                    <div className='product-line'></div>
                            </div>
                            <h2 className='text-center green mt-3'>{product.name}</h2>
                            <p className='product-description'>"{product.description}"</p>
                            <h4 className='mb-3 ms-4'>
                            Supplier: <span className='green'>{product.supplier}</span>
                            </h4>
                            <h4 className='mb-3 ms-4'>
                            Price: <span className='green'>${product.price}</span>
                            </h4>
                            <h4 className='mb-3 ms-4'>
                            Quantity: <span className='green'>{product.quantity}</span>
                            </h4>
                            <button className='all-btn mt-4 mx-auto d-block mb-4' onClick={ () => navigate(`/updatestock/${product._id}`)}>Stock Update</button>
                        </div>
                    )
                }
                </div>
                <div className='d-flex align-items center justify-content-center'>
                    <Link to="/manageitems" className='link-style'>
                        <button className='all-btn mt-4 me-5'>Manage Inventory</button>
                    </Link>
                    <Link to="/additems" className='link-style'>
                        <button className='all-btn mt-4'>Add New Items</button>
                    </Link>
                </div>
            </div>
            </div>


        </div>
    );
};

export default AllProducts;