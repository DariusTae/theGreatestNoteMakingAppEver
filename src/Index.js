import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from 'react-redux'
import configureStore from './store/configureStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>

)
