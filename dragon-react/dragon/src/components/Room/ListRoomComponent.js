import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import 'rc-slider/assets/index.css';

import RoomComponent from './RoomComponent';
import { connect } from 'react-redux';

class ListRoomComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };

    }

    render() {
        const { rooms } = this.props;
        return (
            <div>
                <div className="right-home">
                    <div className="container main-slider no-padding-lr-mobile">
                        <div className="listRoom">
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        rooms.map((room, index) => {
                                            return (
                                                <RoomComponent index = {index} room = {room} />
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

const mapStateToProps = (state) => {
    console.log("store rooms ", state);
    return { 
        rooms: state.rooms
    }
}

export default connect(mapStateToProps, null)(ListRoomComponent);