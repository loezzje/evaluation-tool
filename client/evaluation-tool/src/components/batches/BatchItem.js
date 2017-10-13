import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link } from 'react-router'
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import {blue500} from 'material-ui/styles/colors';

import ActionAssignment from 'material-ui/svg-icons/action/assignment';


export class BatchItem extends PureComponent {
  static porpTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }



render () {
  const { _id, name } = this.props


  return(
    <Link to={`/batches/${_id}`}>
    <ListItem
       leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
       rightIcon={<ActionInfo />}
       primaryText={name}
     /></Link>

  )
}
}

export default (BatchItem)
