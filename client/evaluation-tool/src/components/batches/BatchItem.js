import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link } from 'react-router'

export class BatchItem extends PureComponent {
  static porpTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

render () {
  const { _id, name } = this.props


  return(
    <article className='BatchItem'>
    <h1>
      <Link to={`/batches/${_id}`}>{ name }</Link>
    </h1>
    </article>
  )
}
}

export default (BatchItem)
