import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import * as Constants from '../../const.js'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';


const Range = Slider.Range;

class RoomComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listRoom: []
        };

    }

    
    renderImgsRoom(img, index) {
        var clss = "carousel-item"
        if (index == 0) {
            clss += " active"
        }
        return <div className={clss} key={index}>
            <img src={Constants.apiImg + img.Image} alt="Los Angeles" width="1100" height="500" />
        </div>;
    }
    renderLiTarget(value, index) {
        var clss = ""
        if (index == 0) {
            clss += "active"
        }
        return <li data-target={value} data-slide-to={index} className={clss} key={index}></li>

    }
   
    render() {
            return (
                
                <div className="col-md-6 col-lg-4 bottom-group" key={this.props.room.index} >
                    <div className="listrooms" id="listrooms">
                        <div id={'de' + this.props.room.index} className="carousel slide" data-ride="carousel" data-interval="false">
                            <ul className="carousel-indicators">
                                {this.props.indexTarget.map(this.renderLiTarget)}
                            </ul>
                            <div className="carousel-inner">
                                {this.props.rooms.imgs.map(this.renderImgsRoom)}
                            </div>
                            <a className="carousel-control-prev" href={'#de' + this.props.room.index} data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href={'#de' + this.props.room.index} data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                        <div className="_v72lrv">
                            <span className="_1ol0z3h">
                                <div className="_wuffzwa" style={{ color: 'rgb(98, 86, 75)' }}>
                                    <div className="_1etkxf1" style={{ color: 'rgb(98, 86, 75)' }}>
                                        <span className="_1bb2ucx1">
                                            <span style={{ color: 'rgb(98, 86, 75)' }}>
                                                {this.props.room.typeroom}
                                                    <span aria-hidden="true"> · </span>
                                                {this.props.room.Bed} BEDS
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ marginTop: '4px' }}>
                                    <div className="_1pkilk3o">
                                        <div className="_ng4pvpo">{this.props.room.Code} </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2px' }}>
                                    <div>
                                        <div className="_59f9ic">
                                            <div className="_ncmdki">
                                                <div className="_1yarz4r">
                                                    <span>
                                                        <span>
                                                            <span className="_12kw8n71">
                                                                <span className="_12kw8n71">
                                                                    <span className="_1m8bb6v">Price</span>
                                                                    <span>₫{this.currencyFormat(this.props.room.Price)}</span>
                                                                </span> per night
                                                        </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="_y9ev9r">
                                                <div className="_1cm6f7d">
                                                    <span aria-hidden="true">&nbsp;·&nbsp;</span>
                                                    <span className="_12kw8n71">Free cancellation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2px' }}>
                                    <div className="_hdbaj7">
                                        <div className="_36rlri">
                                            <span className="_q27mtmr">
                                                <span role="img" aria-label="Rating 5 out of 5">
                                                    <span className="_z1pr8k6">
                                                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="_z1pr8k6">
                                                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="_z1pr8k6">
                                                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="_z1pr8k6">
                                                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="_z1pr8k6">
                                                        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="_1m8bb6v">149 reviews</span>
                                            <span className="_1gvnvab" aria-hidden="true">
                                                <span className="_7g6kz31">149</span>
                                            </span>
                                        </div>
                                        <span className="_7g6kz31">
                                            <span aria-hidden="true"> · </span>Superhost
                                    </span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>                                                   
            )
        }
}

export default RoomComponent                