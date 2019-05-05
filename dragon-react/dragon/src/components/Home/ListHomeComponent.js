import React, { Component } from 'react';
import '../../assets/css/slide.css';
import '../../assets/css/style.css';
import '../../assets/js/index';
import homeService from '../../services/home.js';
import 'rc-slider/assets/index.css';
import HomeComponent from './HomeComponent';
import { connect } from 'react-redux';
import ListRoomComponent from '../Room/ListRoomComponent';
import { handleGetAllHome } from '../../actions/homeAction';

class ListHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homes: []
        };      
    }
 
    componentDidMount() {
        this.getAllHome();
    }

    async getAllHome() {
        const res = await homeService.getListHomes()
        this.setState({ homes: res.Data })
    }

    render() {
        const { rooms } = this.props;
       
        return (
                <div>
                    <div className="right-home">
                        <div className="container main-slider no-padding-lr-mobile">
                            <div className="listHome">
                                <br></br>
                                <div className="title-list">The Dragons's list</div>
                                <br></br>
                                <div className="col-md-12">
                                    <div className="row">
                                        { 
                                            rooms && rooms.length ? 
                                                <ListRoomComponent rooms = {rooms} />         
                                            
                                            : 
                                        
                                            this.state.homes.map((home, index) => {
                                                return (
                                                    <HomeComponent index = {index} home = {home} key = {index} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            )
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        getAllHome: () => dispatch(handleGetAllHome())
    }
}

const mapStateToProps = (state) => {
    console.log("store rooms ", state);
    return { 
        homes: state.homeReducer.homes,
        rooms: state.homeReducer.rooms
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListHomeComponent);
