import React, { Component } from 'react'
import Navbar from './components/navbar.js';
import News from './components/News.js';

export default class App extends Component {
  c="class based component app";
  render() {
    return (
      <div>
        <Navbar/>
        <News pagesize={5} category={"business"}/>
      </div>
    )
  }
}
