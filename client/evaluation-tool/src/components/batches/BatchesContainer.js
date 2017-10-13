import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../../actions/batches/fetch'
import BatchItem from './BatchItem'
import RaisedButton from 'material-ui/RaisedButton';
import style from './BatchesContainer.sass'
import { Link } from 'react-router'


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
      <Link to={`/new-batch`}>
       <RaisedButton label="Create new Batch" primary={true} style={style} />
       </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetchBatches }
export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
