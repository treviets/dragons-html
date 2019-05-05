import React, { Component } from 'react';

import HeaderComponent from "../components/Layout/HeaderComponent";
import LeftMenuComponent from "../components/Layout/LeftMenuComponent";
import ListHomeComponent from "../components/Home/ListHomeComponent";
import ListRoomComponent from "../components/Room/ListRoomComponent";
import { handleGetAllHome } from '../actions/homeAction';

import { connect } from 'react-redux';

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listRoom: []
        };      
    }

    componentDidMount() {
        this.props.getAllHome();
    }

    
    render() {
        const { homes, rooms } = this.props; 
        return (
            <div>
                <HeaderComponent />
               <div className="home">
                    <div className="col-md-12">
                        <LeftMenuComponent />
                        {
                            homes && homes.length &&
                            <ListHomeComponent homes = {homes}/> 
                          
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllHome: () => dispatch(handleGetAllHome())
    }
}

const mapStateToProps = (state) => {
    return { 
        homes: state.homeReducer.all_homes,
        rooms: state.roomReducer.rooms,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);