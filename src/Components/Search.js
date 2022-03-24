import { React, useState, useEffect } from "react";
// import { Container,Nav,Navbar}  from 'react-bootstrap'
import "../Components/Search.css"
import { FaSearchLocation } from "react-icons/fa";

import axios from 'axios'
import { Link } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://covidpagination.herokuapp.com/country')
      .then(res => {
        console.log(res.data.data)
        setData(res.data.data)
        setInfo(res.data.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);
  const filter = (e) => {
    let s = [];

    if (e.target.value !== "") {
      s = data.filter((emp) => {
        return emp.Country.toLowerCase().match(e.target.value.toLowerCase());
      });
      setData(s);
    } else {
      setData(info);
    }
  };

  

  return (
    <>
    <div className="background" >
      <div className="main">
        <div className="box">
          <div className="content">
            <h1><FaSearchLocation style={{ "marginRight": "10px" }} />Select a Country for reports</h1>
            <input type="text" className="" onChange={filter} placeholder="Select a Country" />
            <br />
            <div className="scroll-container">
              {data.map((data, index) => {

                return (

                  <Link to={"/display"} key={index} state={data} className="link">
                    <div className="scroll-page">
                      <p>{data.Country}</p></div>

                  </Link>
                )
              }
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Search;
