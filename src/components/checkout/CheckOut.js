import React from "react";
import { Link } from "react-router-dom";
//import NavBar from "../navbar/NavBar";

function CheckOut () {

    return (
        <div>
            
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Chicken Tikka Chapati Burritos</h6>
                                    <small className="text-muted">Extra hot</small>
                                </div>
                                <span className="text-muted">KSh 2000</span>
                            </li>
                            {/* <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">KSh 800</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">KSh 500</span>
                            </li> */}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (KSh)</span>
                                <strong>KSh 2000</strong>
                            </li>
                        </ul>
                        <div>
                            <h4>Payment is made upon delivery</h4>
                        </div>
                        
                            <div className="input-group-append mt-3">
                                <Link type="submit" className="btn btn-outline-success" to="/order">Confirm</Link>
                            </div>
                        
                    </div>

                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Order details</h4>
                        <form className="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">Full name</label>
                                        <input type="text" className="form-control mb-3" id="firstName" placeholder="Full name" value="" required/>
                                    <label for="Location">Delivery Location</label>
                                        <input type="text" className="form-control mb-3" id="delivery" placeholder="Delivery Address" value="" required/>
                                    <label for="PhoneNumber">Phone Number</label>
                                        <input type="number" className="form-control mb-3" id="phone" placeholder="Phone Number" value="" required/>
                                        <div className="input-group-append">
                                            <Link type="submit" className="btn btn-outline-dark" to="/order">Confirm</Link>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;