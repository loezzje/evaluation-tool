import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import BatchItem from './BatchItem'


export class BatchesContainer extends PureComponent {

  static propTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatches(batch, index) {
    return <BatchItem
    key={index} {...batch} />
  }

  render(batch, index) {

    return(
      <div className="batch wrapper">
        <main>
          {this.props.batches.map(this.renderBatches.bind(this))}
      </main>
      <h1>Displaying a list of batches</h1>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetchBatches }
export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
