import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import fetchBatches from '../../actions/batches/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class BatchesItem extends PureComponent {

  componentWillMount() {
    const { fetchBatches } = this.props
    fetchBatches()
    // this.props.fetchBatches()
  }


   getRandomStudentId(students) {
    var random = Math.random() * 100;
    var get_color_group =  students.filter(function(student){
        if (random <= 17) {return student.evaluations.slice(-1)[0].color === "green" };
        if (random > 17 && random <= 50) {return student.evaluations.slice(-1)[0].color === "yellow" };
        if (random > 50) {return student.evaluations.slice(-1)[0].color === "red" };
      return get_color_group} );
    return (get_color_group[Math.floor(Math.random() * get_color_group.length)]._id);
    }

  render() {
    const { name, students, _id } = this.props
    if (!name) return null
    const randomStudentId = this.getRandomStudentId(students)

    return(
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>{ name }</Subheader>
            {students.map((student) => (
            <GridTile
              key={student.photo}
              title={student.studentName}
              subtitle={<span><b>{student.evaluations.slice(-1)[0].color}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
              >
              <Link to={`/batches/${_id}/students/${student._id}`}>
                <img src={student.photo} width="200" height="200" alt='the student' />
              </Link>
            </GridTile>
            ))}
          </GridList>
        </div>
        <div>
        <Link to={`/batches/${_id}/students/${randomStudentId}`}>
          <RaisedButton
            label="Random Student"
            primary={true}
            style={style}
            />
            </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}
export default connect(mapStateToProps, { fetchBatches }) (BatchesItem)
