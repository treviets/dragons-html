import React, { Component } from 'react'
import '../assets/css/profile.css';

import "react-datepicker/dist/react-datepicker.css";


class PaymentAtmResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
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

export default PaymentAtmResponse;
