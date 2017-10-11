import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import fetchBatches from '../../actions/batches/fetch'
import BatchItem from './BatchItem'


export class BatchesContainer extends PureComponent {

  static propTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatches(batch, index) {
    return <BatchItem
    key={index} {...batch} />
  }

  render(batch, index) {
    if (this.props.currentUser === null) {
      return <h1>Sorry, you do not have access to this page, please <Link to={'/sign-in'}>Sign in</Link></h1>
    }
    return(
      <div classname="batch wrapper">
        <main>
          {this.props.batches.map(this.renderBatches.bind(this))}
      </main>
      <h1>Displaying a list of batches</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })
const mapDispatchToProps = { fetchBatches }
export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
