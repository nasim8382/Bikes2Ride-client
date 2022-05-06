import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import spinnerImg from '../../../images/loader1.gif';

const Inventories = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const sixProducts = products.slice(0, 6);

    if (products.length === 0) {
        return <img className="img-fluid spinner-img mt-5 mx-auto d-block" src={spinnerImg} alt="" />
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>Inventories</h1>
            </div>
            <div className="container">
            <div className='products-div'>
                {
                    sixProducts.map(product => 
                        <div key={product._id}className="product shadow">
                            <img src={product.image} className="img-fluid" alt="product" />
                            <div className='d-flex justify-content-center align-items-center'>
                                    <div className='product-line'></div>
                                    <h5 className='category-text text-capitalize'>{product.category}</h5>
                                    <div className='product-line'></div>
                            </div>
                            <h2 className='text-center green mt-3 text-uppercase'>{product.name}</h2>
                            <p className='product-description'>"{product.description}"</p>
                            <h4 className='mb-3 ms-4'>
                            Supplier: <span className='green text-capitalize'>{product.supplier}</span>
                            </h4>
                            <h4 className='mb-3 ms-4'>
                            Price: <span className='green'>${product.price}</span>
                            </h4>
                            <h4 className='mb-3 ms-4'>
                            Quantity: <span className='green'>{product.quantity}</span>
                            </h4>
                            <button className='all-btn mt-4 mx-auto d-block mb-4' onClick={ () => navigate(`/inventory/${product._id}`)}>Stock Update</button>
                        </div>
                    )
                }
                </div>
            </div>
            <button onClick={ () => navigate('/manageitems')} className='all-btn my-5 mx-auto d-block'>Manage Inventory</button>
        </div>
    );
};

export default Inventories;