import React, { Component } from 'react';
import PageHeader from './containers/PageHeader'
import PageFooter from './containers/PageFooter'
import HomeComponent from './components/Home/HomeComponent'
import './App.css';
import { renderRoutes } from 'react-router-config'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checkHome: true
    }
  }
  componentDidMount(){
    if(!(window.location.pathname == "/" || window.location.pathname.includes("/listroom"))){
      this.setState({checkHome:false})
    }
  }
  render() {
    return (
      <div>
        {this.state.checkHome?
        <div>
          <PageHeader/>
          <div className="page-container">
    
              <HomeComponent route = {this.props.route.routes}/>
          </div>
          <PageFooter/>
        </div>
        :
        <div>
          <PageHeader/>
            <div className="page-container">

                {renderRoutes(this.props.route.routes)}
            </div>
          <PageFooter/>
        </div>
      
      }
      </div>
    );
  }
}

export default App;
