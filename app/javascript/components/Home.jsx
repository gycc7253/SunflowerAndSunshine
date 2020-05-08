import React from "react";
import { Link } from "react-router-dom";
import HomePageImage from 'images/homepage2.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default () => (
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center" style={{backgroundImage: 'url("homepage2.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}> 
        <div className="jumbotron jumbotron-fluid" style={{background: "rgba(180, 180, 180, 0.5)", borderRadius: "10px"}}>
          <div className="container secondary-color">
            <h1 className="display-4" style={{fontFamily: 'SimHei'}}>每日积分</h1>
            <p className="lead" style={{fontFamily: 'SimHei'}}>
              郭逸潮和何阳的爱的积分系统
            </p>
            <hr className="my-4" />
            <Link
              to="/stats"
              className="btn btn-lg custom-button"
              role="button"
              style={{fontFamily: 'SimHei'}}
            >
              进入系统
            </Link>
          </div>
        </div>
      </div>
);
