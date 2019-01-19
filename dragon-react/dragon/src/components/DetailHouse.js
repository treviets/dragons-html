import React, { Component } from 'react'
import '../assets/css/privateHomeInHouse.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../assets/js/plus'
import '../assets/js/index'
import homeService from '../services/home.js'
import bookingService from '../services/booking.js'
import * as Constants from '../const.js'
import moment from 'moment'
import UpdatePhone from './UpdatePhone';

class DetailHouseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectGuest: 1,
            startDate: new Date(),
            endDate: new Date(),
            countPlus: 1,
            showGuests: true,
            roomData: {},
            numberReviews: 0,
            toAddPhone: false,
            amenities:[],
            lengthAmenitiesChoose:0,
            amenityBasic:[],
            amenityFamilyFeatures:[],
            amenityFacilities:[],
            amenityDining:[],
            amenityGuestAccess:[],
            amenityLogistics:[],
            amenityBedAndBath:[],
            amenityOutDoor:[],
            amenityLocation:[],
            amenitySafetyFeatures:[],
            amenityNotIncluded:[],


        };
        this.handeChageGuest = this.handeChageGuest.bind(this);
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleChooseGuests = this.handleChooseGuests.bind(this);
        this.handeBooking = this.handeBooking.bind(this);
        this.loadData = this.loadData.bind(this);
        this.renderAmenities = this.renderAmenities.bind(this);
        this.renderDetailAmenties = this.renderDetailAmenties.bind(this);

    }
    componentDidMount() {
        this.loadData()
    }
    async loadData() {
        const res = await homeService.getDetailRoom(this.props.room.Id)
        var countNothing = 0
        for(var i =0; i<res.Data.Amenities.length;i++){
            if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Not included'.toUpperCase()){
                countNothing++;
                this.state.amenityNotIncluded.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Basic'.toUpperCase()){
                this.state.amenityBasic.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Facilities'.toUpperCase()){
                this.state.amenityFacilities.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Dining'.toUpperCase()){
                this.state.amenityDining.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Guest access'.toUpperCase()){
                this.state.amenityGuestAccess.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Logistics'.toUpperCase()){
                this.state.amenityLogistics.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Bed and bath'.toUpperCase()){
                this.state.amenityBedAndBath.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Outdoor'.toUpperCase()){
                this.state.amenityOutDoor.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Location'.toUpperCase()){
                this.state.amenityLocation.push(res.Data.Amenities[i])
            }else if(res.Data.Amenities[i].amenityCategory.Name.toUpperCase()=='Safety features'.toUpperCase()){
                this.state.amenitySafetyFeatures.push(res.Data.Amenities[i])
            }else{
                this.state.amenityFamilyFeatures.push(res.Data.Amenities[i])
            }
        }
        var lengthamenitiesChoose = res.Data.Amenities.length - countNothing
        this.setState({lengthAmenitiesChoose:lengthamenitiesChoose, roomData: res.Data, numberReviews: res.Data.Reviews.length, amenities: res.Data.Amenities})

    }

    async handeBooking() {
        // this.setState({
        //     toAddPhone: true
        // })

        var from = moment(this.state.startDate).format("YYYY-MM-DD HH:mm:ss")
        var to = moment(this.state.endDate).format("YYYY-MM-DD HH:mm:ss")
        var diffInDates = moment(this.state.endDate).diff(moment(this.state.startDate), 'days') + 1;
        var bookingJson = {
            CustomerId: 1,
            FromDate: from,
            HomeId: this.props.homeId,
            NumberOfGuess: this.state.selectGuest,
            NumberOfNights: diffInDates,
            Price: this.props.room.Price,
            RoomId: this.state.roomData.RoomId,
            ToDate: to,
            TotalAmount: this.props.room.Price * diffInDates
        }
        var myJSON = JSON.stringify(bookingJson);
        const res = await bookingService.bookingCreate(myJSON)
        this.setState({toAddPhone:true})

        }
    renderDetailAmenties(amenity, index,object){
        var cate = amenity.amenityCategory
        if(cate.Name.toUpperCase()=='Not included'.toUpperCase()){
            return <div key={index}>
                <del className="fontSize16" aria-hidden="true">{amenity.Name}</del>                
                <br/>

            </div>
        } else if (index == (object.length-1)){
            return <div key={index}>
                <span className="fontSize16">{amenity.Name}</span>
                <br/>
                <span className="fontSize14">{amenity.Description}</span>
            </div>
        }
       
        return <div key={index}>
                <span className="fontSize16">{amenity.Name}</span>
                <br/>
                <span className="fontSize14">{amenity.Description}</span>
                <hr/>

            </div>

    }
    renderAmenities(amenity, index){
        console.log(amenity)
        if (amenity.Name.toUpperCase() == 'Elevator'.toUpperCase()){
            return <div className="col-md-6 margingBot5" key={index}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '19px', width: '19px', fill: 'currentcolor'}}><path d="M22.5 23H21V1h1.5a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1H2v22H.5a.5.5 0 1 0 0 1h22a.5.5 0 0 0 0-1zM11 3v20H3V1h8v2zm9 20h-8V1h8v22zM4.146 10.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L7 9.707V14.5a.5.5 0 0 1-1 0V9.707l-1.146 1.147a.5.5 0 0 1-.708 0zm10 2a.5.5 0 1 1 .708-.708L16 13.293V8.5a.5.5 0 1 1 1 0v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2z" fillRule="evenodd"></path></svg>
                        {amenity.Name}
                    </div>
        } else if (amenity.Name.toUpperCase() == 'Kitchen'.toUpperCase()){
            return <div className="col-md-6 margingBot5" key={index}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '19px', width: '19px', fill: 'currentcolor'}}><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd"></path></svg>
                        {amenity.Name}
                    </div>
        } else if (amenity.Name.toUpperCase() == 'Gym'.toUpperCase()){
            return <div className="col-md-6 margingBot5" key={index}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '19px', width: '19px', fill: 'currentcolor'}}><path d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z" fillRule="evenodd"></path></svg>
                        {amenity.Name}
                    </div>
        } else if (amenity.Name.toUpperCase() == 'Pool'.toUpperCase()){
            return <div className="col-md-6 margingBot5" key={index}>
                        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{height: '19px', width: '19px', fill: 'currentcolor'}}><path d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z" fillRule="evenodd"></path></svg>
                        {amenity.Name}
                    </div>
        }
        
    }

    handeChageGuest(event) {
        this.setState({
            selectGuest: event.target.value,
        });
    }
    handleChangeFromTime(date) {
        this.setState({
            startDate: date,
        });
    }
    handleChangeToTime(date) {
        this.setState({
            endDate: date,
        });
    }
    handlePlus() {
        const check = this.state.countPlus;
        this.setState({
            countPlus: check + 1
        })
    }
    formatTime(time) {
        return moment(time).format('LL');   // January 12, 2019

    }
    handleMinus() {
        const minus = this.state.countPlus;
        this.setState({
            countPlus: minus - 1
        })
    }
    handleChooseGuests() {
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
        if (this.state.toAddPhone === true) {
            return <UpdatePhone to='/update/phone' />
        }else{

        return (
            <div>
                <div className="container">
                    <div className="privateRom">
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <p style={{ color: '#39576a' }}><b>{this.props.roomType}</b></p>
                                <div className="optionTitle">
                                    <p className="title">{this.state.roomData.Title}</p>
                                    <img className="avatar" src="../img/icondragon.jpg" alt="" />
                                    <span className="font-size18">
                                        <i className="fa fa-users paddingLeft5" aria-hidden="true"></i> {this.props.room.NumberOfGuest} guests
                                    <i className="fa fa-bell paddingLeft5" aria-hidden="true"></i> {this.state.roomData.Bedroom} bedrooms
                                    <i className="fa fa-bed paddingLeft5" aria-hidden="true" ></i> {this.state.roomData.Bed} beds
                                    <i className="fa fa-bath paddingLeft5" aria-hidden="true"></i> {this.state.roomData.Bath} share bath
                                </span>
                                </div>
                                <br />
                                <hr />
                                <div className="description font-size18">
                                    <p dangerouslySetInnerHTML={{ __html: this.state.roomData.Description }} />

                                    <a href="#show" className="readmore" id="show">Read more about the space</a>
                                    <svg className="readmore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)' }}>
                                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                    </svg>

                                    <div className="space-detail">
                                        <p className="space">The Space</p>
                                        <p dangerouslySetInnerHTML={{ __html: this.state.roomData.TheSpace }} />
                                        <p className="space">Guest access</p>
                                        <p dangerouslySetInnerHTML={{ __html: this.state.roomData.GuestAccess }} />
                                        <p className="space">Interaction with guests</p>
                                        <p dangerouslySetInnerHTML={{ __html: this.state.roomData.InteractionWithGuests }} />
                                        <p className="space">Other things to note</p>
                                        <p dangerouslySetInnerHTML={{ __html: this.state.roomData.OtherThings }} />
                                    </div>

                                    <a href="#hide" className="hidemore" id="hide">Hide</a>
                                    <svg className="hidemore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform: 'rotate(180deg)' }}>
                                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                    </svg>



                                </div>
                                <br />
                                <br />
                                <br />
                                <hr />
                                <p className="space font-size18">Amenities</p>
                                    <div className="col-md-12">
                                        <div className="row">
                                            {this.state.amenities.map(this.renderAmenities)}
                                            
                                        </div>
                                        <p className="readmore cursorPointer" data-toggle="modal" data-target="#amenities-modal">Show all {this.state.lengthAmenitiesChoose} amenities</p>

                                    </div>
                                    <div style={{zIndex:10000}} className="modal fade" id="amenities-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                    <button type="button" className="close col-md-2" data-dismiss="modal" aria-hidden="true">×</button>
                                                <div className="modal-body login-modal">
                                                    <div id='social-icons-conatainer'>
                                                        <p className="font-size24 space">Amenities</p>
                                                        <p className="font-size18 space">Basic</p>
                                                        {this.state.amenityBasic.map(this.renderDetailAmenties)}  
                                                        <br/>
                                                        <p className="font-size18 space">Family features</p>
                                                        {this.state.amenityFamilyFeatures.map(this.renderDetailAmenties)}  
                                                        <br/>
                                                        <p className="font-size18 space">Facilities</p>
                                                        {this.state.amenityFacilities.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Dining</p>
                                                        {this.state.amenityDining.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Guest access</p>
                                                        {this.state.amenityGuestAccess.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Logistics</p>
                                                        {this.state.amenityLogistics.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Bed and bath</p>
                                                        {this.state.amenityBedAndBath.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Outdoor</p>
                                                        {this.state.amenityOutDoor.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Location</p>
                                                        {this.state.amenityLocation.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Safety features</p>
                                                        {this.state.amenitySafetyFeatures.map(this.renderDetailAmenties)}  
                                                        <br/>

                                                        <p className="font-size18 space">Not included</p>
                                                        {this.state.amenityNotIncluded.map(this.renderDetailAmenties)}                             
                                                    </div>
                                                </div>																												
                                            </div>
                                        </div>
                                    </div>
                                <hr />

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
                                        <hr />
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p>Check In</p>
                                                    <DatePicker className="font-size14"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChangeFromTime}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Check outs</p>
                                                    <DatePicker className="font-size14"
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
                                            <br />
                                            <button className="form-control btnRequest" onClick={this.handeBooking}>Book</button>
                                            <p style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>You won't be charged yet</p>
                                        </div>
                                        <hr />
                                        <div className="footer-request">
                                            <p>This home is on people's minds.</p>
                                            <p> It's been viewed 500+ times in the past week</p>
                                            <i className="fa fa-lightbulb-o logo-created" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <br />
                                    <p style={{ textAlign: 'center' }}><i className="fa fa-flag-o" aria-hidden="true"></i> Report this listing</p>
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

            </div>
        )
    }
}
}

export default DetailHouseComponent    