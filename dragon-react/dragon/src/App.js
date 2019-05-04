import React, { Component } from 'react';
import PageHeader from './containers/PageHeader'
import PageFooter from './containers/PageFooter'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
// import RoomContainer from './containers/';

class App extends Component {
  
  componentWillMount(){ 
    this.props.history.push('/homes');
  }


  render() {
    return (
      <div>
        <PageHeader/>
            <Router>
              <Route path = "/homes" component={HomeContainer} />
              {/* <Route path = "/rooms" component={RoomContainer} /> */}

            </Router>
        
        <PageFooter/>
      </div>
    );
  }
}

export default App;