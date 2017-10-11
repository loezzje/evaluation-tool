import {FETCHED_BATCHES} from '../actions/batches/fetch'
import {BATCH_CREATED} from '../actions/batches/subscribe'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
    return [].concat(payload)

    case BATCH_CREATED :     
     return [{...payload}].concat(state)

  default :
  return state
  }
}
