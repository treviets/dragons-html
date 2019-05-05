import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import * as Constants from '../../const.js'
import 'rc-slider/assets/index.css';
import { connect } from 'react-redux';
import { handleGetHomeDetail } from '../../actions/homeAction';


class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    viewHomeDetail(homeId) {
        this.props.handleGetHomeDetail(homeId);
    } 

    render() {
        const { home } = this.props;
        var viewHomeDetail = this.viewHomeDetail.bind(this, home.Id);

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

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetHomeDetail: (homeId) => dispatch(handleGetHomeDetail(homeId))
    }
}

export default connect(null, mapDispatchToProps)(HomeComponent);
  