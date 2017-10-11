import React, { Component } from 'react';
import './App.css';
// import BatchesContainer from './components/batches/BatchesContainer'
// import BatchPage from './components/batches/BatchPage'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      { this.props.children }

      </div>
    );
  }
}

export default App;
