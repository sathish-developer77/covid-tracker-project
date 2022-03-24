import React from 'react'


import { useLocation, Link } from "react-router-dom";
export default function Display() {
  
    const { state } = useLocation();

    
    return (
      
        <div className="backdisplay" >
            <div className="card" >
                <div style={{ "backgroundColor": "grey", "width": "800px", "marginLeft": "300px", "marginTop": "200px", "textAlign": "center","color":"black" }} className="card-body">


                    <h5 className="card-title">Country   = {state.Country}</h5>
                    <h5 className="card-title">Population = {state.Population}</h5>
                    <h5 className="card-title">TotalTests = {state.TotalTests}</h5>
                    <h5 className="card-title">TotalCases = {state.TotalCases}</h5>
                    <h5 className="card-title">TotalDeaths = {state.TotalDeaths}</h5>
                    <h5 className="card-title">TotalRecovered = {state.TotalRecovered}</h5>

                   
                </div>
            </div>
         </div>
    
        


    )
}
