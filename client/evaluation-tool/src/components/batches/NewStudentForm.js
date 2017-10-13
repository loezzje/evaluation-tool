import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import createStudent from '../../actions/batches/create'
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';


export class NewStudentForm extends PureComponent {


  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: event.target.value
    })
  }

  saveBatch() {
      const {
      name,
      photo,
    } = this.state

    const student = {
      name,
      photo
    }

    this.props.save(student)

}


  render(){

    return(
    <div className='CreateStudent'>
      <h2>Name of the Student</h2>
      <br />
      <TextField
        hintText="eg Batch #1."
        onChange={this.updateName.bind(this)}
        />
      <br />
      <h2>Photo</h2>
      <br />
      <TextField
        hintText="post the link to the photo here"
        onChange={this.updateStartsAt.bind(this)}
        />
      <br />
      <FlatButton label="Save"
      onClick={this.saveBatch.bind(this)}/>

    </div>
  )}
}

const mapDispatchToProps = { save: createStudent }
export default connect(null, mapDispatchToProps)(NewStudentForm)
