import React from 'react'
import ReactDOM from 'react-dom'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'



import App from './App';
import BatchesContainer from './components/batches/BatchesContainer'
import BatchPage from './components/batches/BatchPage'
import StudentPage from './components/batches/StudentPage'
import SignIn from './components/users/SignIn'
import SignUp from './components/users/SignUp'
import NewBatchForm from './components/batches/NewBatchForm'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();



ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
  <Route path="sign-in" component={SignIn} />
  <Route path="/" component={App}>
  <IndexRoute component={BatchesContainer} />
  <Route path="/batches/:batchId" component={BatchPage} />
  <Route path="sign-up" component={SignUp} />
  <Route path="new-batch" component={NewBatchForm} />
  <Route path="/batches/:batchId/students/:studentId" component={StudentPage} />
  </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
