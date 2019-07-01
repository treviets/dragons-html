import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../assets/js/index'
import '../assets/css/header.css'
import 'react-datepicker/dist/react-datepicker.css'
import $ from "jquery";
import Googlegg from '../components/Google';
import { connect } from 'react-redux';
import { loginUser, saveCreds, logoutUser } from '../actions/auth';
import '../assets/fonts/font-css.css';
import { signUp } from '../actions/signUpAction';
import Facebook from '../components/Facebook'


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
        this.onLogout = this.onLogout.bind(this);

    }
    onLogout() {
        if (this.props.isAuthenticated) {
            this
                .props
                .logoutUser()
        }
    };

    handeChage(event) {
        this.setState({
            select: event.target.value,
        });
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    handleChangeMonth = (selectedMonth) => {
        this.setState({ selectedMonth });
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

    async signUpAccount() {
        var formData = new FormData();
        formData.append("Firstname", this.refs.firstname.value);
        formData.append("Lastname", this.refs.lastname.value);
        formData.append("Password", this.refs.password.value);
        formData.append("Email", this.refs.email.value);
        this.props.handleSignUp(formData);
        $('#buttonCloseSignUp').click();
    };
    async signInAccount() {
        var formData = new FormData();
        formData.append("Email", this.refs.emailLogin.value);
        formData.append("Password", this.refs.passwordLogin.value);
        this
            .props
            .handleLogin(formData)
    };

    componentDidMount() { }

    render() {
        const {
            selectedOption,
            selectedMonth
        } = this.state;
        if (this.props.isAuthenticated) {
            this.props.setToken(localStorage.getItem('accessToken'))
        }
        return (
            <div  >
                <nav className="navbar navbar-expand-lg bg-blue" id="header" >
                    <a className="navbar-brand" href="/">
                        <img className="logo-company" src="../../img/TDH-Web.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars" ></i>
                    </button>

                    <div className="collapse navbar-collapse font-medium" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" />
                        <ul className="navbar-nav row-direction  font-medium" >
                            {
                                parseInt(localStorage.getItem('role')) === 1 ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/list/room">Room Management</Link>
                                    </li>
                                    : null
                            }
                            {
                                parseInt(localStorage.getItem('role')) === 1 ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/list/booking">Booking Management</Link>
                                    </li>
                                    : null
                            }
                            {
                                parseInt(localStorage.getItem('role')) === 1 ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin/list/transaction">Transaction Management</Link>
                                    </li>
                                    : null
                            }
                            {
                                (parseInt(localStorage.getItem('role')) !== 1 && localStorage.getItem('role') !== null) ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/list/transaction">History</Link>
                                    </li>
                                    : null
                            }
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

                {/*MODEL SIGN-UP*/}
                <div className="modal fade" id="signup-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <button type="buttonCloseSocial" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <div id='social-icons-conatainer'>
                                    <div>
                                        <div className="modal-social-icons">
                                            <Facebook />
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

                {/* FROM - REGISTER - INFO - BY - EMAIL */}
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

                {/*MODEL SIGN-IN*/}
                <div className="modal fade" id="login-modal-custom" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <button id="buttonCloseSocial" type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
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
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    //lay data tu store gan this.props cua component
    return { isAuthenticated: state.auth.isAuthenticated, accessToken: state.auth.accessToken, cusId: state.signUpReducers.cusId, isFetching: state.signUpReducers.isFetching }
};

const mapDispatchToProps = (dispatch) => {
    //action
    return {
        handleLogin: (creds) => dispatch((loginUser(creds))),
        setToken: (token) => dispatch(saveCreds(token)),
        logoutUser: () => dispatch(logoutUser()),
        handleSignUp: (creds) => dispatch(signUp(creds)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
