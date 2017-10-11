import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
  static propTypes = {
    name: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }



  render() {
    const { name, students } = this.props
    if (!name) return null

    return(
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
              subtitle={<span>by <b>{student.evaluations.slice(-1)[0].color}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
              >
            <img src={student.photo} width="200" height="200" alt='the student' />
            </GridTile>
          ))}
        </GridList>
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

export default connect(mapStateToProps, {fetchBatches}) (BatchesItem)
