import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Note from './Note'
import Board from './Board'

class App extends Component { 
 
  render() {
    return (
    <Board count="ten" />
    )
  }
}


export default App;
