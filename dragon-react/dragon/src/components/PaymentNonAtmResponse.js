import React, { Component } from 'react'
import '../assets/css/profile.css';
import "react-datepicker/dist/react-datepicker.css";
import paymentService from "../services/payment";

class PaymentNonAtmResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ""
        }
    }

    componentDidMount() {
        // Url from OnePay
        var url = window.location.search;

        this.handlePaymentNonATMResponse(url);
    }

    async handlePaymentNonATMResponse(url) {
        const res = await paymentService.checkPaymentNonATM(url);

        if (res && res.Status === 'OK') {
            // Thanh toan thanh cong
            console.log(res.Data);
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
                </div >
            )
        }
}

export default PaymentNonAtmResponse;
