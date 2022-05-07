import React from 'react';
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <PageTitle title="Blogs"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Question & Answer").start();
                        }}
                    />
                </h1>
            </div>

            <div className="container">
                    <div className="blogs-div shadow-lg">
                            <h2 className='red'>Difference between Javascript and Node JS : <hr/></h2>
                            <ol className='green'>
                                <li>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</li>
                                <li>JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</li>
                                <li>JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</li>
                                <li>JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development</li>
                                <li>JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.</li>
                                <li>JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</li>
                            </ol>
                    </div>
                    <div className="blogs-div shadow-lg">
                            <h2 className='red'>When should you use nodejs and when should you use mongodb: <hr/></h2>
                            <h3>I will use nodejs for: <hr/></h3>
                            <ul className='green'>
                                <li>For Developing Data Streaming web applications</li>
                                <li>For Real-time web applications</li>
                                <li>For Developing Microservices</li>
                                <li>For Command-line Applications</li>
                                <li>For Creating APIs</li>
                                <li>For Developing SPA</li>
                            </ul>
                            <h3>I will use mongodb for: <hr/></h3>
                            <ul className="green">
                                <li>E-Commerce type of product-based applications</li>
                                <li>Blog and Content Management systems</li>
                                <li>High Speed logging, caching etc in the Real time</li>
                                <li>Need to maintain location wise Geospatial data</li>
                                <li>For maintains data related to the Social and Networking types</li>
                                <li>If application is a loosely coupled mechanism – means design may change at any point of time.</li>
                            </ul>
                    </div>
                    <div className="blogs-div shadow-lg">
                        <h2 className='red'>Differences between SQL and NoSQL databases: <hr/></h2>
                        <h3>Key Difference: <hr/></h3>
                        <ol className="green">
                            <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.</li>
                            <li>Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.</li>
                            <li>SQL databases are vertically scalable while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.</li>
                            <li>Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                            <li>SQL does not support hierarchical storage of data.whereas NoSQL is best suited for hierarchical storage of data.</li>
                            <li>SQL is best suitable for complex queries, multi-row transactions. whereas NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</li>
                        </ol>
                    </div>
                    <div className="blogs-div shadow-lg">
                        <h2 className='red'>What is the purpose of JWT and how does it work? <hr/></h2>
                        <h3>purpose of JWT: <hr/></h3>
                        <p className='green'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.</p>
                        <h3>JWT Authentication Workflow: <hr/></h3>
                        <ol className="green">
                            <li>User sign-in using username and password.</li>
                            <li>The authentication server verifies the credentials and issues a JWT signed using a private key.</li>
                            <li>Moving forward, the client will use the JWT to access protected resources by passing the JWT in the HTTP Authorization header.</li>
                            <li>The resource server then verifies the authenticity of the token using the public key.</li>
                        </ol>
                        <p className='green'>The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key. Since the tokens are used for authorization and authentication in future requests and API calls great care must be taken to prevent security issues. These tokens shouldn’t be stored in publicly accessible areas like the browser’s local storage or cookies. In case there are no other choices, then the payload should be encrypted.</p>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;