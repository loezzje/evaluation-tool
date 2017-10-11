import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
// import BatchesContainer from './components/batches/BatchesContainer'
// import BatchPage from './components/batches/BatchPage'
import NavBar from './components/NavBar'




class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <NavBar />
        { this.props.children }

        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
