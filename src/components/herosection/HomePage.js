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
                            <img src="https://www.kitchensanctuary.com/wp-content/uploads/2017/02/Chicken-Tikka-Chapati-Burritos-tall-FS.webp" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Chicken Tikka Chapati Burritos</strong> - are an Indian and Mexican fusion food you can eat on the go.</p>
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
                            <img src="https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Chicken-Tikka-Skewers-tall-FS-87.webp" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Chicken Tikka Kebabs</strong> - in a richly spiced yogurt marinade.</p>
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
                            <img src="https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-tall-FS-30.webp" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Chicken Shawarma</strong> - a juicy, spiced chicken wrapped in flatbreads with a creamy, tahini dressing.</p>
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
                            <img src="https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Chicken-Tikka-Masala-tall-FS-58.webp" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Chargrilled Chicken Tikka Masala</strong> - tender chunks of marinated chargrilled chicken in a creamy mild sauce with garlic, ginger and spices.</p>
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
                            <img src="https://www.allrecipes.com/thmb/qKmMhry3A6ItCMrPhZe56cN2dTE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45736-chicken-tikka-masala-chibi-chef-596644e8f5694053bf0e9b6e0ff2e834.jpg" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Chicken Tikka Masala</strong> - Chicken pieces are marinated in a spicy yogurt mixture, thread onto skewers and grilled until tender and slightly charred</p>
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
                            <img src="https://www.allrecipes.com/thmb/TioJPaKJ_Z4ttt4effbKDiL-DKM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/262499-tandoori-paneer-tikka-masala-Allrecipes-8b7e0db14d35411497da64e353b792e8.jpg" alt="Placeholder" />
                            <div className="card-body">
                                <p className="card-text"><strong>Tandoori Paneer Tikka Masala</strong> - The paneer and bell pepper kebabs are baked in a conventional oven rather than the traditional tandoor (clay oven).</p>
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