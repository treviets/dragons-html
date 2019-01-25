import React, { Component } from 'react';

import '../assets/js/index'
import '../assets/css/header.css'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select';
import axios from 'axios';
import service from '../services/signup.js';
import $ from "jquery";



const optionsMonth = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
];
class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select: "",
            startDate: null,
            endDate: null,
            selectedOption: null,
            optionsMonth: [],
            selectedMonth: null,
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            emailLogin: "",
            passwordLogin: "",

        };
        this.handeChage = this.handeChage.bind(this);
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.signUpAccount = this.signUpAccount.bind(this);
        this.signInAccount = this.signInAccount.bind(this);
        this.onSignIn = this.onSignIn.bind(this);


    }

    handeChage(event) {
        this.setState({
            select: event.target.value,
        });
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    handleChangeMonth = (selectedMonth) => {
        this.setState({ selectedMonth });
        console.log(`Option selected:`, selectedMonth);
    };
    handleChangeFromTime(date) {
        this.setState({
            startDate: date,
        });
    };
    handleChangeToTime(date) {
        this.setState({
            endDate: date,
        });
    };
    async onSignIn(googleUser) {
        // alert("check")
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        // console.log('Full Name: ' + profile.getName());
        // console.log('Given Name: ' + profile.getGivenName());
        // console.log('Family Name: ' + profile.getFamilyName());
        // console.log("Image URL: " + profile.getImageUrl());
        // console.log("Email: " + profile.getEmail());
        // ID: 115481369181782633322
        // google.html: 14 Full Name: Tran Thoai
        // google.html: 15 Given Name: Tran
        // google.html: 16 Family Name: Thoai
        // google.html: 17 Image URL: https://lh6.googleusercontent.com/-_5XQ19IoO0c/AAAAAAAAAAI/AAAAAAAAA8A/iJIrspT8tsQ/s96-c/photo.jpg
        // google.html: 18 Email: tranthoai142@gmail.com

        var formData = new FormData();
        formData.append("Fullname", profile.getName());
        formData.append("Googleid", profile.getId());
        formData.append("Email", profile.getEmail());
        formData.append("Lastname", profile.getFamilyName());
        formData.append("Firstname", profile.getGivenName());
        formData.append("Avatar", profile.getImageUrl());



        // formData.append("Fullname", "Tran Thoai");
        // formData.append("Googleid", "115481369181782633322");
        // formData.append("Email", "tranthoai142@gmail.com");
        // formData.append("Lastname", "Thoai");
        // formData.append("Firstname", "Tran");
        // formData.append("Avatar", "https://lh6.googleusercontent.com/-_5XQ19IoO0c/AAAAAAAAAAI/AAAAAAAAA8A/iJIrspT8tsQ/s96-c/photo.jpg");



        // The ID token you need to pass to your backend:
        // var id_token = googleUser.getAuthResponse().id_token;
        // console.log("ID Token: " + id_token);

        var res = await service.signUpBySocial(formData);
        console.log(res)
        if (res.Status !== "OK") {
            alert("Login again please!")
        } else {
            $('#buttonClose').click();
        }
    }

    async signUpAccount() {

        var formData = new FormData();
        formData.append("Firstname", this.refs.firstname.value);
        formData.append("Lastname", this.refs.lastname.value);
        formData.append("Password", this.refs.password.value);
        formData.append("Email", this.refs.email.value);

        var res = await service.signUpCustomer(formData);

        console.log(res)
        if (res.Status !== "OK") {
            alert(res.Message)
        } else {
            $('#buttonCloseSignUp').click();
        }
    };
    async signInAccount() {
        var formData = new FormData();
        formData.append("Email", this.refs.emailLogin.value);
        formData.append("Password", this.refs.passwordLogin.value);

        var res = await service.signInCustomer(formData);

        console.log(res)
        if (res.Status !== "OK") {
            alert(res.Message)
        } else {
            $('#buttonClose').click();
        }
    };



    componentDidMount() {
        // Jquery here $(...)...
        // var nav = $("#menu-header");
        // $(window).scroll(function () {
        //     if ($(this).scrollTop() > 0) {
        //         nav.removeClass("banner");
        //         nav.addClass("f-nav");
        //     } else {
        //         nav.addClass("banner");
        //         nav.removeClass("f-nav");
        //     }
        // });

    }
    render() {

        const {
            selectedOption,
            selectedMonth
        } = this.state;
        return (
            <div  >
                <nav className="navbar navbar-expand-lg bg-blue" id="header" >
                    <div className="header-icon">
                        {/* <img src="img/fb.png" style="height: 35px;"/> */}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars" ></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav row-direction" style={{ textAlign: 'center', width: '100%' }}>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Become a host</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-globe header-icon-style"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="modal" data-target="#contact-modal">Contact</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-default my-2 my-sm-0 btn-login" type="submit" data-toggle="modal" data-target="#login-modal-custom">Log in</button>

                            </li>
                            <li className="nav-item">
                                <button className="btn btn-default my-2 my-sm-0 btn-sign-up" type="submit" data-toggle="modal" data-target="#signup-modal">Sign up</button>
                            </li>
                        </ul>

                    </div>

                </nav>

                <div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">

                                <h2 className="modal-title" id="myModalLabel">Login to Your Account</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <p>Awesome Popup Modal</p>
                                <br />
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div className='modal-body-left'>
                                        <div className="form-group">
                                            <input type="text" id="username" placeholder="Enter your name" className="form-control login-field" />
                                            <i className="fa fa-user login-field-icon"></i>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="login-pass" placeholder="Password" className="form-control login-field" />
                                            <i className="fa fa-lock login-field-icon"></i>
                                        </div>

                                        <a href="#" className="btn btn-success modal-login-btn">Login</a>
                                        <a href="#" className="login-link text-center">Lost your password?</a>
                                    </div>

                                    <div className='modal-body-right'>
                                        <div className="modal-social-icons">
                                            <a href='#' className="btn btn-default facebook"> <i className="fa fa-facebook modal-icons"></i> Sign In with Facebook </a>
                                            <a href='#' className="btn btn-default twitter"> <i className="fa fa-twitter modal-icons"></i> Sign In with Twitter </a>
                                            <a href='#' className="btn btn-default google"> <i className="fa fa-google-plus modal-icons"></i> Sign In with Google </a>
                                            <a href='#' className="btn btn-default linkedin"> <i className="fa fa-linkedin modal-icons"></i> Sign In with Linkedin </a>
                                        </div>
                                    </div>
                                    <div id='center-line'> OR </div>
                                </div>
                                <div className="clearfix"></div>

                                <div className="form-group modal-register-btn">
                                    <button className="btn btn-default" data-dismiss="modal" data-toggle="modal" data-target="#register-modal"> New User Please Register</button>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="modal-footer login_modal_footer">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="signup-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div className=''>
                                        <div className="modal-social-icons">
                                            <a href='#' className="btn btn-default facebook">
                                                <i className="fa fa-facebook modal-icons"></i> Continue with Facebook
                                            </a>
                                            <a href='#' className="btn btn-default google">
                                                <i className="fa fa-google-plus modal-icons"></i> Continue with Google
                                            </a>
                                        </div>
                                        <div className="conatainer divhr">
                                            <p >or</p>
                                        </div>
                                        <div className="modal-social-icons">
                                            <a href='#' className="btn btn-default email" data-dismiss="modal" data-toggle="modal" data-target="#register-modal">
                                                <i className="fa fa-envelope-o modal-icons" /> Sign up with Email
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="login-modal-custom" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <button id="buttonClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <div id='social-icons-conatainer'>
                                    <div className=''>
                                        <div className="modal-social-icons">
                                            <a href='#' className="btn btn-default facebook">
                                                <i className="fa fa-facebook modal-icons"></i> Continue with Facebook
                                            </a>
                                            <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>

                                            <a href='#' className="btn btn-default google">
                                                {/* <div className="g-signin2" data-onsuccess="onSignIn">AAAAA</div> onClick={this.onSignIn}*/}
                                                <i className="fa fa-google-plus modal-icons"></i> Continue with Google
                                            </a>

                                            {/* <button onClick={this.onSignIn}>SignUpBYSOCIAL</button> */}

                                        </div>

                                        <div className="conatainer divhr">
                                            <p >or</p>
                                        </div>
                                        <div className="modal-body login-modal">
                                            <div id='social-icons-conatainer'>
                                                <div >
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Email address" name="emailLogin" ref="emailLogin" className="form-control login-field" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" placeholder="Password" ref="passwordLogin" name="passwordLogin" className="form-control login-field" />
                                                    </div>
                                                    <button className="btn modal-login-btn" onClick={this.signInAccount}>Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="contact-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <h2 className="modal-title" id="myModalLabel">Contact us</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">

                                <div id='social-icons-conatainer'>
                                    <div >
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter your name" className="form-control login-field" />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" placeholder="Enter your email" className="form-control login-field" />

                                        </div>
                                        <div className="form-group">
                                            <input placeholder="Enter your phone" ref="email" className="form-control login-field" />

                                        </div>
                                        <div className="form-group">
                                            <input placeholder="Enter your address" ref="email" className="form-control login-field" />
                                        </div>
                                        <div className="form-group">
                                            <textarea rows="5" placeholder="Enter your message" className="form-control login-field"></textarea>
                                        </div>

                                        <a href="#" className="btn btn-success modal-login-btn">SUBMIT</a>
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                            <div className="modal-footer login_modal_footer">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="register-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="more_info">Sign up with
                                    <span> Facebook</span> or
                                    <span> Google</span>
                                </span>
                                <button type="button" id="buttonCloseSignUp" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <div id='social-icons-conatainer'>
                                    <div >
                                        <div className="form-group">
                                            <input type="text" placeholder="Email address" name="email" ref="email" className="form-control login-field" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="First name" name="firstname" ref="firstname" className="form-control login-field" />
                                        </div>
                                        <div className="form-group">
                                            <input placeholder="Last name" name="lastname" ref="lastname" className="form-control login-field" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Create a Password" ref="password" name="password" className="form-control login-field" />
                                        </div>

                                        <button className="btn modal-login-btn" onClick={this.signUpAccount}>Sign up</button>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="modal-footer login_modal_footer">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default PageHeader