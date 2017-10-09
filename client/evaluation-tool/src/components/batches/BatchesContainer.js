import React, { PureComponent } from 'react'

class BatchesContainer extends PureComponent {
  render() {
    return(
      <div>
      <h1>{ this.props.content }</h1>
      <h1>Displaying a list of batches</h1>
      </div>
    )
  }
}

export default BatchesContainer
