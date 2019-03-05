import React, { Component } from 'react'
import '../assets/css/privateHomeInHouse.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../assets/js/plus'
import '../assets/js/index'
import $ from "jquery";
import homeService from '../services/home.js'
import bookingService from '../services/booking.js'
import * as Constants from '../const.js'
import moment from 'moment'
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Route, Redirect,Switch } from 'react-router'
import Lightbox from 'react-images';



import UpdatePhone from './UpdatePhone';
import ReviewHouse from './ReviewHouse';

class DetailHouseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectGuest: 1,
            startDate: null,
            endDate: null,
            countPlus: 1,
            showGuests: true,
            roomData: {},
            numberReviews: 0,
            toAddPhone: false,
            amenities: [],
            lengthAmenitiesChoose: 0,
            lengthAccessibility: 0,
            accessEnteringHome: [],
            accessGettingAround: [],
            accessBedroom: [],
            accessBathroom: [],
            accessCommonAreas: [],
            accessParking: [],
            amenityBasic: [],
            amenityFamilyFeatures: [],
            amenityFacilities: [],
            amenityDining: [],
            amenityGuestAccess: [],
            amenityLogistics: [],
            amenityBedAndBath: [],
            amenityOutDoor: [],
            amenityLocation: [],
            amenitySafetyFeatures: [],
            amenityNotIncluded: [],
            lengthReviews: 0,
            is_reviewBook: false,
            totalAmount: 0,
            adultsGuest: 1,
            childrensGuest: 0,
            infantsGuest: 0,
            totalGuest: 1,
            valueGuest: '1 Guest',
            nights: 0,
            cleanfee: 0,
            servicefee: 0,
            focusedInput: null,
            numberOfMonths: 1,
            focusedInput1: null,
            imgsRoom:[],
            room:null,
            roomType:null,
            homeId:null,
            lightboxIsOpen:false,
            currentImage: 0,




        };
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
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
        this.renderReviews = this.renderReviews.bind(this);
        this.renderAccessibilities = this.renderAccessibilities.bind(this);
        this.renderDetailAccessibility = this.renderDetailAccessibility.bind(this);
        this.calprice = this.calprice.bind(this)
        this.handeChangeDate = this.handeChangeDate.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);

    }
    closeLightbox(){
        this.setState({lightboxIsOpen:false,currentImage: 0,})

    }
    openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
    gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
        if (this.state.currentImage === this.state.imgsRoom.length - 1) this.state.currentImage = -1;

		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		this.gotoNext();
	}
    handeChangeDate(st, end) {
        st = st.startOf('day')
        if (end != null) {

            end = end.endOf('day')
            var diffInDates = moment(end).diff(moment(st), 'days');
            if (diffInDates == 0) {
                diffInDates = 1
            }
            var guest = this.state.totalGuest
            if (guest == 0) {
                guest = 1
            }
            var total = this.state.room.Price * diffInDates + parseInt(this.state.cleanfee) + parseInt(this.state.servicefee)
            this.setState({
                nights: diffInDates, totalAmount: total
            });
        }
        this.setState({ startDate: st, endDate: end })
        $("#price").show()
        $("#price-modal").show()
    }
    calprice() {
        $("#price").show()
        $("#price-modal").show()
        if (this.state.nights == 0) {
            this.state.nights = 1
        }
        var guest = this.state.totalGuest
        if (guest == 0) {
            guest = 1
        }
        var total = this.state.room.Price * this.state.nights + parseInt(this.state.cleanfee) + parseInt(this.state.servicefee)
        this.setState({ totalAmount: total })
    }
    handlePlus(type) {
        console.log(type)
        if(this.state.totalGuest < this.state.room.NumberOfGuest){
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
    componentWillMount() {
       
        var imgsRoom =JSON.parse(localStorage.getItem('imgsRoom'))
        for(var i = 0;i<imgsRoom.length;i++){
            var img = {src:Constants.apiImg+imgsRoom[i].Image}
            this.state.imgsRoom.push(img)
        }
        this.state.room=JSON.parse(localStorage.getItem('room'))
        this.state.homeId=localStorage.getItem('homeId')
        this.state.roomType=localStorage.getItem('roomType')
        this.loadData()
    }
    componentDidMount(){
        $("#price").hide()
        $(".footer").show()
        $("#price-modal").hide()
    }
    async loadData() {
     
        const res = await homeService.getDetailRoom(this.state.room.Id)
        var countNothing = 0
        for (var i = 0; i < res.Data.Amenities.length; i++) {
            if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Not included'.toUpperCase()) {
                countNothing++;
                this.state.amenityNotIncluded.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Basic'.toUpperCase()) {
                this.state.amenityBasic.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Facilities'.toUpperCase()) {
                this.state.amenityFacilities.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Dining'.toUpperCase()) {
                this.state.amenityDining.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Guest access'.toUpperCase()) {
                this.state.amenityGuestAccess.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Logistics'.toUpperCase()) {
                this.state.amenityLogistics.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Bed and bath'.toUpperCase()) {
                this.state.amenityBedAndBath.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Outdoor'.toUpperCase()) {
                this.state.amenityOutDoor.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Location'.toUpperCase()) {
                this.state.amenityLocation.push(res.Data.Amenities[i])
            } else if (res.Data.Amenities[i].amenityCategory.Name.toUpperCase() == 'Safety features'.toUpperCase()) {
                this.state.amenitySafetyFeatures.push(res.Data.Amenities[i])
            } else {
                this.state.amenityFamilyFeatures.push(res.Data.Amenities[i])
            }
        }

        for (var i = 0; i < res.Data.Accessibilities.length; i++) {
            if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Entering the home'.toUpperCase()) {
                this.state.accessEnteringHome.push(res.Data.Accessibilities[i])
            } else if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Getting around'.toUpperCase()) {
                this.state.accessGettingAround.push(res.Data.Accessibilities[i])
            } else if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Bedroom'.toUpperCase()) {
                this.state.accessBedroom.push(res.Data.Accessibilities[i])
            } else if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Bathroom'.toUpperCase()) {
                this.state.accessBathroom.push(res.Data.Accessibilities[i])
            } else if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Common areas'.toUpperCase()) {
                this.state.accessCommonAreas.push(res.Data.Accessibilities[i])
            } else if (res.Data.Accessibilities[i].accessibilityCategory.Name.toUpperCase() == 'Parking'.toUpperCase()) {
                this.state.accessParking.push(res.Data.Accessibilities[i])
            }
        }
        var lengthReviews = res.Data.Reviews.length
        var lengthAccessibility = res.Data.Accessibilities.length
        var lengthamenities = res.Data.Amenities.length - countNothing
        this.setState({
            lengthAccessibility: lengthAccessibility, lengthReviews: lengthReviews, lengthAmenitiesChoose: lengthamenities, roomData: res.Data, numberReviews: res.Data.Reviews.length, amenities: res.Data.Amenities,
            cleanfee: res.Data.CleaningFee, servicefee: res.Data.ServiceFee
        })

    }

    async handeBooking() {
        // this.setState({
        //     toAddPhone: true
        // })
        if (localStorage.getItem('accessToken')) {
            $("#img-Room").hide()
            $("#backListRoom").hide()

            localStorage.setItem("bookcleanFee",this.state.cleanfee)
            localStorage.setItem("bookserviceFee",this.state.servicefee)
            localStorage.setItem("booktotalGuest",this.state.totalGuest)
            localStorage.setItem("bookprice",this.state.room.Price)
            localStorage.setItem("bookroomData",JSON.stringify(this.state.roomData))
            localStorage.setItem("bookstartDate",this.state.startDate)
            localStorage.setItem("bookendDate",this.state.endDate)
            localStorage.setItem("booktotalAmount",this.state.totalAmount)
            localStorage.setItem("bookvalueGuest",this.state.valueGuest)
            this.setState({ is_reviewBook: true })
        } else {
            console.log("aa")
            $('#btn-login').click()
        }

        // var from = moment(this.state.startDate).format("YYYY-MM-DD HH:mm:ss")
        // var to = moment(this.state.endDate).format("YYYY-MM-DD HH:mm:ss")
        // var diffInDates = moment(this.state.endDate).diff(moment(this.state.startDate), 'days') + 1;
        // var bookingJson = {
        //     CustomerId: 1,
        //     FromDate: from,
        //     HomeId: this.props.homeId,
        //     NumberOfGuess: this.state.selectGuest,
        //     NumberOfNights: diffInDates,
        //     Price: this.state.room.Price,
        //     RoomId: this.state.roomData.RoomId,
        //     ToDate: to,
        //     TotalAmount: this.state.room.Price * diffInDates
        // }
        // var myJSON = JSON.stringify(bookingJson);
        // const res = await bookingService.bookingCreate(myJSON)

    }
    renderReviews(review, index) {
        var date = moment(review.CreatedAT).format("MMM YY");
        return <div className="font-size16 divRelative" style={{ marginBottom: "5px" }} key={index}>
            <div style={{ top: '0px', left: '0px', width: '100%' }}>
                <div style={{ width: '48px', height: '48px', float: 'left' }}>
                    <img width='100%' height='100%' className="avatar-customer" src={Constants.apiImg + review.Customer.Avatar} alt="" />
                </div>
                <div style={{ verticalAlign: 'top', width: '80%', float: 'left', marginLeft: '15px' }}>
                    <span className="space">{review.Customer.LastName}</span>
                    <br />
                    <span className="font-size14">{date}</span>

                </div>
                <div style={{ display: "inline-block", width: '100%', paddingTop: "15px" }}>
                    <span>{review.Content}</span>
                </div>
            </div>

            <hr />
        </div>

    }
    renderDetailAccessibility(accessibility, index, object) {

        return <div className="col-md-6" key={index}>
            <span className="font-size16">{accessibility.Name}</span>
            <br />
            <span className="font-size14">{accessibility.Description}</span>

        </div>

    }
    renderDetailAmenties(amenity, index, object) {
        var cate = amenity.amenityCategory
        if (cate.Name.toUpperCase() == 'Not included'.toUpperCase()) {
            return <div key={index}>
                <del className="font-size16" aria-hidden="true">{amenity.Name}</del>
                <br />

            </div>
        } else if (index == (object.length - 1)) {
            return <div key={index}>
                <span className="font-size16">{amenity.Name}</span>
                <br />
                <span className="font-size14">{amenity.Description}</span>
            </div>
        }

        return <div key={index}>
            <span className="font-size16">{amenity.Name}</span>
            <br />
            <span className="font-size14">{amenity.Description}</span>
            <hr />

        </div>

    }
    renderAmenities(amenity, index) {
        if (amenity.Name.toUpperCase() == 'Elevator'.toUpperCase()) {
            return <div className="col-md-6 margingBot5" key={index}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '19px', width: '19px', fill: 'currentcolor', marginRight: '4px' }}><path d="M22.5 23H21V1h1.5a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1H2v22H.5a.5.5 0 1 0 0 1h22a.5.5 0 0 0 0-1zM11 3v20H3V1h8v2zm9 20h-8V1h8v22zM4.146 10.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L7 9.707V14.5a.5.5 0 0 1-1 0V9.707l-1.146 1.147a.5.5 0 0 1-.708 0zm10 2a.5.5 0 1 1 .708-.708L16 13.293V8.5a.5.5 0 1 1 1 0v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2z" fillRule="evenodd"></path></svg>
                {amenity.Name}
            </div>
        } else if (amenity.Name.toUpperCase() == 'Kitchen'.toUpperCase()) {
            return <div className="col-md-6 margingBot5" key={index}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '19px', width: '19px', fill: 'currentcolor', marginRight: '4px' }}><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd"></path></svg>
                {amenity.Name}
            </div>
        } else if (amenity.Name.toUpperCase() == 'Gym'.toUpperCase()) {
            return <div className="col-md-6 margingBot5" key={index}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '19px', width: '19px', fill: 'currentcolor', marginRight: '4px' }}><path d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z" fillRule="evenodd"></path></svg>
                {amenity.Name}
            </div>
        } else if (amenity.Name.toUpperCase() == 'Pool'.toUpperCase()) {
            return <div className="col-md-6 margingBot5" key={index}>
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '19px', width: '19px', fill: 'currentcolor', marginRight: '4px' }}><path d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z" fillRule="evenodd"></path></svg>
                {amenity.Name}
            </div>
        }

    }

    renderAccessibilities(accessibility, index) {
        if (accessibility.Name.toUpperCase() == 'Step-free access'.toUpperCase()) {
            return <div className="col-md-6 " key={index}>
                {accessibility.Name + " to the home’s entrance"}
            </div>
        } else if (accessibility.Name.toUpperCase() == 'Wide doorway'.toUpperCase()) {
            return <div className="col-md-5" key={index}>
                {accessibility.Name + " to the home’s entrance"}
            </div>
        }

    }

    handeChageGuest(event) {

        this.setState({
            selectGuest: event.target.value
        });
    }
    handleChangeFromTime(date) {
        var diffInDates = moment(this.state.endDate).diff(moment(date), 'days');

        this.setState({
            startDate: date, nights: diffInDates
        });
    }
    handleChangeToTime(date) {

        var diffInDates = moment(date).diff(moment(this.state.startDate), 'days');
        if (diffInDates == 0) {
            diffInDates = 1
        }
        var guest = this.state.totalGuest
        if (guest == 0) {
            guest = 1
        }
        var total = this.state.room.Price * diffInDates + parseInt(this.state.cleanfee) + parseInt(this.state.servicefee)
        this.setState({
            endDate: date, nights: diffInDates, totalAmount: total
        });
        $("#price").show()
        $("#price-modal").show()

    }

    formatTime(time) {
        return moment(time).format('LL');   // January 12, 2019

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
        if (this.state.is_reviewBook) {
            return (<Redirect  push to={{
                pathname: "/review/book",
                search: "?bookRoomId="+this.state.room.Id,
                target:"_blank"
                
              }}/>

             )        } else {

            return (
                <div className="detailRoom">
                        <div className="img-Room" id="img-Room">
                        <Lightbox
                        images={this.state.imgsRoom}
                        isOpen={this.state.lightboxIsOpen}
                        onClickImage={this.handleClickImage}
					    onClickNext={this.gotoNext}
					    onClickPrev={this.gotoPrevious}
					    onClickThumbnail={this.gotoImage}
                        onClose={this.closeLightbox}
                        showImageCount={true}
                        showThumbnails={true}
                        enableKeyboardInput = {true}
                        preventScroll={false}
                        currentImage={this.state.currentImage}
                        />
                            <div className="row desktop" >
                                <div className="col-md-6 col-init-no parent borderAll height300" onClick={(e) => this.openLightbox(0, e)} >
                                    <img className="child-left" src={this.state.imgsRoom[0].src} />
                                </div>
                                <div className="col-md-6 col-init-no">
                                    <div className="row col-init-no" >
                                        <div className="col-md-6 col-init-no parent borderAll height150" onClick={(e) => this.openLightbox(1, e)}>
                                            <img className="child-right" src={this.state.imgsRoom[1].src} />
                                        </div>
                                        <div className="col-md-6 col-init-no parent borderAll height150" onClick={(e) => this.openLightbox(2, e)}>
                                            <img className="child-right" src={this.state.imgsRoom[2].src} />
                                        </div>
                                        <div className="col-md-6 col-init-no parent borderAll height150" onClick={(e) => this.openLightbox(4, e)}>
                                            <img className="child-right" src={this.state.imgsRoom[4].src} />
                                        </div>
                                        <div className="col-md-6 col-init-no parent borderAll height150" onClick={(e) => this.openLightbox(3, e)}>
                                            <img className="child-right" src={this.state.imgsRoom[3].src} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row tablet" >
                                <div className="col-md-8 col-init-no parent  borderAll height300" >
                                    <img className="child-left" style={{ marginTop: '0px' }} src={Constants.apiImg + this.state.imgsRoom[3].Image} />
                                </div>
                                <div className="col-md-4 col-init-no">
                                    <div className="row col-init-no">
                                        <div className="col-md-12 col-init-no parent  borderAll  height150">
                                            <img className="child-right" src={Constants.apiImg + this.state.imgsRoom[1].Image} />
                                        </div>
                                        <div className="col-md-12 col-init-no parent  borderAll height150">
                                            <img className="child-right" src={Constants.apiImg + this.state.imgsRoom[2].Image} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                <div className="divbody">
                       

                <div className="fontfamily container">
                    <div className="container">
                        <div className="privateRom">
                            <div className="row">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="container">
                                        <a><span style={{ color: '#39576a' }} className="font-size12 font-title">{this.state.roomType}</span></a>
                                        <div className="optionTitle">
                                            <div className="row">
                                                <div className="title col-md-10 col-sm-12">
                                                    <p className="title font-size32 font-title">{this.state.roomData.Title}</p>
                                                </div>
                                                <div className="col-md-2 avatar-detail">
                                                    <img className="avatar" src="../img/icondragon.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-10">
                                                    <label>Thành phố Vũng Tàu</label>
                                                </div>
                                                <div className="col-2">
                                                    <img style={{ width: "40px", height: "40px" }} src="../img/icondragon.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="font-size16 font-medium icon-furniture">
                                                <div className="margin-right15" style={{ display: "inline-block" }}>
                                                    <div style={{ display: "table" }}>
                                                        <div style={{ display: "table-cell" }}>
                                                            <i className="fa fa-users margin-right15" aria-hidden="true"></i><span>{this.state.room.NumberOfGuest} guests</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="margin-right15" style={{ display: "inline-block" }}>
                                                    <div style={{ display: "table" }}>
                                                        <div style={{ display: "table-cell" }}>
                                                            <span>{this.state.roomData.Bedroom} bedrooms</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="margin-right15" style={{ display: "inline-block" }}>
                                                    <div style={{ display: "table" }}>
                                                        <div style={{ display: "table-cell" }}>
                                                            <span>{this.state.roomData.Bed} beds</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="margin-right15" style={{ display: "inline-block" }}>
                                                    <div style={{ display: "table" }}>
                                                        <div style={{ display: "table-cell" }}>
                                                            <span>{this.state.roomData.Bath} share bath</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row font-size16 font-medium icon-furniture-reps">
                                                <div className="col-6">
                                                    <i className="fa fa-users margin-right15" aria-hidden="true"></i><span>{this.state.room.NumberOfGuest} guests</span>
                                                </div>
                                                <div className="col-6">
                                                    <span>{this.state.roomData.Bedroom} bedrooms</span>
                                                </div>
                                                <div className="col-6">
                                                    <i className="fa fa-users margin-right15" style={{ color: "white" }} aria-hidden="true"></i><span>{this.state.roomData.Bed} beds</span>
                                                </div>
                                                <div className="col-6">
                                                    <span>{this.state.roomData.Bath} share bath</span>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                        <div className="description font-size16">
                                            <p dangerouslySetInnerHTML={{ __html: this.state.roomData.Description }} />

                                            <a href="#show" className="readmore font-medium" id="show">Read more about the space</a>
                                            <svg className="readmore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>

                                            <div className="space-detail">
                                                <p className="font-medium">The Space</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.TheSpace }} />
                                                <p className="font-medium">Guest access</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.GuestAccess }} />
                                                <p className="font-medium">Interaction with guests</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.InteractionWithGuests }} />
                                                <p className="font-medium">Other things to note</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.OtherThings }} />
                                            </div>

                                            <a href="#hide" className="hidemore font-medium" id="hide">Hide</a>
                                            <svg className="hidemore" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform: 'rotate(180deg)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>

                                        </div>
                                        <br />
                                        <hr />
                                        {this.state.lengthAmenitiesChoose > 0 ?
                                            <div>
                                                <p className="font-title font-size16">Amenities</p>
                                                <div className="col-md-12 col-init-no">
                                                    <div className="row font-size16">
                                                        {this.state.amenities.map(this.renderAmenities)}
                                                    </div>
                                                    <p className="readmore cursorPointer font-medium" data-toggle="modal" data-target="#amenities-modal">Show all {this.state.lengthAmenitiesChoose} amenities</p>

                                                </div>
                                                <div style={{ zIndex: 10000 }} className="modal fade" id="amenities-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-body login-modal">
                                                                <div id='social-icons-conatainer'>
                                                                    <div className="cursorPointer" data-dismiss="modal" aria-hidden="true">
                                                                        <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'rgb(118, 118, 118)' }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
                                                                    </div>
                                                                    <br />
                                                                    <p className="font-size24 font-title">Amenities</p>
                                                                    <p className="font-size18 font-title">Basic</p>
                                                                    {this.state.amenityBasic.map(this.renderDetailAmenties)}
                                                                    <br />
                                                                    <p className="font-size18 font-title">Family features</p>
                                                                    {this.state.amenityFamilyFeatures.map(this.renderDetailAmenties)}
                                                                    <br />
                                                                    <p className="font-size18 font-title">Facilities</p>
                                                                    {this.state.amenityFacilities.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Dining</p>
                                                                    {this.state.amenityDining.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Guest access</p>
                                                                    {this.state.amenityGuestAccess.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Logistics</p>
                                                                    {this.state.amenityLogistics.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Bed and bath</p>
                                                                    {this.state.amenityBedAndBath.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Outdoor</p>
                                                                    {this.state.amenityOutDoor.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Location</p>
                                                                    {this.state.amenityLocation.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Safety features</p>
                                                                    {this.state.amenitySafetyFeatures.map(this.renderDetailAmenties)}
                                                                    <br />

                                                                    <p className="font-size18 font-title">Not included</p>
                                                                    {this.state.amenityNotIncluded.map(this.renderDetailAmenties)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                            : null
                                        }
                                        {this.state.lengthAccessibility > 0 ?
                                            <div>
                                                <p className="font-title font-size16">Accessibilities</p>
                                                <div className="col-md-12 col-init-no">
                                                    <div className="row font-size16">
                                                        {this.state.accessEnteringHome.map(this.renderAccessibilities)}
                                                    </div>
                                                    <p className="readmore cursorPointer font-medium" data-toggle="modal" data-target="#accessibility-modal">Show all</p>

                                                </div>
                                                <div style={{ zIndex: 10000 }} className="modal fade" id="accessibility-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-body accessibility-modal">

                                                                <div id='social-icons-conatainer'>
                                                                    <div className="cursorPointer" data-dismiss="modal" aria-hidden="true">
                                                                        <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'rgb(118, 118, 118)' }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
                                                                    </div>
                                                                    <br />
                                                                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '45px', width: '45px', display: 'block', fill: 'currentcolor' }}><path d="m3.89 13.85c-1.45 2.35-1.11 5.42.86 7.4 1.97 1.97 5.03 2.31 7.37.88.24-.14.54-.07.69.17.14.24.07.54-.17.69-2.74 1.67-6.3 1.27-8.6-1.03-2.31-2.31-2.7-5.89-1.01-8.63.15-.23.45-.31.69-.16.23.15.31.45.16.69zm8.72-2.82 2.61-3.39-4.63-2.53-2.24 2.24c-.2.2-.51.2-.71 0s-.2-.51 0-.71l2.37-2.37c.24-.24.6-.29.89-.13l4.93 2.69.79-1.03c-.39-.51-.63-1.13-.63-1.82 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.61 0-1.17-.18-1.64-.49l-3.93 5.11c.17.14.36.28.52.44.58.58 1.04 1.24 1.37 1.95h3.84c.41 0 .75.34.75.75 0 .07-.01.14-.03.21l-1.78 6.22 1.05.35c.26.09.4.37.32.63-.09.26-.37.4-.63.32l-1.41-.47c-.3-.1-.48-.43-.39-.73l1.79-6.27h-3.13c.56 1.88.33 3.95-.75 5.69-.15.23-.45.31-.69.16-.23-.15-.31-.45-.16-.69 1.46-2.35 1.12-5.42-.86-7.4s-5.05-2.32-7.4-.86c-.23.15-.54.07-.69-.16s-.07-.54.16-.69c2.26-1.4 5.08-1.36 7.3-.02zm4.39-7.03c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fillRule="evenodd"></path></svg>
                                                                    <p className="font-size24 font-title">Accessibility</p>
                                                                    <p className="font-size16 font-medium">Entering the home</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessEnteringHome.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <p className="font-size16 font-medium">Getting around</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessGettingAround.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <p className="font-size16 font-medium">Bedroom</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessBedroom.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <p className="font-size16 font-medium">Bathroom</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessBathroom.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <p className="font-size16 font-medium">Common areas</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessCommonAreas.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <p className="font-size16 font-medium">Parking</p>
                                                                    <div className="col-md-12">
                                                                        <div className="row">
                                                                            {this.state.accessParking.map(this.renderDetailAccessibility)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                            : null
                                        }
                                        {this.state.lengthReviews > 0 ?
                                            <div>
                                                {this.state.lengthReviews > 1 ?
                                                    <p className="font-title font-size24">{this.state.lengthReviews} Reviews</p>
                                                    :
                                                    <p className="font-title font-size24">{this.state.lengthReviews} Review</p>
                                                }
                                                <hr />
                                                {this.state.roomData.Reviews.map(this.renderReviews)}
                                            </div>
                                            : null
                                        }
                                        <div className="TheNeighBorhood">
                                            <p className="font-size24 font-title">The neighborhood</p>
                                            <p dangerouslySetInnerHTML={{ __html: this.state.roomData.AboutNeighborhood }} />

                                            <a href="#showNeighborhood" className="readmoreNeighBorhood font-medium" id="showNeighborhood">Read more about the neighborhood</a>
                                            <svg className="readmoreNeighBorhood" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>
                                            <div className="neightbor-detail">
                                                <p className="font-medium">Getting around</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.GetAround }} />
                                            </div>
                                            <a href="#hideNeighborhood" className="hidemoreNeighBorhood font-medium" id="hideNeighborhood">Hide</a>
                                            <svg className="hidemoreNeighBorhood" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform: 'rotate(180deg)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>
                                        </div>


                                        {this.state.roomData.HouseRuleDescriptions != null || this.state.roomData.HouseRuleDescriptions != ""

                                            ?
                                            <div className="TheNeighBorhood">
                                                <hr />
                                                <br />
                                                <p className="font-size24 font-title">Policies</p>
                                                <p className="font-size16 font-title">House Rules</p>
                                                <p dangerouslySetInnerHTML={{ __html: this.state.roomData.HouseRuleDescriptions }} />

                                                <a href="#showRules" className="readmoreRules font-medium" id="showRules">Read all rules</a>
                                                <svg className="readmoreRules" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)' }}>
                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                </svg>
                                                <div className="rules-detail">
                                                    <p dangerouslySetInnerHTML={{ __html: this.state.roomData.AdditionalRules }} />
                                                </div>
                                                <a href="#hideRules" className="hidemoreRules font-medium" id="hideRules">Hide</a>
                                                <svg className="hidemoreRules" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform: 'rotate(180deg)' }}>
                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                </svg>
                                                <hr />
                                                <p className="font-size16 font-title">Cancellations</p>
                                                <div dangerouslySetInnerHTML={{ __html: this.state.roomData.PolicyCancel }}>
                                                </div>
                                            </div>
                                            : null

                                        }

                                        <br />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-12 form-booking">
                                    <div className="request-to-book">
                                        <div className="content-request">
                                            <span className="font-title" style={{ fontSize: "22px" }}>
                                                ₫{this.currencyFormat(this.state.room.Price)}
                                            </span>
                                            <span className="font-size12 font-medium"> per night</span>

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
                                            <div className="form-group box-book">
                                                <div className="font-size12 font-medium label-book" style={{ marginTop: '16px', marginBottom: '6px' }}>Dates</div>
                                                <DateRangePicker
                                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                                    startDateId="DateInput__screen-reader-message-checkin" // PropTypes.string.isRequired,
                                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                                    endDateId="DateInput__screen-reader-message-checkout" // PropTypes.string.isRequired
                                                    onDatesChange={({ startDate, endDate }) => this.handeChangeDate(startDate, endDate)}
                                                    focusedInput={this.state.focusedInput}
                                                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                                                    // PropTypes.func.isRequired,
                                                    numberOfMonths={this.state.numberOfMonths}
                                                    startDatePlaceholderText="Check in"
                                                    endDatePlaceholderText="Check out"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <div className="font-size12 font-medium label-book" style={{ marginTop: '16px', marginBottom: '6px' }}>Guests</div>
                                                <OverlayTrigger rootClose={true} trigger="click" placement="bottom" overlay={<Popover
                                                    id="bookPopover"
                                                    onBlur={this.calprice}
                                                >
                                                    <div className="" role="tooltip">
                                                        <div className="col-md-12 col-12 font-size16" >
                                                            <div className="row">
                                                                <div className="col-md-6 col-5">
                                                                    <p>Adults</p>
                                                                    <p></p>
                                                                </div>
                                                                <div className="col-md-2 col-2 col-init-no" >
                                                                    <button onClick={(e) => this.handleMinus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                                </div>
                                                                <div className="col-md-2 col-3">
                                                                    {this.state.adultsGuest}+
                                                            </div>
                                                                <div className="col-md-2 col-2 col-init-no">
                                                                    <button onClick={(e) => this.handlePlus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="col-md-12 col-12 font-size16">
                                                            <div className="row">
                                                                <div className="col-md-6 col-5">
                                                                    <label>Children</label>
                                                                    <p className="font-size14">Ages 2-12</p>
                                                                </div>
                                                                <div className="col-md-2 col-2 col-init-no">
                                                                    <button onClick={(e) => this.handleMinus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                                </div>
                                                                <div className="col-md-2 col-3">
                                                                    {this.state.childrensGuest}+
                                                            </div>
                                                                <div className="col-md-2 col-2 col-init-no">
                                                                    <button onClick={(e) => this.handlePlus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-12 font-size16">
                                                            <div className="row">
                                                                <div className="col-md-6 col-5">
                                                                    <label>Infants</label>
                                                                    <p className="font-size14">Under 2</p>
                                                                </div>
                                                                <div className="col-md-2 col-2 col-init-no">
                                                                    <button onClick={(e) => this.handleMinus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                                </div>
                                                                <div className="col-md-2 col-3">
                                                                    {this.state.infantsGuest}+
                                                            </div>
                                                                <div className="col-md-2 col-2 col-init-no">
                                                                    <button onClick={(e) => this.handlePlus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popover>}>
                                                    <button id="PopoverBook" style={{ paddingBottom: '5px' }} aria-haspopup="true" aria-expanded="true" className="button-menu"><div className="label-button">{this.state.totalGuest == 0 ? "Guest" : this.state.valueGuest}</div>
                                                        <span className="span-button">
                                                            <div className="span-icon-button" style={{ transform: 'rotate(0deg)' }}>
                                                                <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                        </span>
                                                    </button>
                                                </OverlayTrigger>

                                                <br />
                                                <br />
                                                <div className="container div-price" id="price">
                                                    <div className="price-group font-size14 font-weight400">

                                                        <p className="price-info">
                                                            ₫{this.currencyFormat(this.state.room.Price)} x {this.currencyFormat(this.state.nights)} nights
                                                    </p>
                                                        <p className="price-total">
                                                            ₫{this.currencyFormat(this.state.totalGuest == 0 ? this.state.room.Price * this.state.nights : this.state.room.Price * this.state.nights)}
                                                        </p>
                                                        <hr />
                                                        <p className="price-info">
                                                            Cleaning fee
                                                    </p>
                                                        <p className="price-total">
                                                            đ{this.currencyFormat(this.state.cleanfee)}
                                                        </p>
                                                        <hr />
                                                        <p className="price-info">
                                                            Service fee
                                                    </p>
                                                        <p className="price-total">
                                                            ₫{this.currencyFormat(this.state.servicefee)}
                                                        </p>
                                                        <hr />
                                                        <div className="price-info">
                                                            <b> Total (VND) </b>
                                                        </div>
                                                        <div className="price-total">
                                                            ₫{this.currencyFormat(this.state.totalAmount)}
                                                        </div>

                                                    </div>
                                                </div>
                                                <button className="form-control btnRequest" onClick={this.handeBooking}>Book</button>
                                                <br />
                                                {/* <p style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '12px !important' }}>You won't be charged yet</p> */}
                                                <p className="dont-change">You won't be charged yet</p>
                                            </div>
                                        </div>
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
                                    <br />
                                    <p style={{ textAlign: 'center', fontfamily: 'sans-serif' }}><i className="fa fa-flag-o" aria-hidden="true"></i> Report this listing</p>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="footer-booking">
                        <div className="divbody footer-booking-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-6">
                                        <span className="font-title" style={{ fontSize: "22px" }}>
                                            ₫{this.currencyFormat(this.state.room.Price)}
                                        </span>
                                        <span className="font-size12 font-medium">per night</span>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <button className="form-control btnRequest" data-toggle="modal" data-target="#book-modal">Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ zIndex: 10000 }} className="modal fade" id="book-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body book-modal">
                                    <div style={{ paddingTop: '20px', paddingLeft: '20px' }} className="cursorPointer" data-dismiss="modal" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: '16px', width: '16px', display: 'block', fill: 'rgb(118, 118, 118)' }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
                                    </div>
                                    <div className="content-request">
                                        <span className="font-title" style={{ fontSize: "22px" }}>
                                            ₫{this.currencyFormat(this.state.room.Price)}
                                        </span>
                                        <span className="font-size12 font-medium">per night</span>

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
                                        <div className="form-group box-book">
                                            <div className="font-size12 font-medium label-book" style={{ marginTop: '16px', marginBottom: '6px' }}>Dates</div>
                                            <DateRangePicker
                                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                                startDateId="DateInput__screen-reader-message-checkin-modal" // PropTypes.string.isRequired,
                                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                                endDateId="DateInput__screen-reader-message-checkout-modal" // PropTypes.string.isRequired
                                                onDatesChange={({ startDate, endDate }) => this.handeChangeDate(startDate, endDate)}
                                                focusedInput={this.state.focusedInput1}
                                                onFocusChange={focusedInput1 => this.setState({ focusedInput1 })}
                                                // PropTypes.func.isRequired,
                                                readOnly={true}

                                                numberOfMonths={this.state.numberOfMonths}
                                                startDatePlaceholderText="Check in"
                                                endDatePlaceholderText="Check out"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <div className="font-size12 font-medium label-book" style={{ marginTop: '16px', marginBottom: '6px' }}>Guests</div>
                                            <OverlayTrigger rootClose={true} trigger="click" placement="bottom" overlay={<Popover
                                                id="modalbookPopover"
                                                onBlur={this.calprice}
                                            >
                                                <div className="" role="tooltip">
                                                    <div className="col-md-12 col-12 font-size16" >
                                                        <div className="row">
                                                            <div className="col-md-6 col-5">
                                                                <p>Adults</p>
                                                                <p></p>
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no" >
                                                                <button onClick={(e) => this.handleMinus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                            </div>
                                                            <div className="col-md-2 col-3">
                                                                {this.state.adultsGuest}+
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no">
                                                                <button onClick={(e) => this.handlePlus(1, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="col-md-12 col-12 font-size16">
                                                        <div className="row">
                                                            <div className="col-md-6 col-5">
                                                                <label>Children</label>
                                                                <p className="font-size14">Ages 2-12</p>
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no">
                                                                <button onClick={(e) => this.handleMinus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                            </div>
                                                            <div className="col-md-2 col-3">
                                                                {this.state.childrensGuest}+
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no">
                                                                <button onClick={(e) => this.handlePlus(2, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-12 font-size16">
                                                        <div className="row">
                                                            <div className="col-md-6 col-5">
                                                                <label>Infants</label>
                                                                <p className="font-size14">Under 2</p>
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no">
                                                                <button onClick={(e) => this.handleMinus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect></svg></button>
                                                            </div>
                                                            <div className="col-md-2 col-3">
                                                                {this.state.infantsGuest}+
                                                            </div>
                                                            <div className="col-md-2 col-2 col-init-no">
                                                                <button onClick={(e) => this.handlePlus(3, e)} className="btn btn-guest" type="button" aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false" style={{ height: "1em", width: "1em", display: "block", fill: "currentcolor" }}><rect height="2" rx="1" width="12" x="0" y="11"></rect><rect height="12" rx="1" width="2" x="5" y="6"></rect></svg></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover>}>
                                                <button id="PopoverBookModal" style={{ paddingBottom: '5px' }} aria-haspopup="true" aria-expanded="true" className="button-menu"><div className="label-button">{this.state.totalGuest == 0 ? "Guest" : this.state.valueGuest}</div>
                                                    <span className="span-button">
                                                        <div className="span-icon-button" style={{ transform: 'rotate(0deg)' }}>
                                                            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </button>
                                            </OverlayTrigger>

                                            <br />
                                            <br />
                                            <div className="container div-price" id="price-modal">
                                                <div className="price-group font-size14 font-weight400">

                                                    <p className="price-info">
                                                        ₫{this.currencyFormat(this.state.room.Price)} x {this.currencyFormat(this.state.nights)} nights
                                                    </p>
                                                    <p className="price-total">
                                                        ₫{this.currencyFormat(this.state.totalGuest == 0 ? this.state.room.Price * this.state.nights : this.state.room.Price * this.state.nights)}
                                                    </p>
                                                    <hr />
                                                    <p className="price-info">
                                                        Cleaning fee
                                                    </p>
                                                    <p className="price-total">
                                                        đ{this.currencyFormat(this.state.cleanfee)}
                                                    </p>
                                                    <hr />
                                                    <p className="price-info">
                                                        Service fee
                                                    </p>
                                                    <p className="price-total">
                                                        ₫{this.currencyFormat(this.state.servicefee)}
                                                    </p>
                                                    <hr />
                                                    <div className="price-info">
                                                        <b> Total (VND) </b>
                                                    </div>
                                                    <div className="price-total">
                                                        ₫{this.currencyFormat(this.state.totalAmount)}
                                                    </div>

                                                </div>
                                            </div>
                                            <br />

                                            <button className="form-control btnRequest" onClick={this.handeBooking} data-dismiss="modal">Book</button>
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
        </div>
            )
        }
    }
    Ư
}

export default DetailHouseComponent    