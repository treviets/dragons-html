import React, { Component } from 'react'
// import $ from "jquery";
import '../../assets/css/profile.css';
import service from '../../services/signup.js';
import { connect } from 'react-redux';
import language from '../../masterData/language.json'
import moment, { lang } from 'moment';
import { Link, Redirect } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class TrustAndVerify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cusId: null,
            customer: Object,
            currency: [],
            language: [],
            selectedLanguage: 0,
            selectedMonth: 0,
            selectedDay: 0,
            SelectedYear: 0,
            optionMonth: [],
            optionDay: [],
            firstName: '',
            lastName: '',
            gender: 1,
            birthDate: new Date(),
            emailAddress: '',
            phone: '',
            hometown: '',
            desc: '',
            workEmail: '',
            school: '',
            work: '',
            isSocial: localStorage.getItem('isSocial'),
            pass: '',
            backHome: false,
            erro: '',
            socialAccount: null
        }

        this.getInfoCustomer = this.getInfoCustomer.bind(this);

    }
    //call function when loadpage
    componentWillMount(state) {
        this.getInfoCustomer();
    }


    async getInfoCustomer() {
        var cusId = localStorage.getItem("cusId")
        const res = await service.getInfoDetailCustomer(cusId);

        var item = res.Data

        var customer = item.Customer
        var dateString = moment.unix(customer.DateOfBirth / 1000).utc();
        // alert(dateString.format('L'))
        // alert(moment.unix(customer.DateOfBirth / 1000).utc().format('L'))

        console.log("info")
        this.setState({
            customer: item.Customer,
            language: item.Language,
            currency: item.Currency,
            cusId: cusId,
            selectedLanguage: customer.PreferLanguage,
            selectedCurrency: customer.PreferCurrency,
            firstName: customer.FirstName,
            lastName: customer.LastName,
            work: customer.Work,
            desc: customer.Introduction,
            emailAddress: customer.Email,
            workEmail: customer.WorkEmail,
            school: customer.School,
            birthDate: Date.parse(dateString),
            phone: customer.Phone,
            address: customer.Hometown,
            socialAccount: item.SocialLinkAccount,
        })

    }
    render() {
        if (this.state.backHome === true) {
            return <Redirect to="/" />
        } else {
            return (
                <div className="page-container-responsive space-top-4 space-4">
                    <br />
                    <div className="row edit-profile">
                        <div className="col-sm-3 space-sm-4">
                            <div className="sidenav">
                                <ul className="sidenav-list">
                                    <li>
                                        <Link to="/update/profile" className="sidenav-item">Edit Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/update/profile" className="sidenav-item">Photos</Link>
                                    </li>
                                    <li>
                                        <Link to="/update/verify" className="sidenav-item">Trust and Verification</Link>
                                    </li>
                                    <div className="btnView">
                                        <Link to="/view/profile" className="btn btn-block space-top-4">View Profile</Link>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Your verified info
                                    </h2>
                                </div>
                                <div className="panel-body">
                                    <ul className="info-email-box">
                                        <li>
                                            <h4>Email address</h4>
                                            <p className="description">You have confirmed your email: <b>{this.state.emailAddress}</b>.
                                            A confirmed email is important to allow us to securely communicate with you.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Your social accounts */}
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Your social accounts
                                    </h2>
                                </div>
                                <div className="panel-body">
                                    <ul className="info-email-box">
                                        <li>
                                            <h4>Phone number</h4>
                                            <p className="description">Make it easier to communicate with a verified phone number. We’ll send you a code by SMS or read it to you over the phone. Enter the code below to confirm that you’re the person on the other end.</p>
                                            <p className="description">Your number is only shared with another Airbnb member once you have a confirmed booking.</p>
                                        </li>
                                        <li class="facebook1 unverified space-4 clearfix">
                                            <h4>Facebook</h4>
                                            <div class="row">
                                                <div class="col-7">
                                                    <p class="description verification-text-description">
                                                        Sign in with Facebook and discover your trusted connections to hosts and guests all over the world.
                                                    </p>
                                                </div>

                                                <div class="col-5">
                                                    <div class="connect-button">
                                                        <a href="https://www.facebook.com/v2.0/dialog/oauth?client_id=138566025676&amp;redirect_uri=https%3A%2F%2Fwww.airbnb.com%2Fusers%2Fpopulate_from_facebook&amp;scope=email%2Cuser_birthday%2Cuser_likes%2Cuser_hometown%2Cuser_location%2Cuser_friends&amp;state=redirect_params%5Baction%5D%3Dedit_verification%26redirect_params%5Bcontroller%5D%3Dusers%26redirect_params%5Bid%5D%3D237420104" class="btn btn-block large facebook-button" data-populate_uri="https://www.airbnb.com/users/populate_from_facebook?from=edit_verification" data-redirect_uri="https://www.airbnb.com/users/populate_from_facebook">Connect</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            )
        }
    }
}


const mapStateToProps = (state) => {
    let store = state.signUpReducers
    console.log("GET STORE FROM PROFILE", store);
    return { cusId: store }
}
export default connect(mapStateToProps)(TrustAndVerify);
