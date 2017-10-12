import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import createBatch from '../../actions/batches/create'
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';


export class NewBatchForm extends PureComponent {

  static propTypes = {
    currentUser: PropTypes.string.isRequired,
  }
  //
  // constructor(props) {
  //   super(props)
  //
  //
  //   this.state = {
  //     name,
  //     startsAt,
  //     endsAt,
  //   }
  // }

  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  updateStartsAt(event) {
    this.setState({
      startsAt: event.target.value
    })
  }

  updateEndsAt(event) {
    this.setState({
      endsAt: event.target.value
    })
  }

  saveBatch() {
      const {
      name,
      startsAt,
      endsAt,
    } = this.state

    const batch = {
      name,
      startsAt,
      endsAt,
    }

    this.props.save(batch)

}


  render(){
    if (this.props.currentUser === null) {
      return <h1>Sorry, you do not have access to this page, please <Link to={'/sign-in'}>Sign in</Link></h1>
    }
    return(
    <div className='CreateBatch'>
      <h2>Name of the next Batch</h2>
      <br />
      <TextField
        hintText="eg Batch #1."
        onChange={this.updateName.bind(this)}
        />
      <br />
      <h2>Start Date</h2>
      <br />
      <TextField
        hintText="eg 01-01-2017"
        onChange={this.updateStartsAt.bind(this)}
        />
      <br />
      <h2>End Date</h2>
      <br />
      <TextField
        hintText="ag 01-01-2017"
        onChange={this.updateEndsAt.bind(this)}
        />
      <br />
      <FlatButton label="Save"
      onClick={this.saveBatch.bind(this)}/>

    </div>
  )}
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })
const mapDispatchToProps = { save: createBatch }
export default connect(mapStateToProps, mapDispatchToProps)(NewBatchForm)
