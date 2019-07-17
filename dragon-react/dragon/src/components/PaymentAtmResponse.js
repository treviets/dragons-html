import React, { Component } from 'react'
import '../assets/css/profile.css';
import "react-datepicker/dist/react-datepicker.css";
import paymentService from "../services/payment";
import BookingService from '../services/booking';


class PaymentAtmResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handlePaymentATMResponse = this.handlePaymentATMResponse.bind(this)
    }
    componentDidMount() {
        console.log('componentDidMount -- BOOKING', booking)

        var booking = JSON.parse(localStorage.getItem('booking'));
        // booking.TransactionNumber = res.TransactionNumber;
        // Url from OnePay
        var url = window.location.search;
        console.log('URL------', url);
        this.handlePaymentATMResponse(url);
    }

    async handlePaymentATMResponse(url) {
        const res = await paymentService.checkPaymentATM(url);
        console.log("RES--", res)
        if (res && res.Status === 'OK') {
            // Thanh toan thanh cong, Tao booking
            console.log(res.Data);

            console.log('GET LOCALSTORAGE');
            console.log(localStorage);

            var booking = JSON.parse(localStorage.getItem('booking'));
            booking.TransactionNumber = res.TransactionNumber;

            console.log('BOOKING', booking)
            // var transactionNumber = res.TransactionNumber;
            //BookingService
            console.log("Response here: " + "Thanh toan thanh cong");
            alert(res.Message);
        } else {
            // Thanh toan that bai
            console.log("Response here: " + "Thanh toan that bai");
        }
    }

    render() {
        return (
            <div className="page-container-responsive space-top-4 space-4">
                <h1>Receive response from OnePay</h1>
                <p>Receive response from OnePay</p>
            </div >
        )
    }
}

export default PaymentAtmResponse;
