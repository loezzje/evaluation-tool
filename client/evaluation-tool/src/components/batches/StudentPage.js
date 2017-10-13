import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class StudentPage extends PureComponent {

  static propTypes = {
    evaluations: PropTypes.array.isRequired,
  }


  componentWillMount() {
    const { fetchBatches } = this.props
    fetchBatches()
  }

  addGreen(evaluations, event) {
    var newEvaluations = evaluations;
    newEvaluations.push("green");
    this.setState({evaluations:newEvaluations})
  }

  addYellow(evaluations, event) {
    var newEvaluations = evaluations;
    newEvaluations.push("yellow");
    this.setState({evaluations:newEvaluations})
  }

  addRed(evaluations, event) {
    var newEvaluations = evaluations;
    newEvaluations.push("red");
    this.setState({evaluations:newEvaluations})
  }

  render() {
    const { studentName, photo, evaluations } = this.props

    if (!studentName) return null

    return(
      <div>
      <Card>
        <CardHeader          
          avatar={photo}
        />
        <CardTitle title={studentName} subtitle={evaluations.slice(-1)[0].color} />
        <CardText>

        </CardText>
        <CardActions>
          <FlatButton
          label="GREEN"
          onClick={this.addGreen.bind(this)} />
          <FlatButton
          label="YELLOW"
          onClick={this.addYellow.bind(this)} />
          <FlatButton
          label="RED"
          onClick={this.addRed.bind(this)} />
        </CardActions>
      </Card>
      <button onClick={browserHistory.goBack}>Back</button>
      </div>

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
