import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import * as Constants from '../../const.js'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const Range = Slider.Range;



class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.getHomeDetail = this.getHomeDetail.bind(this);
    }

    getHomeDetail(homeId) {
        window.location.href = "/rooms/" + homeId;
    } 

    render() {
        const { home } = this.props;
        var viewHomeDetail = this.getHomeDetail.bind(this, home.Id);

        return (
            <div className="col-md-4 col-sm-6 margin-bottom-md" key={this.props.index}>
                <div className="homes" onClick={viewHomeDetail}>
                    <img className="home-image" src={Constants.apiImg + this.props.home.Images[0].Image} />
                    <div className="home-description">
                        <div className="font-size16">{home.Name}</div>
                        <div className="font-size14">{home.NumberOfRooms} homes</div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default HomeComponent                