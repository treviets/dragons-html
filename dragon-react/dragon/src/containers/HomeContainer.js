import React, { Component } from 'react';

import HeaderComponent from "../components/Layout/HeaderComponent";
import LeftMenuComponent from "../components/Layout/LeftMenuComponent";
import ListHomeComponent from "../components/Home/ListHomeComponent";
class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listRoom: []
        };      
    }

    updateRooms = (rooms) => {
        this.setState({
            listRoom: rooms
        })
    }
    
    render() {
        return (
            <div>
                <HeaderComponent/>
               <div className="home">
                    <div className="col-md-12">
                        <LeftMenuComponent />
                        <ListHomeComponent />
                      
                    </div>
                </div>
            </div>
        );
    }
}


export default HomeContainer