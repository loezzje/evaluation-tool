import React, { Component } from 'react';
import './App.css';
import BatchesContainer from './components/batches/BatchesContainer'
import BatchItem from './components/batches/BatchItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BatchesContainer />
        <BatchItem />
      </div>
    );
  }
}

export default App;
