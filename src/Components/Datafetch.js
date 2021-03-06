import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';

function Datafetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://covidpagination.herokuapp.com/country')
            .then(res => {
                console.log(res.data.data)
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);
    const column=[
        
        { dataField: "Country",     text:"Country"}, 
        { dataField: "ThreeLetterSymbol",text:"ISO Code"}, 
        { dataField: "Population",  text:"Population"}, 
        { dataField: "TotalTests",  text:"TotalTests"}, 
        { dataField: "TotalCases",  text:"TotalCases"},
        { dataField: "TotalDeaths", text:"TotalDeaths"}, 
        { dataField: "TotalRecovered", text:"TotalRecovered"}, 

    ]
    return (
        <div>
            <BootstrapTable
            keyField='country'
            data={posts}
            columns={column}
            pagination={paginationFactory()}
            />
       </div>
    )
}
export default Datafetch