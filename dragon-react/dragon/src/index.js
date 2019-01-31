import React from 'react';
import 'rc-slider/assets/index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes/RouteMap'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { config } from './actions/apiUtils'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
export default React.PureComponent;
export const pureComponentAvailable = true;
const store = configureStore() // you can also pass in

config()

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    {renderRoutes(routes)}
</BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
