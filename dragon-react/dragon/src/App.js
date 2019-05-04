import React, { Component } from 'react';
import PageHeader from './containers/PageHeader'
import PageFooter from './containers/PageFooter'
import './App.css';
// import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  
  componentWillMount(){ 
    console.log(this.props)
    this.props.history.push('/homes');
  }


  render() {
    return (
      <div>
        <PageHeader/>
        {/* <div className="page-container">

            {renderRoutes(this.props.route.routes)}
        </div> */}

            <Router>
              <Route path="/homes" component={HomeContainer} />
            </Router>
        
        <PageFooter/>
      </div>
    );
  }
}

export default App;