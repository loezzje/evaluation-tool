import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'


class BatchesItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  render() {
    const { name } = this.props
    if (!name) return null

    return(
      <div className='batch page'>
      <h1>{ name }</h1>
      <h1>Displaying a single batch with list of students</h1>
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
