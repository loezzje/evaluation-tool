import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class StudentPage extends PureComponent {

  static propTypes = {
    name: PropTypes.string,
    students: PropTypes.array,
    params: PropTypes.array
  }
  // componentWillMount() {
  //   this.props.fetchBatches()
  // }

  currentStudent() {
    var student = this.props.students.filter(function(student) {
      return student._id === this.props.params.studentId
    })
  }

  render() {
    const { name, student } = this.props


    //
    // const student = students.filter(function(student) {
    //   return student._id === params.studentId
    // })
    if (!name) return null

    return(
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar={name}
        />
        <CardTitle title={student.studentName} subtitle="empty for now" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>

);

  }
}

const mapStateToProps = ({ batches }, { params }) => {
    const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {params})
  // const student = batch.students.filter(function(student) {
  //   return student._id === params.studentId
  // })

  return {
    ...batch,
    params
  }
}

export default connect(mapStateToProps, {fetchBatches}) (StudentPage)
