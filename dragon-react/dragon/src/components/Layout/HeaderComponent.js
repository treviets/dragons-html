import React, { Component } from 'react';
import '../../assets/css/slide.css';
import '../../assets/css/style.css';
import '../../assets/js/index';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { DateRangePicker } from 'react-dates';
import homeService from '../../services/home.js';
import $ from "jquery";
import moment from 'moment';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';
import { handleSearchRooms } from '../../actions/homeAction';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            homes: [],
            rooms: [],
            selectedHomeId: "",
            startDate: null,
            endDate: null,
            valueDistrict: "",
            adultsGuest: 1,
            childrensGuest: 0,
            infantsGuest: 0,
            totalGuest: 1,
            popoverOpen: false,
            valueGuest: "",
            numberOfMonths: 1,
            focusedInput: null,
            roomPage: false

        };
        this.renderListDestinate = this.renderListDestinate.bind(this);
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleSetDestinate = this.handleSetDestinate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderListDestinate(home, index) {
        var onClick = this.handleSetDestinate.bind(this, home.Id, home.Name);
        return (
            <li ref={"destiante-" + home.Id} id={"destiante-" + home.Id} className={this.state.selectedHomeId == home.Id ? "search-destinate active-search-destinate" : "search-destinate"} key={index} onClick={onClick}>
                <span>
                    <i className="fa fa-compass icon-search cursorPointer" aria-hidden="true"></i>
                </span>
                <span style={{ marginLeft: '10px', marginRight: '10px' }}>{home.Name}</span>
            </li>
        )
    }
    
    handleSetDestinate(id, name) {
        this.setState({ selectedHomeId: id, valueDistrict: name })
        this.refs.overlayDestinate.hide();
    }

    componentDidMount() {
        $(".footer").show();
        this.getAllHome();
    }

    async getAllHome() {
        const res = await homeService.getListHomes()
        this.setState({ homes: res.Data })
    }

    handleChangeFromTime(date) {
        this.setState({ startDate: date });
    }
    
    handleChangeToTime(date) {
        this.setState({ endDate: date });
    }

    handleSearch() {
        var from = 0
        if (this.state.startDate != null) {
            from = moment(this.state.startDate, "DD/MM/YYYY").startOf("day").unix();
        }

        var to = 0
        if (this.state.endDate != null) {
            to = moment(this.state.endDate, "DD/MM/YYYY").startOf("day").unix() + 86340;
        }
        
        this.props.handleSearchRooms(this.state.selectedHomeId, from, to, this.state.totalGuest, null, null, 0);
    }

    async handleSearch123() {
        var from = 0
        if (this.state.startDate != null) {
            from = moment(this.state.startDate, "DD/MM/YYYY").startOf("day").unix();
        }

        var to = 0
        if (this.state.endDate != null) {
            to = moment(this.state.endDate, "DD/MM/YYYY").startOf("day").unix() + 86340;
        }

        const res = await homeService.searchRoom(this.state.selectedHomeId, from, to, this.state.totalGuest, null, null, 0)
        if (res) {
            this.setState({ roomPage: true, rooms: res.Data})
        }
    }

    handlePlus(type) {
        if (type == 1) {
            if (this.state.adultsGuest < 12) {
                this.state.adultsGuest = this.state.adultsGuest + 1
                this.state.totalGuest = this.state.totalGuest + 1
            }
        } else if (type == 2) {
            if (this.state.childrensGuest < 5) {
                this.state.childrensGuest = this.state.childrensGuest + 1
                this.state.totalGuest = this.state.totalGuest + 1
                if (this.state.childrensGuest == 1 && this.state.adultsGuest == 0) {
                    this.state.adultsGuest = this.state.adultsGuest + 1
                    this.state.totalGuest = this.state.totalGuest + 1
                }
            }
        } else if (type == 3) {
            if (this.state.infantsGuest < 5) {
                this.state.infantsGuest = this.state.infantsGuest + 1
                if (this.state.infantsGuest == 1 && this.state.adultsGuest == 0) {
                    this.state.adultsGuest = this.state.adultsGuest + 1
                    this.state.totalGuest = this.state.totalGuest + 1
                }
            }
        }
        var guests = ""
        if (this.state.totalGuest == 0 || this.state.totalGuest == 1) {
            guests = this.state.totalGuest + " Guest"
        } else {
            guests = this.state.totalGuest + " Guests"
        }
        if (this.state.infantsGuest > 0) {
            var infants = " Infants"
            if (this.state.infantsGuest == 1) {
                infants = " Infant"
            }
            guests = this.state.totalGuest + " Guests, " + this.state.infantsGuest + infants
        }

        this.setState({ valueGuest: guests })
    }

    handleMinus(type) {
        if (type == 1) {
            if (this.state.adultsGuest > 1) {
                this.state.adultsGuest = this.state.adultsGuest - 1
                this.state.totalGuest = this.state.totalGuest - 1
            }
        } else if (type == 2) {
            if (this.state.childrensGuest > 0) {
                this.state.childrensGuest = this.state.childrensGuest - 1
                this.state.totalGuest = this.state.totalGuest - 1
            }
        } else if (type == 3) {
            if (this.state.infantsGuest > 0) {
                this.state.infantsGuest = this.state.infantsGuest - 1
            }
        }
        var guests = ""
        if (this.state.totalGuest == 0 || this.state.totalGuest == 1) {
            guests = this.state.totalGuest + " Guest"
        } else {
            guests = this.state.totalGuest + " Guests"
        }
        if (this.state.infantsGuest > 0) {
            var infants = " Infants"
            if (this.state.infantsGuest == 1) {
                infants = " Infant"
            }
            guests = this.state.totalGuest + " Guests, " + this.state.infantsGuest + infants
        }

        this.setState({ valueGuest: guests })

    }

    render() {
        // if (this.state.roomPage){
        //     return <Redirect to="/rooms" />
        // }
        return (
            <div id="header-search" className="banner menu-header font-size14" >
                <img src="img/banner-travel-insurance-2000x400.jpg" className="banner-menu" ></img>
                <div className="card-search">
                    <div className="search-home">
                        <div className="col-md-12 col-sm-12 col-init" >
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-init col-search cursorPointer">
                                    <span className="cursorPointer" style={{ display: 'block', position: 'relative', margin: '5px' }} >
                                        <i className="fa fa-map-marker icon-search cursorPointer" aria-hidden="true"></i>
                                        <OverlayTrigger ref="overlayDestinate" rootClose={true} trigger="click" placement="bottom" 
                                        overlay={<Popover id="popover-search-destination">
                                            <div className="font-my" role="tooltip">
                                                <ul>
                                                    {this.state.homes.map(this.renderListDestinate)}
                                                </ul>
                                            </div>
                                        </Popover>}>
                                            <input id="PopoverLegacyDestination" readOnly className="border-none input-search cursorPointer select-search" 
                                            role="button" placeholder="Enter a destination or property" value={this.state.valueDistrict} readOnly={true} />
                                        </OverlayTrigger>
                                    </span>
                                </div>
                                <div className="col-md-4 col-sm-4 col-init col-search cursorPointer" >
                                    <span className="cursorPointer search-date" style={{ display: 'block', position: 'relative', margin: '5px' }}>

                                        <DateRangePicker
                                            startDate={this.state.startDate}
                                            startDateId="DateInput__screen-reader-message-start" 
                                            endDate={this.state.endDate} 
                                            endDateId="DateInput__screen-reader-message-end" 
                                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                                            focusedInput={this.state.focusedInput}
                                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                                            readOnly={true}
                                            orientation={window.matchMedia("(max-width: 374px)").matches ? "vertical" : "horizontal"}
                                            numberOfMonths={this.state.numberOfMonths}
                                            startDatePlaceholderText="Start date"
                                            endDatePlaceholderText="End date"
                                        />
                                        <i className="fa fa-calendar icon-search cursorPointer" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="col-md-2 col-sm-2 col-init col-search cursorPointer" >
                                    <span id="search-guests" className="cursorPointer" style={{ display: 'block', position: 'relative', margin: '5px' }}>

                                        <OverlayTrigger rootClose={true} trigger="click" placement="bottom" overlay={<Popover
                                            id="popover-search-guests"
                                        >
                                            <div className="font-my" role="tooltip">
                                                <div className="col-md-12 col-12 font-size16" >
                                                    <div className="row">
                                                        <div className="col-md-5 col-5">
                                                            <p>Adults</p>
                                                            <p></p>
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no" >
                                                            <button onClick={(e) => this.handleMinus(1, e)} className="btn btn-guest" type="button" aria-busy="false">
                                                                <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}>
                                                                    <rect height="2" rx="1" width="12" x="0" y="11"></rect>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-3">
                                                            {this.state.adultsGuest}
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no">
                                                            <button onClick={(e) => this.handlePlus(1, e)} className="btn btn-guest" type="button" aria-busy="false">
                                                                <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}>
                                                                    <rect height="2" rx="1" width="12" x="0" y="11"></rect>
                                                                    <rect height="12" rx="1" width="2" x="5" y="6"></rect>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="col-md-12 col-12 font-size16">
                                                    <div className="row">
                                                        <div className="col-md-5 col-5">
                                                            <label>Children</label>
                                                            <p className="font-size14">Ages 2-12</p>
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no">
                                                            <button onClick={(e) => this.handleMinus(2, e)} className="btn btn-guest" type="button" aria-busy="false">
                                                                <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}>
                                                                    <rect height="2" rx="1" width="12" x="0" y="11"></rect>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-3">
                                                            {this.state.childrensGuest}
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no">
                                                            <button onClick={(e) => this.handlePlus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-12 font-size16">
                                                    <div className="row">
                                                        <div className="col-md-5 col-5">
                                                            <label>Infants</label>
                                                            <p className="font-size14">Under 2</p>
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no">
                                                            <button onClick={(e) => this.handleMinus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                        </div>
                                                        <div className="col-md-3 col-3">
                                                            {this.state.infantsGuest}
                                                        </div>
                                                        <div className="col-md-2 col-2 col-init-no">
                                                            <button onClick={(e) => this.handlePlus(3, e)} className="btn btn-guest" type="button" aria-busy="false">
                                                                <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}>
                                                                    <rect height="2" rx="1" width="12" x="0" y="11"></rect>
                                                                    <rect height="12" rx="1" width="2" x="5" y="6"></rect>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover>}>
                                            <input id="PopoverLegacy" readOnly className="border-none input-search cursorPointer" role="button" 
                                            placeholder="Number of Guests" value={this.state.valueGuest} 
                                            onChange={({ value }) => this.setState({ valueGuest: value })} readOnly={true} />

                                        </OverlayTrigger>

                                        <i className="fa fa-angle-down icon-search cursorPointer" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="col-md-2 col-sm-2 col-init col-search" style={{ background: '#c19d64' }}>
                                    <button className="button-search cursorPointer" style={{ margin: '5px' }} 
                                        onClick={this.handleSearch} >Search</button>
                                      
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

    return { 
        homes: state.homeReducer.homes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchRooms: (homeId, from, to, number_of_guest, min, max, roomType) => dispatch(handleSearchRooms(homeId, from, to, number_of_guest, min, max, roomType))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);