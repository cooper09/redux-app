import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import reducers from './reducers';

const middleware = applyMiddleware();
const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore( reducers, middleware);

ReactDOM.render(
<Provider store={store}>
    <App store={store} state={store.getState()}/>
</Provider>
,document.getElementById('app'));

