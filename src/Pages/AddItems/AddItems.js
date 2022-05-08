import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth"
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItems.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data, event) => {
        axios.post('https://intense-castle-31682.herokuapp.com/product', data)
            .then(res => {
                const {data} = res;
                if (data.insertedId) {
                    toast.success('New Products added successfully');
                    event.target.reset();
                }
            });
    };

    return (
        <div className='add-items-section'>
            <PageTitle title="Add-Items"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-4'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Add Products").start();
                        }}
                    />
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className='add-bg'>
                            <div className='add-form'>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <div className='straight-line'></div>
                                <h1 className='login-header-title'>Product Information</h1>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Product Name" className="mt-3 mb-4 signup-input" {...register("name", { required: true, maxLength: 20 })} required/>
                                <input placeholder="Product URL" className="mb-4 signup-input" type="text" {...register("image")} required/>
                                <input placeholder="Product Category" className="mb-4 signup-input" type="text" {...register("category")} required/>
                                <input placeholder="Product Description" className="mb-4 signup-input" type="text" {...register("description")} required/>
                                <input placeholder="Product Price" className="mb-4 signup-input" type="text" {...register("price")} required/>
                                <input placeholder="Product Quantity" className="mb-4 signup-input" type="text" {...register("quantity")} required/>
                                <input placeholder="Product Supplier Name" className="mb-4 signup-input" type="text" {...register("supplier", { value: user?.displayName})} required readOnly disabled/>
                                <input placeholder="Your Email" className="mb-4 signup-input" type="text" {...register("email", { value: user?.email})} required readOnly disabled/>
                                <input className='submit-style mx-auto' type="submit" value="Add Items" />
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5"></div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default AddItems;