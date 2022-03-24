import React,{useState, useEffect} from 'react'
import '../Components/Navbar.css';
import { FaSearchPlus } from "react-icons/fa";
import {Link} from 'react-router-dom'

import axios from 'react'

export default function Navbar() {
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ "backgroundColor": "rgb(62, 255, 165)" }}>
                <a style={{"marginLeft":"40px"}}><FaSearchPlus  size="30px"/></a>
                <a className="navbar-brand" href="#" style={{ "marginRight": "20px" }} >COVID-TRACKER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav " style={{ "marginLeft": "80%" }}  >
                        <a className="nav-item nav-link active" href="#"><Link to={"/"}  style={{"textDecoration":"none", "color":"black","fontWeight":"bold"}}>Home</Link></a>
                        <a className="nav-item nav-link" href="#"><Link to={"/search"}   style={{"textDecoration":"none", "color":"black","fontWeight":"bold"}}>Search</Link></a>
                        <a className="nav-item nav-link" href="#"><Link to={"/global"}   style={{"textDecoration":"none", "color":"black","fontWeight":"bold"}}>Global</Link></a>

                    </div>
                </div>
            </nav>
        </div>
    )
}
