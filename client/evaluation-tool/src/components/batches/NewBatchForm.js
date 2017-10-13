import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import createBatch from '../../actions/batches/create'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

export class NewBatchForm extends PureComponent {

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

      <DatePicker
      hintText="Portrait Dialog"
      onClick={this.updateStartsAt.bind(this)} />
      <br />
      <h2>End Date</h2>
      <br />
      <TextField
        hintText="ag 01-01-2017"
        onChange={this.updateStartsAt.bind(this)}
        />
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

const mapDispatchToProps = { save: createBatch }
export default connect(null, mapDispatchToProps)(NewBatchForm)
