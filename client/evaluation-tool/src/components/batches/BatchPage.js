import React, { PureComponent } from 'react'

class BatchesItem extends PureComponent {
  render() {
    return(  <div>
      <h1>{ this.props.content }</h1>
      <h1>Displaying a single batch with list of students</h1>
      </div>
    )
  }
}

export default BatchesItem
