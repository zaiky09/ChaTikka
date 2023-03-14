import React from "react";
//import { Link } from "react-router-dom";
import "./HomePage.css"
import NavBar from "../navbar/NavBar";
//import CheckOut from "../checkout/CheckOut";


function HomePage() {
    return (
        <div>
            <NavBar/>
            
            <div className="album py-5 bg-light">

                <div className="container">

                    <center>
                        <h1 className="food mb-5">
                            "LET FOOD BE THY VICE"
                        </h1>
                    </center>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                {/* <small className="text-muted">9 mins</small> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                    {/* <small className="text-muted">15 mins</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                    {/* <small className="text-muted">20 mins</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                    {/* <small className="text-muted">20 mins</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                    {/* <small className="text-muted">20 mins</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="card shadow-sm">
                            <img src="https://via.placeholder.com/500x325.png?text=Placeholder" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>
                                    </div>
                                    {/* <small className="text-muted">20 mins</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default HomePage;