import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux'
// import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <Provider store={store}>
  // <Router history={history}>
  // <Route path="/" component={App}>
  // <IndexRoute component={BatchesContainer} />
  // <Route path="/batches/:batchId" component={batchPage} />
    <App />,
    // </Route>
    // </Router>
  // </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
