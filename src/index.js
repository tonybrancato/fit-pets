import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import {Provider} from 'react-redux';
import App from './components/app';
import {store, history} from './store';
import './index.css';



// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
