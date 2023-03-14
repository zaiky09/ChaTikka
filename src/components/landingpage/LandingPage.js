import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"

function handleClick() {
    console.log("Link clicked!");
  }
  
  function LandingPage() {
    return (
      <div className="landing">
        <div className="text">         
          <center className="position-absolute top-50 start-50 translate-middle-x">
            <h1 className="Landing-text">Welcome To ChaTikka</h1>
            <Link 
              className="btn btn-outline-light mt-4" 
              id="start-btn"
              to="/home" 
              role="button" 
              aria-disabled="true" 
              onClick={handleClick}
            >
              Munchies
            </Link>
          </center>
        </div>
      </div>
    );
  }

export default LandingPage;