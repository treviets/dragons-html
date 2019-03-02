import React, { Component } from 'react'
// import $ from "jquery";
import '../../assets/css/profile.css';
import service from '../../services/signup.js';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cusId: null,
            customer: Object,
            currency: [],
            language: [],
            emailAddress: '',
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
            address: customer.Hometown,
            socialAccount: item.SocialLinkAccount,
        })

    }
    render() {
        if (this.state.backHome === true) {
            return <Redirect to="/" />
        } else {
            return (
                <div className="page-container page-container-responsive space-top-4 space-8 viewProfile">
                    <br />
                    <div className="row">
                        <div className="col-lg-3 col-md-4 hide-sm">
                            <div id="user" className="space-4 ">
                                <div>
                                    <div className="space-2" id="user-media-container">
                                        <div id="slideshow" className="slideshow">
                                            <ul className="slideshow-images">
                                                <li className="active media-photo media-photo-block">
                                                    {this.state.socialAccount === null ?
                                                        <img alt="Tran" height="225" src="../img/customer.png" title="Tran" width="225" className="img-responsive" />
                                                        :
                                                        <img alt="Tran" height="225" src={this.state.socialAccount.img} title="Tran" width="225" className="img-responsive" />
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel space-4">
                                <div className="panel-header">
                                    Verified info
                                </div>
                                <div className="panel-body">
                                    <ul className="list-unstyled space-3" title="Verified info">
                                        <li className="row row-table space-2">
                                            <div className="col-12 col-middle">
                                                Email address
                                            </div>
                                            <div className="col-3 col-middle">
                                                <i className="fa fa-check-circle-o icon h3" aria-hidden="true"></i>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="">
                                        Verify more info
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-sm-12">
                            <div class="row space-4">

                                <div class="col-sm-8 col-md-12 col-lg-12">
                                    <h1>
                                        Hey, I’m {this.state.lastName}!
                                    </h1>
                                    {/* <div class="h5 space-top-2">
                                        <a href="/s/VN" class="link-reset">VN</a>
                                        <span class="text-normal">
                                            Joined in January 2019
                                        </span>
                                    </div> */}
                                    <i class="fa fa-flag-o" aria-hidden="true">
                                    </i>
                                    <span class="report">
                                        Report this user
                                    </span>

                                    <div class="edit_profile_container space-3">
                                        <Link className="nav-link" to="/update/profile">Edit Profile</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="space-top-2">
                                <p></p>
                            </div>



                            <div class="show-sm">

                            </div>

                            <div class="social_connections_and_reviews">

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
export default connect(mapStateToProps)(ViewProfile);
