import React, { Component } from 'react'
import Navbar from './components/navbar.js';
import News from './components/News.js';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

export default class App extends Component {
  c="class based component app";
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
          {/* <Route path='' key="home" element={<News pagesize={5} category={"general"}/>}/> */}
                 <Route  path='/' element={<News key="general" pagesize={5} category={"general"}/>}/>
                 <Route  path='/business' element={<News key="business" pagesize={5} category={"business"}/>}/>
                 <Route  path='/entertainment' element={<News key="entertainment" pagesize={5} category={"entertainment"}/>}/>
                 <Route  path='/general' element={<News key="general" pagesize={5} category={"general"}/>}/>
                 <Route  path='/health' element={<News key="health" pagesize={5} category={"health"}/>}/>
                 <Route  path='/science' element={<News key="sc" pagesize={5} category={"science"}/>}/>
                 <Route  path='/sports' element={<News key="s" pagesize={5} category={"sports"}/>}/>
                 <Route  path='/technology' element={<News key="t" pagesize={5} category={"technology"}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

