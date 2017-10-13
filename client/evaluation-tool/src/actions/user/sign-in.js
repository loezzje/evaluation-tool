import API from '../../api'
import loading from '../loading'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
      dispatch(loading(true))

    api.signIn(user)
      .then((user) => {
        dispatch(loadSuccess())
        dispatch(loading(false))
        api.app.set('user', user)
        dispatch({
          type: USER_SIGNED_IN,
          payload: user
        })
        history.push('/')
      })
      .catch((error) => {
        dispatch(loading(false))
        dispatch(loadError(error))
      })
  }
}
