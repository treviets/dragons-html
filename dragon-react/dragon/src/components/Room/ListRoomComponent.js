import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import 'rc-slider/assets/index.css';

import RoomComponent from './RoomComponent';

class ListRoomComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };

    }

    render() {
        const { rooms } = this.props;
        return (
          
            <div className="container main-slider no-padding-lr-mobile">
                <div className="listRoom">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                rooms.map((room, index) => {
                                    return (
                                        <RoomComponent index = {index} room = {room} key = {index}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListRoomComponent;