import React, { Component } from 'react'
import Navbar from './components/navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter, Routes, Route
} from "react-router-dom";

export default class App extends Component {
  c="class based component app";
  render() {
    let pagesize=15;
    return (
      <div>
        <HashRouter>
          <Navbar/>
          <Routes>
          {/* <Route path='' key="home" element={<News pagesize={pagesize} category={"general"}/>}/> */}
                 <Route  path='/' element={<News key="home" pagesize={pagesize} category={"general"}/>}/>
                 <Route  path='/business' element={<News key="business" pagesize={pagesize} category={"business"}/>}/>
                 <Route  path='/entertainment' element={<News key="entertainment" pagesize={pagesize} category={"entertainment"}/>}/>
                 <Route  path='/general' element={<News key="general" pagesize={pagesize} category={"general"}/>}/>
                 <Route  path='/health' element={<News key="health" pagesize={pagesize} category={"health"}/>}/>
                 <Route  path='/science' element={<News key="sc" pagesize={pagesize} category={"science"}/>}/>
                 <Route  path='/sports' element={<News key="s" pagesize={pagesize} category={"sports"}/>}/>
                 <Route  path='/technology' element={<News key="t" pagesize={pagesize} category={"technology"}/>}/>
        </Routes>
        </HashRouter>
      </div>
    )
  }
}

