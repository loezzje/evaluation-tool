import API from '../../api'

export const SUBSCRIBED_TO_BATCHES_SERVICE = 'SUBSCRIBED_TO_BATCHES_SERVICE'
export const BATCH_CREATED = 'BATCH_CREATED'


const api = new API()
const batches = api.service('batches')

export default () => {
  return (dispatch, getState) => {
    if (getState().subscriptions.includes('batches')) return
    batches.on('created', (batch) => { dispatch(createdBatch(batch)) })
    dispatch({ type: SUBSCRIBED_TO_BATCHES_SERVICE })
  }
}

const createdBatch = (batch) => {
  return {
    type: BATCH_CREATED,
    payload: batch
  }
}
// not needed now to remove or update a batch
// const updatedBatch = (batch) => {
//   return {
//     type: BATCH_UPDATED,
//     payload: batch
//   }
// }
//
// const removedBatch = (batch) => {
//   return {
//     type: BATCH_REMOVED,
//     payload: batch
//   }
// }
