import React, { Component } from 'react';
import './App.css';
import BatchesContainer from './components/batches/BatchesContainer'
import BatchPage from './components/batches/BatchPage'

class App extends Component {
  render() {
    return (
      <div className="App">
      //  { this.props.children }
        <BatchesContainer />
        <BatchPage />
      </div>
    );
  }
}

export default App;
