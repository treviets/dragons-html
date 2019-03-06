import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../assets/js/index'
import '../assets/css/header.css'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select';
import axios from 'axios';
import service from '../services/signup.js';
import $ from "jquery";
import Googlegg from '../components/Google';
import { connect } from 'react-redux';
import { loginUser, saveCreds, logoutUser } from '../actions/auth';
import '../assets/fonts/font-css.css';
import { signUp } from '../actions/signUpAction';
import Profile from '../components/Profile/Profile';
import Facebook from '../components/Facebook'







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
            isLogin: false,
            cusId: null,

        };
        this.handeChage = this.handeChage.bind(this);
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
        this.signUpAccount = this.signUpAccount.bind(this);
        this.signInAccount = this.signInAccount.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onLogout = this.onLogout.bind(this);



    }
    onLogout() {
        if (this.props.isAuthenticated) {
            this
                .props
                .logoutUser()
        }
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

    onSignIn(googleUser) {
        alert("check")
        console.log("nnnnnnnnn")
        // Useful data for your client-side scripts:
    }

    async signUpAccount() {
        var formData = new FormData();
        formData.append("Firstname", this.refs.firstname.value);
        formData.append("Lastname", this.refs.lastname.value);
        formData.append("Password", this.refs.password.value);
        formData.append("Email", this.refs.email.value);
        this.props.handleSignUp(formData);


        // var res = await service.signUpCustomer(formData);

        // console.log("resData", res)
        // if (res.Status !== "OK") {
        //     alert(res.Message)
        // } else {
        $('#buttonCloseSignUp').click();
        // }
    };
    async signInAccount() {
        var formData = new FormData();
        formData.append("Email", this.refs.emailLogin.value);
        formData.append("Password", this.refs.passwordLogin.value);

        // var res = await service.signInCustomer(formData);
        this
            .props
            .handleLogin(formData)

        // if (!localStorage.getItem('accessToken')) {
        //     alert("Đăng nhập không thành công")
        // } else {

        //     $('#buttonClose').click();
        //     this.setState({isLogin:true})
        // }
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
        if (this.props.isAuthenticated) {
            this
                .props
                .setToken(localStorage.getItem('accessToken'))
            // window.location.replace('/')
            // this.props.history.push('/');
        }
        // if (this.props.cusId !== null && this.props.isFetching !== true) {
        //     return <Redirect to="/update/profile" />
        // } else {
        return (
            <div  >
                <nav className="navbar navbar-expand-lg bg-blue" id="header" >
                    <a className="navbar-brand" href="/">
                        {/* <img className="logo-company" src="../img/icondragon.jpg" /> */}
                        <img className="logo-company" src="../img/TDH-Web.png" />

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars" ></i>
                    </button>

                    <div className="collapse navbar-collapse font-medium" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <ul className="navbar-nav row-direction  font-medium" >

                            <li className="nav-item">
                                <a className="nav-link" href="/">Become a host</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Help</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="fa fa-globe header-icon-style"></span>
                                </a>
                            </li> */}

                            {
                                localStorage.getItem('accessToken') ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/update/profile">Account</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <button id="btn-login" className="btn btn-default my-2 my-sm-0 btn-login" type="submit" data-toggle="modal" data-target="#login-modal-custom">Log in</button>

                                    </li>

                            }
                            {
                                localStorage.getItem('accessToken') ?
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" onClick={this.onLogout}>Log out</a>
                                    </li>
                                    : <li className="nav-item">
                                        <button className="btn btn-default my-2 my-sm-0 btn-sign-up" type="submit" data-toggle="modal" data-target="#signup-modal">Sign up</button>
                                    </li>
                            }
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
                                <button type="buttonCloseSocial" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div className=''>
                                        <div className="modal-social-icons">
                                            <Facebook />
                                            {/* <a href='#' className="btn btn-default facebook">
                                                <i className="fa fa-facebook modal-icons"></i> Continue with Facebook
                                            </a> */}
                                            <Googlegg />
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
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <button id="buttonCloseSocial" type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>

                            <div className="modal-body login-modal">
                                {/* <a href='#' className="btn btn-default facebook">
                                    <i className="fa fa-facebook modal-icons">
                                    </i>  Login with Facebook
                                </a> */}
                                <Facebook />


                                <Googlegg />
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
const mapStateToProps = (state) => {
    //lay data tu store gan this.props cua component
    console.log("store", state);
    return { isAuthenticated: state.auth.isAuthenticated, accessToken: state.auth.accessToken, cusId: state.signUpReducers.cusId, isFetching: state.signUpReducers.isFetching }
}

const mapDispatchToProps = (dispatch) => {
    //action
    return {
        handleLogin: (creds) => dispatch((loginUser(creds))),
        setToken: (token) => dispatch(saveCreds(token)),
        logoutUser: () => dispatch(logoutUser()),
        handleSignUp: (creds) => dispatch(signUp(creds)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
