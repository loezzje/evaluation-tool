import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class StudentPage extends PureComponent {

  componentWillMount() {
    const { fetchBatches } = this.props
    fetchBatches()
  }

  render() {
    const { studentName, photo, evaluations } = this.props

    if (!studentName) return null

    return(
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar={photo}
        />
        <CardTitle title={studentName} subtitle={evaluations.slice(-1)[0].color} />
        <CardText>

        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>

);

  }
}

const mapStateToProps = ({ batches}, {params }) => {
  const batch = batches.filter((batch) => (batch._id === params.batchId))[0]
  const student = batch && batch.students.filter((student) => (student._id === params.studentId))[0]
  return {
    ...batch,
    ...student
  }

}

export default connect(mapStateToProps, {fetchBatches}) (StudentPage)
