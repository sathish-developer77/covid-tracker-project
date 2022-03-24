import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Global from './Components/Global'
import Search from './Components/Search';
import Display from './Components/Display'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/global" element={<Global/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/display" element={<Display/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}
