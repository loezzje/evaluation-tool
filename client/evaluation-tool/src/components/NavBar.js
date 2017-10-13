import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import FlatButton from 'material-ui/FlatButton';



export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="navigation">
      <Link to="/"><FlatButton label="Home" primary={true} /></Link>

            { signedIn ?
              <a href="#" onClick={this.signOut.bind(this)}><FlatButton label="Sign out" primary={true} /></a> :
              <Link to={'/sign-in'}><FlatButton label="Sign in" primary={true} /></Link>
            }


      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
