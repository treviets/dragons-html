import React, { Component } from 'react';
import PageHeader from './containers/PageHeader'
import PageFooter from './containers/PageFooter'
import './App.css';
import { renderRoutes } from 'react-router-config'
class App extends Component {
  render() {
    return (
      <div>
      <PageHeader/>
      <div className="page-container">

          {renderRoutes(this.props.route.routes)}
      </div>
      <PageFooter/>
      </div>
    );
  }
}

export default App;
