import React, { Component } from 'react'
import '../assets/css/reviewHouse.css'
import 'jquery-ui-bundle/jquery-ui.css';
import moment from 'moment'
import bookingService from '../services/booking.js'
import paymentService from '../services/payment.js'

import homeService from '../services/home.js'
import uuid from "uuid";


class ReviewHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: {},
            checkIn: new Date(),
            checkOut: new Date(),
            amount: 0,
            nights: 0,
            price: 0,
            homeId: 0,
            cleanFeel: 0,
            serviceFee: 0,
            title: "",
            totalGuest: 0,
            guests: 0,
            policy: [],
            message: "waiting...",
            roomId: 0
        }
        this.handleBook = this.handleBook.bind(this)
        this.renderPolices = this.renderPolices.bind(this)
        this.loadData = this.loadData.bind(this)
        this.clickPaymentWithATM = this.clickPaymentWithATM.bind(this)
        this.clickPaymentWithNoATM = this.clickPaymentWithNoATM.bind(this)
    }

    async clickPaymentWithATM() {
        var user = this.parseJwt(localStorage.accessToken)
        var objPayment = {
            "CustomerEmail": user.email,
            "CustomerId": user.id,
            "CustomerPhone": user.phone,
            "MerchTxnRef": uuid.v4(),
            "OrderInfor": "Test OrderID",
            "TotalAmount": this.state.price
        }
        console.log("-----------", objPayment);
        const res = await paymentService.redirectOnePay(objPayment);
        if (res.Status === "OK") {
            window.open(res.Data.Url);
        } else {
            alert(res.Message);
        }

    }
    async clickPaymentWithNoATM() {
        var user = this.parseJwt(localStorage.accessToken)
        var objPayment = {
            "City": {
                "Id": 0,
                "Name": "hcm",
                "Status": true
            },
            "CustomerEmail": user.email,
            "CustomerId": user.id,
            "CustomerPhone": user.phone,
            "District": {
                "Id": 0,
                "Name": "tan binh",
                "ProvinceId": 0
            },
            "FullTextAddress": "cong hoa",
            "MerchTxnRef": uuid.v4(),
            "OrderInfor": "dddd",
            "TotalAmount": this.state.price
        }
        console.log("-----------", objPayment);
        const res = await paymentService.redirectOnePayNoATM(objPayment);
        if (res.Status === "OK") {
            window.open(res.Data.Url);
        } else {
            alert(res.Message);
        }

    }
    renderPolices(policy, index) {
        if (policy.Name.toUpperCase() === "No pets".toUpperCase()) {
            return <div className="row service-detail" key={index}>
                <div className="logo-box">
                    <div style={{ margin: '16px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'rgb(217, 57, 0)' }}><path d="m6.32874849 11.6781574c.75542549 0 1.34774775-.5410186 1.34774775-1.5525901 0-.82366353-.59232226-2.99008648-2.1195616-2.99008648-.91618752 0-1.67395421.77433766-1.67395421 1.68569158 0 1.12509931 1.30014346 2.856985 2.44576806 2.856985m12.63854941-4.52701758-2.1484364 2.15546165c-.0741378.29595514-.1131577.58016603-.1131577.81896583 0 1.0115715.5923223 1.5525901 1.3485281 1.5525901 1.1979113 0 2.4457681-1.8039171 2.4457681-2.85463615 0-.86202807-.6797269-1.59721822-1.5327021-1.67238143m-3.9456935 3.95859578-8.40176737 8.4292409c.37381076.7351901 1.01139611 1.2190533 2.0337178 1.2190533 1.63337347 0 2.50039597-1.4727292 3.31044927-1.569032 1.0956792-.1299698 1.8339359 1.8109636 3.6990877 1.8109636 1.9018304 0 2.5269294-1.7154437 2.5269294-3.6297567 0-2.6510691-1.1979113-5.0735168-3.1684168-6.2604691m-4.869685-1.67238146c1.0652436 0 1.3813049-1.55493892 1.3813049-2.59469666 0-1.45237246-.5267688-2.75363554-1.90651288-2.75363554-.93491708 0-1.82144947.7281436-1.82144947 1.93623562 0 1.12353341 1.11128708 3.41209658 2.34665745 3.41209658m9.3031274-4.43462942-14.95633216 15.00445588c-.11393814.1143107-.2637746.1714661-.41361107.1714661-.14983646 0-.29967292-.0571554-.41361106-.1714661-.22865668-.2294044-.22865668-.6013057 0-.83071l2.56829059-2.5766889c.31528088-3.0887381 2.37319102-6.2589031 6.0067252-6.2589031.0741378 0 .1428129.0140931.2153899.0164419l1.1479658-1.15093664c-.5704711-.46663827-.7608883-1.56041957-.7608883-2.36059458 0-1.45158951.5244276-2.75676734 1.9072933-2.75676734.8880932 0 1.8198887.69134495 1.8198887 1.93232087 0 .06811666-.0046824.14327987-.0140472.22314078l2.0649337-2.07246894c.2286567-.22940438.5993459-.22940438.8280026 0 .2286566.22940438.2286566.60130568 0 .83071007"></path></svg></div>
                </div>
                <div className="logo-content">
                    <div className="content">
                        <div className="_ni9axhe">
                            <div style={{ marginLeft: '16px' }}>
                                <div className="_1r804a6o font-size16">{policy.Name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (policy.Name.toUpperCase() === "Suitable for children and infants".toUpperCase()) {
            return <div className="row service-detail" key={index}>
                <div className="logo-box">
                    <div style={{ margin: '16px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)' }}><path d="m11.4 10.7c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9-1.9.9-1.9 1.9.9 1.9 1.9 1.9zm4.9 2v1.3c0 .2-.1.3-.3.3s-.3-.1-.3-.3v-1.3h-1.4c-.3 0-.5.2-.5.5v6c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8v-1.9c0-.3-.2-.5-.5-.5h-.2c-.3 0-.5.2-.5.5v1.9c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8v-3-3.1c0-.4-.2-.7-.5-.9l-2.2-1.3c-.4-.2-.5-.7-.3-1.1s.7-.5 1.1-.3l1.8 1c.6.4 1.4.6 2.1.6h4.6v-3c-1.2-1.1-1.8-2.1-1.8-3 0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 .9-.6 1.9-1.8 3v3c.4 0 .8.4.8.8s-.3.8-.8.8zm-.1-8.7c-.6.2.2.7.4 1.5s-.4 1.3 0 1.2.8-.9.7-1.6-.5-1.2-1.1-1z"></path></svg></div>
                </div>
                <div className="logo-content">
                    <div className="content">
                        <div className="_ni9axhe">
                            <div style={{ marginLeft: '16px' }}>
                                <div className="_1r804a6o font-size16">{policy.Name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (policy.Name.toUpperCase() === "Events or parties allowed".toUpperCase()) {
            return <div className="row service-detail" key={index}>
                <div className="logo-box">
                    <div style={{ margin: '16px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)' }}><path d="m19.4887081 19.1747265c-.054266-.2632831-.2899586-.4501817-.5580488-.4396178-.4746251.0170646-1.045633.087761-1.1412059-.3786727l-.7718732-3.7501597c-.0785642-.3835483.0842338-.5956376.2591809-.7524698.7378557-.6427684 1.018095-1.5431318.9856974-2.5150042-.0907133-2.91642976-1.2691765-6.75272535-1.5445562-7.61245861-.0323976-.09995008-.1344501-.16008266-.2373125-.138955l-4.2789147.88654914-4.68226491-.96943457c-.10286242-.02194027-.2049149.03819231-.23731251.13895499-.2753797.85973327-1.45384286 4.69521625-1.54536611 7.61083345-.03239762.9694345.24946161 1.8738609.9865073 2.5166294.1749471.1560196.33774511.3681088.2591809.7516571l-.77268306 3.7509724c-.09476302.4664337-.66577094.3957373-1.14039596.37786-.26809024-.0097512-.50378288.1755221-.55804888.4396179-.06074552.2990377.12959045.5899493.42683855.6517071l3.20250399.6630835c.29643816.0609451.58801667-.130829.64957213-.4298667.05345606-.2624705-.08909343-.5265663-.33936499-.6240786-.44384729-.1738969-.9946067-.3323543-.8982238-.8012259l.77106317-3.7542227s0-.0008126.00080994-.0008126c.07937415-.3778601.31020714-.5078765.50378288-.5753225.93305124-.2770973 1.56156496-.997063 1.92846786-1.9250549.5904465-1.5049395.9865073-3.3991155 1.2359689-4.94468513.2502716 1.55938387.6495722 3.49662783 1.2505479 5.02838323.3628532.9182406.9856973 1.6398315 1.9284679 1.9250549.1935757.067446.4235987.1974624.5037828.5753224.00081 0 .00081.0008126.00081.0016252l.7710632 3.7534102c.0963829.4680589-.4543766.6265164-.8982239.8004133-.2502715.0975123-.3936309.3624206-.3393649.6257038.0615554.2974124.352324.4891866.6495721.4282414l3.202504-.6622709c.2972481-.0617578.487584-.353482.4268385-.6517071"></path></svg></div>
                </div>
                <div className="logo-content">
                    <div className="content">
                        <div className="_ni9axhe">
                            <div style={{ marginLeft: '16px' }}>
                                <div className="_1r804a6o font-size16">{policy.Name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (policy.Name.toUpperCase() === "Smoking allowed".toLocaleUpperCase()) {
            return <div className="row service-detail" key={index}>
                <div className="logo-box">
                    <div style={{ margin: '16px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)' }}><path d="m20.5 13.1442736c0 .1084655-.0901301.1980674-.2011833.1980674-.2736092 0-1.7164957.000786-1.9587204.000786-1.0332773 0-3.1159266-.0943178-4.0614881-2.1496602-.1826744-.3977068-.2518814-.8111332-.2808518-1.21591379-.0675976-.95182394.0756449-1.90050395-.2551004-2.27541726-.2373963-.27037774-.4820352-.29081326-1.3093008-.22636276-.6172303.04558694-1.3857504.1037496-2.1421996-.21693097-2.26451897-.96754358-2.22106338-3.1368533-2.20255452-4.0643118.00160946-.04715891.0024142-.08017015.0024142-.12025522.00885206-.04087105.04023665-.07388229.08449698-.07388229h2.16714624c.0458698 0 .087716.03615517.084497.09981969-.0064378 1.03906792-.032994 1.69300476.7942716 2.04433862.2221064.0951038.6148161.06680845 1.0332773.03536918.8803781-.06838041 2.2162351-.16662814 3.2535361 1.01313052.8232419.93531832.8143899 2.05612835.8063425 2.95764945-.0024142.25623006-.0136804.85986403.0933491 1.09330063.3138459.6814462.9262478.7828379 2.0786256.7961996h1.812259c.1110532 0 .2011833.0888159.2011833.1980674zm-4.4260322 5.3281705-.0168994-2.7870914 2.9557848-.0125757.0136805 2.7870914zm4.4002807-3.5329881c-.0024142-.3969208-.33155-.7176014-.7395497-.7176014l-15.50559777.089602c-.39270976.0023579-.73150241.3151787-.72908821.7286051l.02494673 4.2325119c.00321893.3992787.33476898.7199593.74035447.7168154l15.50559778.0110037c.4377748-.0102177.7306977-.3497619.7282835-.7278191l-.0096568-1.685145z"></path></svg></div>
                </div>
                <div className="logo-content">
                    <div className="content">
                        <div className="_ni9axhe">
                            <div style={{ marginLeft: '16px' }}>
                                <div className="_1r804a6o font-size16">{policy.Name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }




    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var user = JSON.parse(window.atob(base64))
        return user
    }
    async handleBook() {
        var user = this.parseJwt(localStorage.accessToken)

        var from = moment(this.state.checkIn).format("YYYY-MM-DD HH:mm:ss")
        var to = moment(this.state.checkOut).format("YYYY-MM-DD HH:mm:ss")
        var bookingJson = {
            CustomerId: user.id,
            FromDate: from,
            HomeId: this.state.homeId,
            NumberOfGuess: this.state.totalGuest,
            NumberOfNights: this.state.nights,
            Price: this.state.price,
            RoomId: this.state.room.RoomId,
            ToDate: to,
            TotalAmount: this.state.amount
        }
        var myJSON = JSON.stringify(bookingJson);
        const res = await bookingService.bookingCreate(myJSON)
        if (res.Status === "OK") {
            this.setState({ message: "You have Successfull Booked a room. Thank you very much!" })

        } else {
            this.setState({ message: "You have Failed Booked a room. Please try again!" })

        }
    }
    formatTime(time) {
        return moment(time).format('ll');   // January 12, 2019

    }
    formatdayofweek(date) {
        var days = moment(date).format('LLLL').split(" ")
        var date = days[0].split(",")

        return date[0]
    }
    formatMonth(date) {
        var month = moment(date).format('ll').split(" ")
        return month[0].toUpperCase()
    }
    formatDate(time) {
        var dates = moment(time).format('ll').split(" ")
        var date = dates[1].split(",")
        return date[0]
    }
    componentDidMount() {
        var search = window.location.href

        var url = new URL(search);

        // var homeId = url.searchParams.get("homeId")
        var cleanFee = url.searchParams.get("bookcleanFee")
        var serviceFee = url.searchParams.get("bookserviceFee")
        var totalGuest = url.searchParams.get("booktotalGuest")
        var price = url.searchParams.get("bookprice")
        var start = url.searchParams.get("bookstartDate")
        var end = url.searchParams.get("bookendDate")
        var totalAmount = url.searchParams.get("booktotalAmount")
        var valueguests = url.searchParams.get("bookvalueGuest")
        var roomId = url.searchParams.get("roomId")
        var diffInDates = moment.unix(end / 1000).diff(moment.unix(start / 1000), 'days');


        this.setState({
            nights: diffInDates,
            checkIn: moment.unix(start / 1000),
            checkOut: moment.unix(end / 1000),
            amount: totalAmount,
            price: price,
            guests: valueguests,
            cleanFee: cleanFee,
            serviceFee: serviceFee,
            totalGuest: totalGuest,
            roomId: roomId
        })
        this.loadData(roomId)

    }
    // componentDidMount() {
    //     this._isMounted = true;

    // }
    async loadData(roomId) {


        const res = await homeService.getDetailRoom(roomId)
        console.log("loadData", res)
        var policies = res.Data.Policies
        this.setState({
            room: res.Data,
            policy: policies,
            homeId: res.Data.Id
        })

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
        if (this.state.roomId != 0) {
            return (
                <div className="detailRoom">
                    <div className="divbody">
                        <div className="container">
                            <br />
                            <div className="row body-review colorTitle">
                                <div className="col-md-7 col-sm-12">
                                    <div className="title-review">
                                        <p>Review house rules</p>
                                    </div>
                                    <div className="box-title font-size14">
                                        <div className="img-eye ">
                                            <img className="_1o93hs7" style={{ height: '40px', width: '36px' }} alt="" src={require("../assets/img/icon-uc-eye.gif")} />
                                        </div>
                                        <div className="content-eye">
                                            <span><b>People are eyeing this place</b> </span><span> 8 others are looking at it for these dates.</span>
                                        </div>
                                    </div>
                                    <div className="info-booking">
                                        <div className="title-box font-size18">
                                            <p>{this.state.nights} nights in Thành Phố Vũng tàu</p>
                                        </div>
                                        <div className="book-checkin">
                                            <div className="box-date">
                                                <b>
                                                    <span className="font-size12">{this.formatMonth(this.state.checkIn)}</span>
                                                    <br />
                                                    <span className="font-size16">{this.formatDate(this.state.checkIn)}</span>
                                                </b>
                                            </div>
                                            <div className="box-date-info">
                                                <span className="font-size14">{this.formatdayofweek(this.state.checkIn)} check-in</span>
                                                <br />
                                                <span className="font-size16">After {this.state.room.CheckIn}</span>
                                            </div>
                                        </div>

                                        <div className="book-checkout">
                                            <div className="box-date">
                                                <b>
                                                    <span className="font-size12">{this.formatMonth(this.state.checkOut)}</span>
                                                    <br />
                                                    <span className="font-size16">{this.formatDate(this.state.checkOut)}</span>
                                                </b>
                                            </div>
                                            <div className="box-date-info">
                                                <span className="font-size14">{this.formatdayofweek(this.state.checkOut)} check-out</span>
                                                <br />
                                                <span className="font-size16">{this.state.room.CheckOut}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="container">
                            <hr />
                        </div> */}
                                    <div className="list-services">
                                        <p className="font-size18"><b>Thing to keep in mind</b></p>
                                        <div className="container-fluid">
                                            {this.state.policy.map(this.renderPolices)}


                                        </div>
                                        <div>
                                            <a href="#showReviewBook" className="readmoreReviewBook" id="showReviewBook"><b>Read more</b></a>
                                            <svg className="readmoreReviewBook" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>
                                            <div className="reviewBook-detail">
                                                <span className="font-size16">Additional Rules</span>
                                                <br />
                                                <div className="font-size14">
                                                    <p dangerouslySetInnerHTML={{ __html: this.state.room.AdditionalRules }} />

                                                </div>
                                            </div>
                                            <a href="#hideReviewBook" className="hidemoreReviewBook" id="hideReviewBook"><b>Hide</b></a>
                                            <svg className="hidemoreReviewBook" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: '10px', width: '10px', marginLeft: '5px', fill: 'rgb(118, 118, 118)', transform: 'rotate(180deg)' }}>
                                                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="font-size16">
                                            {/* <button className="btn btn-AgreeBook" data-dismiss="modal" data-toggle="modal" data-target="#bookingModal" onClick={this.handleBook}><b> Agree</b></button> */}
                                            <button className="btn btn-AgreeBook" data-dismiss="modal" data-toggle="modal" data-target="#bookingModal"><b> Agree</b></button>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <div className="info-box">
                                        <div className="container box-room">
                                            <div className="box-room-title">
                                                <span className="font-size16">
                                                    {this.state.room.Title}
                                                </span >
                                                <br />
                                                <span className="font-size14">
                                                    Entire home/apt in Thành phố Vũng Tàu
                                    </span>
                                            </div>
                                            <div className="box-room-img">
                                                <img src={require('../assets/img/ba.jpg')} />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <hr />
                                        </div>
                                        <div className="container font-weight400">
                                            <div style={{ marginBottom: '16px' }}>
                                                <div className="_ni9axhe">
                                                    <div style={{ marginRight: '8px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '20px', width: '20px', display: 'block', fill: 'currentcolor' }}><path d="m3.31 11.56c-.66.5-1.1.99-1.47 1.66-1.14 2.08-1.46 6.82-.2 8.52 1.3 1.75 2.69 2.15 6.54 2.15 2.81 0 4.7-1 5.17-3.43.16-.84.14-1.55-.01-2.59-.01-.1-.03-.19-.06-.37-.12-.8-.16-1.18-.16-1.66.01-1.55.73-2.28 2.62-3.24.56-.28.9-.85.9-1.48 0-.47-.2-.84-.54-1.21-.2-.21-.35-.44-.48-.69-.31-.62-.4-1.19-.39-1.98 0-.06 0-.06 0-.12 0-1.65.81-2.65 2.16-2.65s2.16 1 2.16 2.65c0 1.04-.23 1.97-.99 2.79-.34.37-.54.74-.54 1.21 0 .62.35 1.19.9 1.48 1.87.95 2.6 1.69 2.63 3.25.01.4.02.77.05 1.37.11 2.45.06 3.22-.34 3.9-.47.81-1.6 1.24-3.89 1.26-1.19.01-1.64-.02-2.36-.18-.4-.09-.81.16-.9.56s.16.81.56.9c.86.2 1.41.24 2.71.22 2.76-.03 4.37-.64 5.17-2.01.61-1.04.67-1.93.54-4.73-.03-.59-.04-.94-.05-1.33-.05-2.27-1.14-3.38-3.45-4.56-.05-.03-.08-.08-.08-.13 0-.02.03-.08.14-.2.61-.66 1-1.43 1.2-2.27.14-.56.18-1.03.18-1.54 0-2.42-1.41-4.15-3.66-4.15s-3.66 1.73-3.66 4.15v.11c-.01 1.01.1 1.79.55 2.67.19.37.42.71.72 1.03.11.12.14.18.14.2 0 .06-.03.11-.08.13-2.34 1.19-3.43 2.29-3.44 4.57 0 .58.04 1.03.18 1.9.03.18.04.26.05.36.13.89.15 1.45.02 2.09-.3 1.56-1.51 2.21-3.69 2.21-3.42 0-4.4-.28-5.34-1.55-.86-1.16-.58-5.29.31-6.91.26-.48.57-.81 1.07-1.2.29-.22 1.9-1.3 2.42-1.67.45-.32.71-.84.71-1.39v-.15c0-.52-.25-1-.65-1.34-.69-.57-1.17-2.03-1.17-3.48 0-1.93 1.11-3.13 2.65-3.13s2.65 1.2 2.65 3.13c0 1.46-.46 2.91-1.14 3.48-.42.34-.65.84-.65 1.4 0 .64.35 1.23.92 1.52.41.21.57.29.79.41.37.19.82.05 1.01-.31.19-.37.05-.82-.31-1.01-.23-.12-.4-.21-.81-.42-.06-.03-.11-.1-.11-.18 0-.12.03-.19.11-.25 1.1-.91 1.69-2.77 1.69-4.64 0-2.73-1.75-4.63-4.15-4.63s-4.15 1.9-4.15 4.63c0 1.85.61 3.72 1.71 4.64.07.06.11.13.11.19v.15c0 .06-.03.12-.09.16-.49.35-2.12 1.44-2.46 1.7z" fillRule="evenodd"></path></svg></div>
                                                </div>
                                                <div className="_ni9axhe">
                                                    <div className="font-size16">
                                                        {this.state.guests}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginBottom: '16px' }}>
                                                <div className="_ni9axhe">
                                                    <div style={{ marginRight: '8px' }}><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '20px', width: '20px', display: 'block', fill: 'currentcolor' }}><path d="m22 9.5v-1.5-5h-4.75v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h-7.5v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h-4.75v5 1.5 12.51c0 .54.44.99.99.99h18.02c.54 0 .99-.44.99-.99zm-18.5-5h3.25v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5h7.5v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5h3.25v3.5h-17zm0 17v-12h17v12z" fillRule="evenodd"></path></svg></div>                                </div>
                                                <div className="_ni9axhe">
                                                    <div className="font-size16">
                                                        {this.formatTime(this.state.checkIn)}
                                                        <div className="arrow-date" style={{ marginLeft: '16px', marginRight: '16px' }}>
                                                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '15px', width: '15px', display: 'block', fill: 'currentcolor' }}><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd"></path></svg>
                                                        </div>
                                                        {this.formatTime(this.state.checkOut)}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="container">
                                            <hr />
                                        </div>
                                        <div className="container div-price">
                                            <div className="price-group font-size16 font-weight400">

                                                <p className="price-info">
                                                    ${this.currencyFormat(this.state.price)} x {this.state.nights} nights
                                                </p>
                                                <p className="price-total">
                                                    ${this.currencyFormat(this.state.price * this.state.nights)}
                                                </p>

                                                <p className="price-info">
                                                    Cleaning fee
                                                </p>
                                                <p className="price-total">
                                                    ${this.currencyFormat(this.state.cleanFee)}
                                                </p>

                                                <p className="price-info">
                                                    Service fee
                                                </p>
                                                <p className="price-total">
                                                    ${this.currencyFormat(this.state.serviceFee)}
                                                </p>

                                            </div>
                                        </div>
                                        <div className="container">
                                            <hr />
                                        </div>
                                        <div className="container div-price">
                                            <div className="price-group font-weight400">

                                                <div className="price-info">
                                                    Total (VND)
                                                </div>
                                                <div className="price-total">
                                                    ${this.currencyFormat(this.state.amount)}
                                                </div>

                                            </div>
                                        </div>
                                        <div className="container">
                                            <hr />
                                        </div>
                                        <div className="container footer-box-room">
                                            <div dangerouslySetInnerHTML={{ __html: this.state.room.PolicyCancel }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="bookingModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content" style={{ width: '88%' }}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Payment</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <button className="btn btn-primary" onClick={this.clickPaymentWithATM}><b> Payment with ATM</b></button>
                                            ---OR---
                                            <button className="btn btn-primary" onClick={this.clickPaymentWithNoATM}><b> Payment with Credit Card</b></button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            )
        } else {
            return (<div></div>)
        }
    }
}

export default ReviewHouse