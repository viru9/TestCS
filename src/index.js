import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import thunk from 'redux-thunk';

import Home from './components/home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
   applyMiddleware(promise,thunk)
));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
