import React, { Component } from 'react'
import '../assets/css/privateHomeInHouse.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../assets/js/plus'
import homeService from '../services/home.js'
import * as Constants from '../const.js'


class DetailHouseComponent extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            selectGuest:"",
            startDate: new Date(),
            endDate: new Date(),
            countPlus : 1,
            showGuests: true,
            roomData:{},
        };
        this.handeChageGuest =  this.handeChageGuest.bind(this);
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleChooseGuests = this.handleChooseGuests.bind(this);
        this.loadData = this.loadData.bind(this);

    }
    componentDidMount(){
        this.loadData()
    }
    async loadData(){
        const res = await homeService.getDetailRoom(this.props.room.Id)
        this.setState({roomData: res.Data})
        console.log(this.state.roomData)
    }

    handeChageGuest(event){
        this.setState({
            selectGuest: event.target.value,
        });
    }
    handleChangeFromTime(date) {
        this.setState({
            startDate: date,
        });
    }
    handleChangeToTime(date){
        this.setState({
            endDate:date,
        });
    }
    handlePlus(){
        const check = this.state.countPlus;
        this.setState({
            countPlus: check+1
        })
    }
    handleMinus(){
        const minus = this.state.countPlus;
        this.setState({
            countPlus: minus-1
        })
    }
    handleChooseGuests(){
        this.setState({
            showGuests: true
        });
    }
    currencyFormat = (uv) => {

        if (Math.floor(uv) === 0) {
            return "0"
        }

        var price = Math.floor(uv)
        var priceString = ''
        var count = 0

        while (price > 0) {
            var number = price % 10;
            price = Math.floor(price / 10);
            count = count + 1

            priceString = number + priceString;

            if (count === 3 && price > 0) {
                priceString = "," + priceString;
                count = 0;
            }

        }

        return priceString 
    }

    render() {
        return (

            <div className="container">
                <div className="privateRom">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <p style={{color: '#39576a'}}><b>{this.props.roomType}</b></p>
                            <div className="optionTitle">
                                <p className="title">{this.state.roomData.Title}</p>
                                <img className="avatar" src="../img/icondragon.jpg" alt=""/>
                                <span className="font-size18">
                                    <i className="fa fa-users paddingLeft5" aria-hidden="true"></i> {this.props.room.NumberOfGuest} guests
                                    <i className="fa fa-bell paddingLeft5" aria-hidden="true"></i> {this.state.roomData.Bedroom} bedrooms
                                    <i className="fa fa-bed paddingLeft5" aria-hidden="true" ></i> {this.state.roomData.Bed} beds
                                    <i className="fa fa-bath paddingLeft5" aria-hidden="true"></i> {this.state.roomData.Bath} share bath
                                </span>
                            </div>
                            <br/>
                            <hr/> 
                            <div className="description font-size18">
                                <p>{this.state.roomData.Description}</p>
   
                                <a href="#show" className="readmore" id="show">Read more about the space</a>                                                         
                                <svg className="readmore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)'}}>
                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                </svg>
                                
                                <div className="space-detail">
                                    <p className="space">The Space</p>      
                                    <p>{this.state.roomData.TheSpace}</p>
                                    <p className="space">Guest access</p>      
                                    <p>{this.state.roomData.GuestAccess}</p>
                                    <p className="space">Interaction with guests</p>      
                                    <p>{this.state.roomData.InteractionWithGuests}</p>
                                </div>
                            
                                <a href="#hide" className="hidemore" id="hide">Hide</a>      
                                <svg className="hidemore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform:'rotate(180deg)'}}>
                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                </svg>
                        
                                                                           

                            </div>
                            <br/>
                            <p style={{color: '#40bab3'}}>Contact host</p>

                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="request-to-book">
                                <div className="content-request">
                                    <span>
                                        <b>₫{this.currencyFormat(this.props.room.Price)}</b> per night
                                    </span>
                                    <p>
                                        <span>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            65
                                        </span>
                                    </p>
                                    <hr/>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6 from-time-group">
                                                    <p>Check In</p>
                                                    <DatePicker
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChangeFromTime}
                                                    />
                                                </div>
                                                <div className="col-md-6 to-time-group">
                                                    <p>Check outs</p>
                                                    <DatePicker
                                                        selected={this.state.endDate}
                                                        onChange={this.handleChangeToTime}
                                                    />
                                                </div>


                                            </div>
                                            </div>

                                    <div className="form-group">
                                        <label htmlFor="">Guest:</label>
                                        <select className="form-control" value={this.state.selectGuest} onChange={this.handeChageGuest} id="inlineFormCustomSelect">
                                            <option value="1">1 guest</option>
                                            <option value="2">2 guests</option>
                                        </select>
                                        <br/>
                                        <button className="form-control btnRequest">Request to Book</button>
                                        <p style={{textAlign: 'center'}}>You won't be charged yet</p>
                                    </div>
                                    <hr/>
                                    <div className="footer-request">
                                        <p>This home is on people's minds.</p>
                                        <p> It's been viewed 500+ times in the past week</p>
                                        <i className="fa fa-lightbulb-o logo-created" aria-hidden="true"></i>
                                    </div>
                            </div>
                            <br/>
                            <p style={{textAlign: 'center'}}><i className="fa fa-flag-o" aria-hidden="true"></i> Report this listing</p>
                                <div className="div-Guest" hidden={this.state.showGuests}>
                                    <div className="row">
                                        <div className="col-md-6 title-choose">
                                            <span>Adults</span>
                                        </div>
                                        <div className="col-md-6 group-button-config">
                                            <button className="button-config" onClick={this.handleMinus}>-</button>
                                            <label type="text" />{this.state.countPlus}
                                            <button className="button-config" onClick={this.handlePlus}>+</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 title-choose">
                                            <span>Children</span>
                                        </div>
                                        <div className="col-md-6 group-button-config">
                                            <button className="button-config" onClick={this.handleMinus}>-</button>
                                            <label type="text" />{this.state.countPlus}
                                            <button className="button-config" onClick={this.handlePlus}>+</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 title-choose">
                                            <span>Infants</span>
                                        </div>
                                        <div className="col-md-6 group-button-config">
                                            <button className="button-config" onClick={this.handleMinus}>-</button>
                                            <label type="text" />{this.state.countPlus}
                                            <button className="button-config" onClick={this.handlePlus}>+</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailHouseComponent    