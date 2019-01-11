import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes/RouteMap'
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { config } from './actions/apiUtils'
config()

ReactDOM.render(<BrowserRouter>
    {renderRoutes(routes)}
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
