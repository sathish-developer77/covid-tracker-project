
import { React, useState, useEffect } from "react";
import { MdCoronavirus } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import axios from "axios";
import Navbar from '../Components/Navbar'
import "../Components/Home.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);


const Home = () => {
    const [cases, setCases] = useState([]);

    const state = {
        labels: cases.map((emp) => emp.Country),
        datasets: [
            {
                axis: "y",
                label: "TotalCases",
                lineTension: 0.0,
                backgroundColor: "#4287f5",
                borderColor: "#0004fc",
                pointHitRadius: 20,
                borderWidth: 3,
                data: cases.map((emp) => emp.TotalCases),
            },
            {
                axis: "y",
                label: "TotalRecovered",
                lineTension: 0.0,
                backgroundColor: "#8feb67",
                borderColor: "#46e800",
                pointHitRadius: 20,
                borderWidth: 3,
                data: cases.map((emp) => emp.TotalRecovered),
            },
            {
                axis: "y",
                label: "ActiveCases",
                lineTension: 5.0,
                backgroundColor: "#ebeb63",
                borderColor: "#e8e800",
                pointHitRadius: 20,
                borderWidth: 3,
                data: cases.map((emp) => emp.ActiveCases),
            },
            {
                axis: "y",
                label: "Death",
                lineTension: 5.0,
                backgroundColor: "#f05648",
                borderColor: "#fc1500",
                pointHitRadius: 20,
                borderWidth: 3,
                data: cases.map((emp) => emp.TotalDeaths),
            },
        ],
    };

    const options = {
        categoryPercentage: 0.8,
        barPercentage: 1,
        indexAxis: "y",
        maintainAspectRatio: true,
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8
                    },
                    minRotation: 20,
                },
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 15,

                    },
                    minRotation: 20,
                },
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },

    };

    useEffect(() => {
        axios
            .get("https://covidpagination.herokuapp.com/country")
            .then((res) => {
                console.log(res.data.data);
                setCases(res.data.data);
                console.log(cases);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Navbar />

            <div className="content1">

                <div className="left1">

                    <h1 style={{fontFamily:"Helvetica" }}><MdCoronavirus size="70px" /> Covid-19 Tracker</h1>
    
                       <p style={{fontSize: "25px",fontFamily:"sans-serif"}}
                        className="homeglobal" >
                        < FcGlobe size="40"/>  GLOBAL CASES </p>

                    <div className="box1">
                        <span>
                            <p style={{ color: "blue", fontSize: "30px" }}>Total Cases :</p>
                            <p style={{ fontSize: "25px" }}>
                                {cases.reduce((a, b) => {
                                    return Number(a) + Number(b.TotalCases);
                                }, 0)}{" "}
                            </p>
                        </span>
                        <span>
                            <p style={{ color: "green", fontSize: "30px" }}>Recovered Cases :</p>
                            <p style={{ fontSize: "25px" }}>
                                {cases.reduce((a, b) => {
                                    return Number(a) + Number(b.TotalRecovered);
                                }, 0)}
                            </p>
                        </span>
                        <span>
                            <p style={{ color: "brown", fontSize: "30px" }}>Active Cases :</p>
                            <p style={{ fontSize: "25px" }}>
                                {cases.reduce((a, b) => {
                                    return Number(a) + Number(b.ActiveCases);
                                }, 0)}
                            </p>
                        </span>
                        <span>
                            <p style={{ color: "Red", fontSize: "30px" }}>Deaths :</p>
                            <p style={{ fontSize: "25px" }}>
                                {cases.reduce((a, b) => {
                                    return Number(a) + Number(b.TotalDeaths);
                                }, 0)}
                            </p>
                        </span>
                    </div>
                </div>
                <div className="right1">
                    <p
                        style={{
                            fontSize: "25px",
                            fontFamily: "Times New Roman",
                            marginLeft: "40%",
                        }}
                        className="homeglobal"
                    >
                        Country wise visualization
                    </p>

                    {/* bar chart */}

                    <div>
                        <Bar
                            data={state}
                            options={options}
                            className="chart"
                            width={50}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
