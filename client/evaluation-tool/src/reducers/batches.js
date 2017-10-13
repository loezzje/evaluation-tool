import {FETCHED_BATCHES} from '../actions/batches/fetch'
import {BATCH_CREATED} from '../actions/batches/subscribe'
import {FETCHED_STUDENTS} from '../actions/students/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
    return [].concat(payload)

    case BATCH_CREATED :
     return [{...payload}].concat(state)

     case FETCHED_STUDENTS :
      return [].concat(payload)


  default :
  return state
  }
}
