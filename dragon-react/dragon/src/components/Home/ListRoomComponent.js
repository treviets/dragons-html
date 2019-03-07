import React, { Component } from 'react'
import '../../assets/css/slide.css'
import '../../assets/css/style.css'
import '../../assets/js/index'
import $ from "jquery";
import homeService from '../../services/home.js'
import * as Constants from '../../const.js'
import DetailHouse from '../DetailHouse'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import district from '../../masterData/district.json'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { Route, Redirect,Switch } from 'react-router'
const Range = Slider.Range;

class ListRoomComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectGuest: "",
            startDate: null,
            endDate: null,
            countPlus: 1,
            is_listHome: true,
            listHome: [],
            listRoom: [],
            is_RoomNull:false,
            listDestinate: [{ Id: 1, Name: "aa" }, { Id: 2, Name: "bb" }, { Id: 3, Name: "cc" }],
            nameHome: "",
            is_Detail: false,
            room: {},
            roomType: '',
            imgsRoom: [],
            homeId: 0,
            district,
            min: 200000,
            max: 10000000,
            minPrice: 500000,
            maxPrice: 5000000,
            amount: "₫500000  - ₫5000000+",
            roomType: 0,
            selectDistrict: "",
            valueDistrict: "",
            adultsGuest: 0,
            childrensGuest: 0,
            infantsGuest: 0,
            totalGuest: 0,
            popoverOpen: false,
            valueGuest: "",
            numberOfMonths: 1,
            focusedInput: null,
            detail:null

        };
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this)
        this.handleChangeToTime = this.handleChangeToTime.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.GetDetailHome = this.GetDetailHome.bind(this)
        this.handleGetDetail = this.handleGetDetail.bind(this)
        this.renderListHomes = this.renderListHomes.bind(this)
        this.renderListRooms = this.renderListRooms.bind(this)
        this.renderImgsRoom = this.renderImgsRoom.bind(this)
        this.renderLiTarget = this.renderLiTarget.bind(this)
        this.handleBackHome = this.handleBackHome.bind(this)
        this.handleGetDetailRoom = this.handleGetDetailRoom.bind(this)
        this.handleBackRoom = this.handleBackRoom.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handeChage = this.handeChage.bind(this)
        this.handeChangeDistrict = this.handeChangeDistrict.bind(this)
        this.toggle = this.toggle.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this)
        this.fillter = this.fillter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleHomeType = this.handleHomeType.bind(this);
        this.renderListDestinate = this.renderListDestinate.bind(this)
        this.handleSetDestinate = this.handleSetDestinate.bind(this)
    }
    renderListDestinate(home, index) {
        var onClick = this.handleSetDestinate.bind(this, home.Id, home.Name);
        var clss = "search-destinate"
        return <li ref={"destiante-" + home.Id} id={"destiante-" + home.Id} className={this.state.selectDistrict == home.Id ? "search-destinate active-search-destinate" : "search-destinate"} key={index} onClick={onClick}>
            <span style={{ marginLeft: '10px', marginRight: '10px' }}>{home.Name}</span>
        </li>
    }
    handleSetDestinate(id, name) {

        this.setState({ selectDistrict: id, valueDistrict: name })
        this.refs.overlayDestinate.hide();
    }
    handleHomeType(type) {
        this.setState({ roomType: type })
        this.handleFilter(type)
    }
    fillter() {
        this.handleFilter(this.state.roomType)
    }
    async handleFilter(type) {
        var from = moment(this.state.startDate, "DD/MM/YYYY")
            .startOf("day")
            .unix();
        var to =
            moment(this.state.endDate, "DD/MM/YYYY")
                .startOf("day")
                .unix() + 86340;
        const res = await homeService.searchRoom(this.state.selectDistrict, from, to, this.state.totalGuest, this.state.minPrice, this.state.maxPrice, type)
        console.log(res)
        console.log("log-thoai")
        console.log(res)
        this.setState({ listRoom: res.Data })
        this.setState({ is_listHome: false })

    }
    onSliderChange(value) {
        this.setState({ amount: "₫" + value[0] + " - ₫" + value[1] + "+", minPrice: value[0], maxPrice: value[1] })
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    async handleSearch() {
        var from = null
        if (this.state.startDate != null) {
            from = moment(this.state.startDate, "DD/MM/YYYY")
                .startOf("day")
                .unix();
        } else {
            from = 0
        }
        var to = null
        if (this.state.endDate != null) {
            to =
                moment(this.state.endDate, "DD/MM/YYYY")
                    .startOf("day")
                    .unix() + 86340;
        } else {
            to = 0
        }
        const res = await homeService.searchRoom(this.state.selectDistrict, from, to, this.state.totalGuest, null, null, 0)
        if (res.Data == null) {
            res.Data = []
            this.setState({is_RoomNull:true})
        }
        this.setState({ listRoom: res.Data })
        this.setState({ is_listHome: false })

    }
    handeChangeDistrict(event) {
        this.setState({ selectDistrict: event.target.value })
    }
    handeChage(event) {
        this.setState({
            selectGuest: event.target.value,
        });
    };
    handleBackRoom() {
        // $(".footer").hide()
        // $(".footer").show()
        this.setState({ is_Detail: false })
    }
    handleGetDetailRoom(room, roomType, imgs) {
        var object = {homeId:room.HomeId,room:JSON.stringify(room),roomType:roomType,imgsRoom:JSON.stringify(imgs)}

        this.setState({detail:object, homeId: room.HomeId, is_Detail: true, room: room, roomType: roomType, imgsRoom: imgs })
    }
    handleBackHome() {
        this.setState({ is_listHome: true })
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
    renderListHomes(home, index) {
        var onClick = this.handleGetDetail.bind(this, home.Id, home.Name);
        return <div className="col-md-4 col-sm-6 margin-bottom-md" key={index}>
            <div className="homes" onClick={onClick}>

                <img className="home-image" src={Constants.apiImg + home.Images[0].Image} />
                <div className="home-description"  >
                    <div className="font-size16">{home.Name}</div>
                    <div className="font-size14">{home.NumberOfRooms} homes</div>
                </div>

            </div>
        </div>;
    }
    typeRoom(type_id) {
        switch (type_id) {
            case 1:
                return "ENTIRE APARTMENT";

            case 2:
                return "ENTIRE HOUSE";

            case 3:
                return "PRIVATE ROOM";

            case 4:
                return "SHARE ROOM";

        }
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
    renderListRooms(room, index) {
        
        var typeroom = this.typeRoom(room.RoomType)
        var imgs = room.Images
        var onClick = this.handleGetDetailRoom.bind(this, room, typeroom, imgs);
        var indexTarget = []
        for (var i = 0; i < imgs.length; i++) {
            indexTarget.push('#de' + i)
        }
        return <div className="col-md-6 col-lg-4 bottom-group" key={index} >
            <div className="listrooms" id="listrooms">
                <div id={'de' + index} className="carousel slide" data-ride="carousel" data-interval="false">

                    <ul className="carousel-indicators">
                        {indexTarget.map(this.renderLiTarget)}
                    </ul>


                    <div className="carousel-inner" onClick={onClick}>
                        {imgs.map(this.renderImgsRoom)}
                    </div>


                    <a className="carousel-control-prev" href={'#de' + index} data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href={'#de' + index} data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="_v72lrv" onClick={onClick}>
                    <span className="_1ol0z3h">
                        <div className="_wuffzwa" style={{ color: 'rgb(98, 86, 75)' }}>
                            <div className="_1etkxf1" style={{ color: 'rgb(98, 86, 75)' }}>
                                <span className="_1bb2ucx1">
                                    <span style={{ color: 'rgb(98, 86, 75)' }}>{typeroom}
                                        <span aria-hidden="true"> · </span>{room.Bed} BEDS
                                </span>
                                </span>
                            </div>
                        </div>
                        <div style={{ marginTop: '4px' }}>
                            <div className="_1pkilk3o">
                                <div className="_ng4pvpo">{room.Code} </div>
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
                                                            <span>₫{this.currencyFormat(room.Price)}</span>
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
        </div>;
    }
    handleGetDetail(id, name) {
        this.setState({ nameHome: name })
        this.GetDetailHome(id)

    }
    async GetDetailHome(id) {
        this.setState({ is_listHome: false })
        const res = await homeService.getDetailHome(id)
        this.setState({ listRoom: res.Data })
        console.log(this.state.listRoom)
    }

    componentWillMount() {
        // $(".footer").hide()
        var listRooms = JSON.parse(localStorage.getItem("rooms"))
     
        var isRoomNull = localStorage.getItem("isRoomNull") == 'true'
        var name = localStorage.getItem("nameHome")

        this.setState({listRoom:listRooms, is_RoomNull: isRoomNull, nameHome:name})
    }

    componentDidMount() {
        // $(".footer").hide()
        $(".footer").show()



    }
    async handlegetListHomes() {
        const res = await homeService.getListHomes()
        console.log(res)
        this.setState({ listHome: res.Data })
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
        if(this.state.is_Detail){
            return (<Redirect  push to={{
                pathname: "/detail/house",
                search: "?"+JSON.stringify(this.state.detail),
                target:"_blank"
                
              }}/>

             )
        }else {
        return (           

                    <div className="container main-slider no-padding-lr-mobile">
                            <div className="listRoom">
                                <div className="_1avdemu">
                                    <div className="_76dwae">
                                        <h3 className="_jmmm34f">
                                            <span onClick={this.handleBackHome} className="backList">All Lists </span>

                                            <div>
                                                <div>{this.state.nameHome}</div>
                                            </div>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    
                                        {!this.state.is_RoomNull
                                        ?
                                        <div className="row">
                                            {this.state.listRoom.map(this.renderListRooms)}
                                        </div>
                                        :
                                        <span >Không tìm được phòng trống </span>

                                        }

                                    </div>
                                
                            </div>
                    </div>
        )
    }
    }
}

export default ListRoomComponent                