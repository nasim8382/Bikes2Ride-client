import React from 'react';
import { useForm } from 'react-hook-form';
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddItems.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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
                    <div className="col-7">
                        <div className='form-bg-sign-up'>
                            <div className='form-container-sign-up'>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <div className='straight-line'></div>
                                <h1 className='login-header-title'>Product Information</h1>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Product Name" className="mt-3 mb-4 signup-input" {...register("name", { required: true, maxLength: 20 })} required/>
                                <input placeholder="Product URL" className="mb-4 signup-input" type="text" {...register("image")} required/>
                                <input placeholder="Product Description" className="mb-4 signup-input" type="text" {...register("description")} required/>
                                <input placeholder="Product Supplier Name" className="mb-4 signup-input" type="text" {...register("supplier_name")} required/>
                                <input placeholder="Product Price" className="mb-4 signup-input" type="text" {...register("price")} required/>
                                <input placeholder="Product Quantity" className="mb-4 signup-input" type="text" {...register("quantity")} required/>
                                <input placeholder="Your Email" className="mb-4 signup-input" type="text" {...register("email")} required/>
                                <input className='submit-style mx-auto' type="submit" value="Add Items" />
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;