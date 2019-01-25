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
import { Button, UncontrolledPopover,  PopoverHeader, PopoverBody } from 'reactstrap';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
const Range = Slider.Range;

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectGuest:"",
            startDate: new Date(),
            endDate: new Date(),
            countPlus : 1,
            is_listHome:true,
            listHome:[],
            listRoom:[],
            nameHome:"",
            is_Detail:false,
            room:{},
            roomType:'',
            imgsRoom:[],
            homeId:0,
            district,
            min:200000,
            max:10000000,
            minPrice:500000,
            maxPrice:5000000,
            amount:"₫500000  - ₫5000000+",
            roomType: 0,
            selectDistrict:0,
            adultsGuest:0,
            childrensGuest:0,
            infantsGuest:0,
            totalGuest:0,
            popoverOpen: false,
            valueGuest:'Number of Guests'
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
        this.onSliderChange= this.onSliderChange.bind(this)
        this.fillter =  this.fillter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleHomeType = this.handleHomeType.bind(this);    
    }
    handleHomeType(type){
        this.setState({roomType:type})
        this.handleFilter(type)
    }
    fillter(){
        this.handleFilter(this.state.roomType)
    }
    async handleFilter(type){
        var from = moment(this.state.startDate, "DD/MM/YYYY")
        .startOf("day")
        .unix();
        var to =
        moment(this.state.endDate, "DD/MM/YYYY")
          .startOf("day")
          .unix() + 86340;
        const res = await homeService.searchRoom(this.state.selectDistrict,from,to,this.state.totalGuest,this.state.minPrice,this.state.maxPrice, type)
        console.log(res)
        this.setState({listRoom: res.Data})
        this.setState({is_listHome:false})

    }
    onSliderChange(value) {
        this.setState({ amount:"₫" + value[0] + " - ₫" + value[1] +"+",minPrice:value[0],maxPrice:value[1]})
      }
    toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
    async handleSearch(){
        var from = moment(this.state.startDate, "DD/MM/YYYY")
        .startOf("day")
        .unix();
        var to =
        moment(this.state.endDate, "DD/MM/YYYY")
          .startOf("day")
          .unix() + 86340;
        const res = await homeService.searchRoom(this.state.selectDistrict,from,to,this.state.totalGuest,null,null,0)
        console.log(res)
        this.setState({listRoom: res.Data})
        this.setState({is_listHome:false})

    }
    handeChangeDistrict(event){
        this.setState({selectDistrict: event.target.value})
    }
    handeChage(event){
        this.setState({
            selectGuest: event.target.value,
        });
    };
    handleBackRoom(){
        $(".footer").hide()
        this.setState({is_Detail:false})
    }
    handleGetDetailRoom(room,roomType, imgs){
        this.setState({homeId:room.HomeId,is_Detail:true, room:room,roomType:roomType, imgsRoom: imgs})
    }
    handleBackHome(){
        this.setState({is_listHome:true})
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
    renderListHomes(home,index){
        var onClick = this.handleGetDetail.bind(this, home.Id,home.Name);
        return  <div className="col-md-4 col-sm-6 margin-bottom-md" key={index}>
            <div className="homes" onClick={onClick}>
                
                <img className="home-image" src={Constants.apiImg+home.Images[0].Image}/>
                <div className="home-description"  >
                    <div className="font-size18">{home.Name}</div>
                    <div className="font-size16">{home.NumberOfRooms} homes</div>
                </div>

            </div>
        </div> ;
    }
    typeRoom(type_id){
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
    renderImgsRoom(img, index){
        var clss = "carousel-item"
        if(index ==0 ){
            clss +=" active"
        }
        return  <div className={clss} key={index}>
                <img src={Constants.apiImg+img.Image} alt="Los Angeles" width="1100" height="500"/>
            </div> ;
    }
    renderLiTarget(value, index){
        var clss = ""
        if(index ==0 ){
            clss +="active"
        }
    return   <li data-target={value} data-slide-to={index} className={clss} key={index}></li>

    }
    renderListRooms(room,index){
        var typeroom = this.typeRoom(room.RoomType)
        var imgs = room.Images
        var onClick = this.handleGetDetailRoom.bind(this, room, typeroom, imgs);

        
        var indexTarget = []
        for(var i = 0 ; i<imgs.length; i++){
            indexTarget.push('#de'+i)
        }
        return <div className="col-md-6 col-lg-4 bottom-group" key={index} >
        <div className="listrooms"  id="listrooms">
            <div id={'de'+index} className="carousel slide" data-ride="carousel"  data-interval="false">
            
                <ul className="carousel-indicators">
                    {indexTarget.map(this.renderLiTarget)}
                </ul>
                
            
                <div className="carousel-inner" onClick={onClick}>
                    {imgs.map(this.renderImgsRoom)}
                </div>
                
        
                <a className="carousel-control-prev" href={'#de'+index} data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href={'#de'+index} data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div> 
            <div className="_v72lrv" onClick={onClick}>
                <span className="_1ol0z3h">
                    <div className="_wuffzwa" style={{color: 'rgb(98, 86, 75)'}}>
                        <div className="_1etkxf1" style={{color: 'rgb(98, 86, 75)'}}>
                            <span className="_1bb2ucx1">
                                <span style={{color: 'rgb(98, 86, 75)'}}>{typeroom}
                                    <span aria-hidden="true"> · </span>{room.Bed} BEDS
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{marginTop: '4px'}}>
                        <div className="_1pkilk3o">
                            <div className="_ng4pvpo">{room.Code} </div>
                        </div>
                    </div>
                    <div style={{marginTop: '2px'}}>
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
                    <div style={{marginTop: '2px'}}>
                        <div className="_hdbaj7">
                            <div className="_36rlri">
                                <span className="_q27mtmr">
                                    <span role="img" aria-label="Rating 5 out of 5">
                                        <span className="_z1pr8k6">
                                            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                            </svg>
                                        </span>
                                        <span className="_z1pr8k6">
                                            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                            </svg>
                                        </span>
                                        <span className="_z1pr8k6">
                                            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                            </svg>
                                        </span>
                                        <span className="_z1pr8k6">
                                            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                                <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
                                            </svg>
                                        </span>
                                        <span className="_z1pr8k6">
                                            <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
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
    handleGetDetail(id,name){
        this.GetDetailHome(id)
        this.setState({nameHome:name})

    }
    async GetDetailHome(id){
        this.setState({is_listHome:false})
        const res = await homeService.getDetailHome(id)
        this.setState({listRoom: res.Data})
        console.log(this.state.listRoom)
    }
  
    
   
    componentDidMount(){
        $(".footer").hide()

        this.state.district =  district
        console.log(this.state.district)
        this.handlegetListHomes()
        window.onpopstate = ()=> {
            if(!this.state.is_Detail){
                $(".footer").hide()

            }
        }
        

    }
    async handlegetListHomes(){
        const res = await homeService.getListHomes()
        console.log(res)
        this.setState({listHome: res.Data})
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
    handlePlus(type){
        if (type==1){
            if (this.state.adultsGuest<12){
                this.state.adultsGuest = this.state.adultsGuest+1
                this.state.totalGuest = this.state.totalGuest+1 
            }
        }else if(type == 2){
            if (this.state.childrensGuest<5){
                this.state.childrensGuest = this.state.childrensGuest+1
                this.state.totalGuest = this.state.totalGuest+1 
            }
        }else if(type == 3){
            if (this.state.infantsGuest<5){
                this.state.infantsGuest = this.state.infantsGuest+1 
                this.state.totalGuest = this.state.totalGuest+1 
            }
        }     
        var guests = ""
        if (this.state.totalGuest == 0 || this.state.totalGuest == 1){
            guests = this.state.totalGuest + " Guest"
        }else {
            guests = this.state.totalGuest + " Guests"
        }
        this.setState({valueGuest:guests})
       

      
    }
    handleMinus(type){
        if (type==1){
            if (this.state.adultsGuest>0){
                this.state.adultsGuest = this.state.adultsGuest-1
                this.state.totalGuest = this.state.totalGuest-1 
            }
        }else if(type == 2){
            if (this.state.childrensGuest>0){
                this.state.childrensGuest = this.state.childrensGuest-1
                this.state.totalGuest = this.state.totalGuest-1 
            }
        }else if(type == 3){
            if (this.state.infantsGuest>0){
                this.state.infantsGuest = this.state.infantsGuest-1 
                this.state.totalGuest = this.state.totalGuest-1 
            }
        }
        var guests = ""
        if (this.state.totalGuest == 0 || this.state.totalGuest == 1){
            guests = this.state.totalGuest + " Guest"
        }else {
            guests = this.state.totalGuest + " Guests"
        }
         
        this.setState({valueGuest:guests})
        
    }
    
    
    render() {
        return (
        <div>
        {this.state.is_Detail?
            <div className="detailRoom">
                 <div className="img-Room" id="img-Room">
                    <div className="row" >
                        <div className="col-md-6 col-init-no parent borderRight" >
                            <img className="child" src={Constants.apiImg+this.state.imgsRoom[0].Image} width="100%" height="100%"/>
                        </div>
                        <div className="col-md-6 col-init-no">
                            <div className="row col-init-no">
                                <div  className="col-md-6 col-init-no parent borderRight borderBottom">
                                    <img className="child" src={Constants.apiImg+this.state.imgsRoom[1].Image} width="100%" height="100%"/>
                                </div>
                                <div  className="col-md-6 col-init-no parent borderBottom">
                                    <img className="child" src={Constants.apiImg+this.state.imgsRoom[2].Image} width="100%" height="100%"/>
                                </div>
                                <div  className="col-md-6 col-init-no parent borderRight">
                                    <img className="child" src={Constants.apiImg+this.state.imgsRoom[4].Image} width="100%" height="100%"/>
                                </div>
                                <div  className="col-md-6 col-init-no parent">
                                    <img className="child" src={Constants.apiImg+this.state.imgsRoom[3].Image} width="100%" height="100%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divbody container">
                    <span onClick={this.handleBackRoom} className="container backList" >All Lists </span>
                    <DetailHouse homeId={this.state.homeId} room={this.state.room} roomType={this.state.roomType} imgsRoom={this.state.imgsRoom}/>
                </div>
            </div>
        :
        <div>
            
            <div id="header-search"  className="banner menu-header font-size14" >
                <img src="img/banner-travel-insurance-2000x400.jpg" className="banner-menu" ></img>
                <div className="card-search">
                    <div className="search-home">
                        <div className="col-md-12 col-sm-12 col-init" >
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-init col-search cursorPointer">
                                    <span className="cursorPointer" style={{ display: 'block', position: 'relative'}}>
                                        <i className="fa fa-map-marker icon-search cursorPointer" aria-hidden="true"></i>
                                        
                                        <select className="border-none input-search cursorPointer" value={this.state.selectDistrict} onChange={this.handeChangeDistrict}  id="inlineFormCustomSelect"  >
                                                    {this.state.district.map(function(object,index){
                                                        return  <option value={object.districtid} key = {index}>{object.name}</option>
                                                    })}
                                        </select>                                   
                                    </span>
                                </div>
                                <div className="col-md-2 col-sm-2 col-init col-search cursorPointer" >
                                    <span className="cursorPointer" style={{ display: 'block', position: 'relative',margin:'5px'}}>
                                        <DatePicker className="border-none input-search cursorPointer" id="checkIn" ref="check" placeholderText="Check In"
                                            selected={this.state.startDate}
                                            onChange={this.handleChangeFromTime}
                                        />                                            
                                        <i className="fa fa-calendar icon-search cursorPointer" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="col-md-2 col-sm-2 col-init col-search cursorPointer" >
                                    <span className="cursorPointer" style={{ display: 'block', position: 'relative',margin:'5px'}}>
                                        <DatePicker className="border-none input-search cursorPointer" id="checkOut"  placeholderText="Check Out"
                                            selected={this.state.endDate}
                                            onChange={this.handleChangeToTime}
                                        />                                                
                                        <i className="fa fa-calendar icon-search cursorPointer" aria-hidden="true"></i>
                                    </span>                    
                                </div>
                                
                                <div className="col-md-2 col-sm-2 col-init col-search cursorPointer" >
                                    <span className="cursorPointer" style={{ display: 'block', position: 'relative',margin:'5px'}}>
                                    <input id="PopoverLegacy" className="border-none input-search cursorPointer" role="button"  value={this.state.valueGuest}/>
                                  
                                    <UncontrolledPopover id="popoverLegacyPop" trigger="legacy" placement="bottom" target="PopoverLegacy">
                                        <PopoverBody  >
                                        <div className="" role="tooltip">
                                            <div className="col-md-12 font-size16" >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Adults</p>
                                                        <p></p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no" >
                                                        <button onClick={(e) => this.handleMinus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                        {this.state.adultsGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-md-12 font-size16">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Children</label>
                                                        <p className="font-size14">Ages 2-12</p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handleMinus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                    {this.state.childrensGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 font-size16">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Infants</label>
                                                        <p className="font-size14">Under 2</p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handleMinus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                    {this.state.infantsGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </PopoverBody>
                                    </UncontrolledPopover>
                       

                                        <i className="fa fa-angle-down icon-search cursorPointer" aria-hidden="true"></i>
                                    </span>                
                                </div>
                                <div className="col-md-2 col-sm-2 col-init col-search" style={{background: '#FF5A5F'}}>
                                    <button className="button-search cursorPointer" style={{margin:'5px'}} onClick={this.handleSearch} >Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        <div className="home">
                     
            <div className="col-md-12">
                <div className="left-menu left-responsive ">
                    <div className="menu no-padding-lr-mobile">
                        <div className="_1lr8j2n8">
                            {/* <div style={{marginTop: '16px', marginBottom: '8px'}}><div className="label-menu"> Dates </div></div>
                            <button aria-haspopup="true" aria-expanded="false" aria-controls="menuItemComponent-date_picker" className="button-menu"><div className="label-button">Check in → Check out</div>
                                <span className="span-button">
                                    <div className="span-icon-button" style={{transform: 'rotate(0deg)'}}>
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </span>
                            </button> */}
                            <div style={{marginTop: '16px', marginBottom: '8px'}}><div className="label-menu"> Guests </div></div>
                            <button id="PopoverLegacyLeft"   aria-haspopup="true" aria-expanded="false" aria-controls="menuItemComponent-date_picker" className="button-menu"><div className="label-button">{this.state.totalGuest==0?"Guest":this.state.valueGuest}</div>
                                <span className="span-button">
                                    <div className="span-icon-button" style={{transform: 'rotate(0deg)'}}>
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '1em', width: '1em', display: 'block', fill: 'currentcolor'}}>
                                            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>

                                    <UncontrolledPopover onBlur={this.fillter} id="popoverLegacyleft" trigger="legacy" placement="bottom" target="PopoverLegacyLeft">
                                        <PopoverBody>
                                        <div className="" role="tooltip">
                                            <div className="col-md-12 font-size16" >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Adults</p>
                                                        <p></p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no" >
                                                        <button onClick={(e) => this.handleMinus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                        {this.state.adultsGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="col-md-12 font-size16">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Children</label>
                                                        <p className="font-size14">Ages 2-12</p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handleMinus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                    {this.state.childrensGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 font-size16">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Infants</label>
                                                        <p className="font-size14">Under 2</p>
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handleMinus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                    </div>
                                                    <div className="col-md-2">
                                                    {this.state.infantsGuest}+
                                                    </div>
                                                    <div className="col-md-2 col-init-no">
                                                        <button onClick={(e) => this.handlePlus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{height: "1em", width: "1em", display: "block", fill: "currentcolor"}}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </PopoverBody>
                                    </UncontrolledPopover>
                        </div>
                        <span>
                            <span style={{fontSize: '0px'}}></span>
                            <div className="price-range">
                                <button type="button" className="button-price" id="btn-open-range" aria-expanded="true" aria-busy="false">
                                    <div className="_12d0llg5">
                                        <div className="_qo24lwc">
                                            <span className="_1r804a6o">
                                                <div className="_ng4pvpo">Price range</div>
                                            </span>
                                        </div> 
                                        <div className="_1iti0ju">
                                            <span className="_9zwlhy1">
                                                <div className="_36rlri">
                                                    <div className="_fhmr8ze"></div>
                                                    <div className="_fhmr8ze">
                                                        <div style={{marginLeft: '8px'}}>
                                                            <div className="_d5depq" style={{transform: 'rotate(180deg)'}}>
                                                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)'}}>
                                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '8px'}} id="amount-range-private" >
                                        <div className="_1r804a6o" id="amount-hide" style={{fontSize:'12px !important'}}>{this.state.amount}</div>
                                    </div>
                                </button>
                                <div id="select-range">
                                    <div className="_x01z5ll">
                                        <div style={{marginTop: '16px'}}>
                                            <div style={{marginBottom: '-16px'}}>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div style={{marginBottom: '16px'}}>
                                                            <div style={{marginBottom: '16px'}}>
                                                                <div style={{marginBottom: '8px'}}>
                                                                    <div className="_12kw8n71" style={{fontSize: '12px'}}>The average nightly price is ₫1,763,582</div>
                                                                </div>
                                                                <div className="_z6hmjh">
                                                                    <div style={{marginTop: '16px'}}>
                                                                        
                                                                        <div className="_sh9qj2d">
                                                                            <Range onBlur={this.fillter} defaultValue={[500000 ,5000000]} min={this.state.min} max={this.state.max} onChange={this.onSliderChange}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{marginTop: '40px'}}>
                                                                    <div className="_1r804a6o" id="amount">{this.state.amount}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span>
                            <span style={{fontSize: '0px'}}></span>
                            <div className="price-range">
                                <button type="button" className="button-price" id="open-checkbox" aria-expanded="true" aria-busy="false">
                                    <div className="_12d0llg5">
                                        <div className="_qo24lwc">
                                            <span className="_1r804a6o">
                                                <div className="_ng4pvpo">Home type</div>
                                            </span>
                                        </div> 
                                        <div className="_1iti0ju">
                                            <span className="_9zwlhy1">
                                                <div className="_36rlri">
                                                    <div className="_fhmr8ze"></div>
                                                    <div className="_fhmr8ze">
                                                        <div style={{marginLeft: '8px'}}>
                                                            <div className="_d5depq" style={{transform: 'rotate(180deg)'}}>
                                                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height: '10px', width: '10px', display: 'block', fill: 'rgb(118, 118, 118)'}}>
                                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '8px'}} id="Entire"><div className="_4r6fry" style={{fontSize:'14px'}}>Entire place</div></div>
                                </button>
                                <div id="Entire-checkbox">
                                    <div className="_x01z5ll">
                                        <div style={{marginTop: '16px'}}>
                                            <div style={{marginBottom: '-16px'}}>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Entire_home">
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Entire_home" name="room_types-Entire_home" value="on" onChange={(e) => this.handleHomeType(1,e)}/>
                                                                            <span data-fake-checkbox="true" data-style-select="false" id="DynamicFilterSpanItem-room_types-Entire_home" data-style-default="true" className="_fhj4ui">
                                                                                
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="_zkrkb6">
                                                                        <span className="_f7dcovm">
                                                                            <div className="_9zwlhy1">Entire place</div>
                                                                        </span>
                                                                        <span className="_wzwtzh8">
                                                                            <span className="_tnaqre1">Have a place to yourself</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Private_room">
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Private_room" name="room_types-Private_room" value="on" onChange={(e) => this.handleHomeType(3,e)}/>
                                                                            <span data-fake-checkbox="true" data-style-select="false" data-style-default="true" id="DynamicFilterSpanItem-room_types-Private_room" className="_fhj4ui"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="_zkrkb6">
                                                                        <span className="_f7dcovm">
                                                                            <div className="_9zwlhy1">Private room</div>
                                                                        </span>
                                                                        <span className="_wzwtzh8">
                                                                            <span className="_tnaqre1">Have your own room and share some common spaces</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{marginBottom: '16px'}}>
                                                    <div>
                                                        <div>
                                                            <label className="_4m7syz" htmlFor="DynamicFilterCheckboxItem-room_types-Shared_room">
                                                                <div className="_gyif22">
                                                                    <div className="_73ihd0r">
                                                                        <span className="_foa2bi">
                                                                            <input type="checkbox" className="_fcv8ql" aria-invalid="false" id="DynamicFilterCheckboxItem-room_types-Shared_room" name="room_types-Shared_room" value="on" onChange={(e) => this.handleHomeType(4,e)}/>
                                                                            <span data-fake-checkbox="true" data-style-select="false" id="DynamicFilterSpanItem-room_types-Shared_room" data-style-default="true" className="_fhj4ui"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="_zkrkb6">
                                                                        <span className="_f7dcovm">
                                                                            <div className="_9zwlhy1">Shared room</div>
                                                                        </span>
                                                                        <span className="_wzwtzh8">
                                                                            <span className="_tnaqre1">Stay in a shared space, like a common room</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="right-home">
                    <div className="container main-slider no-padding-lr-mobile">
                    {this.state.is_listHome?
                    
                        <div className="listHome">
                            <br></br>
                            <div className="title-list">The Dragons's lists</div>
                            <br></br>
                            <div className="col-md-12">
                                <div className="row">
                                    {this.state.listHome.map(this.renderListHomes)}
                                
                                </div>
                            </div>
                        </div>
                    :   
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
                                <div className="row">
                                    {this.state.listRoom.map(this.renderListRooms)}
                                    
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
        }
        
        </div>
        )
    }
}

export default HomeComponent                