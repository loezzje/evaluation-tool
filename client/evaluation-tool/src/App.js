import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router';
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
    if (this.props.currentUser === null) {
      return <h1>Sorry, you do not have access to this page, please <Link to={'/sign-in'}>Sign in</Link></h1>
    }
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
const mapStateToProps = ({currentUser}) => ({currentUser})
export default connect(mapStateToProps)(App)
