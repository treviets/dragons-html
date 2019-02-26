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






class ProfileComponent extends Component {
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
        }

        this.getInfoCustomer = this.getInfoCustomer.bind(this);
        this.handeChangeLanguage = this.handeChangeLanguage.bind(this);
        this.handeChangeCurrency = this.handeChangeCurrency.bind(this)
        this.updateInfo = this.updateInfo.bind(this)
        this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this);


    }
    //call function when loadpage
    componentWillMount(state) {
        this.getInfoCustomer();
    }
    handeChangeLanguage(event) {
        this.setState({ selectedLanguage: event.target.value })
    }
    handeChangeCurrency(event) {
        this.setState({ selectedCurrency: event.target.value })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };
    handleChangeBirthDate(date) {
        this.setState({
            birthDate: date
        });
    }
    async updateInfo() {
        var cus = {
            Id: this.state.cusId,
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.emailAddress,
            Password: this.state.pass,
            Phone: this.state.phone,
            Status: 1,
            Avatar: "",
            DateOfBirth: this.state.birthDate,
            PreferLanguage: this.state.selectedLanguage,
            PreferCurrency: this.state.selectedCurrency,
            Hometown: this.state.address,
            Introduction: this.state.desc,
            School: this.state.school,
            Work: this.state.work,
            WorkEmail: this.state.workEmail
        }
        var obj = {
            Customer: cus,
            EmergencyContact: [],
            Language: [],
            Currency: [],
            GuestProfile: []
        }
        console.log(cus)
        const res = await service.updateInfoDetailCustomer(obj)
        //console.log("res: ===",res)
        if (res.Status === "OK") {
            this.setState({
                backHome: true
            })
        } else {
            this.setState({
                erro: "Update Fail"
            })
        }
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
        })
        // var day = dateString.date();
        // var month = dateString.month() + 1;
        // var year = dateString.year();
        // alert(year)
        // console.log("Object Info", this.state.customer)
        // console.log("Language", this.state.language)
        // console.log("Currency", this.state.currency)

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
                                        <Link to="/update/profile">Edit Profile</Link>
                                        {/* <a href="#" aria-selected="true" className="sidenav-item">Edit Profile</a> */}
                                    </li>
                                    <li>
                                        <Link to="/update/photo">Photos</Link>
                                        {/* <a href="#" aria-selected="false" className="sidenav-item">Photos</a> */}
                                    </li>
                                    {/*<li>
                                    <a href="#" aria-selected="false" className="sidenav-item">Photos</a>

                                </li>
                                <li>
                                    <a href="#" aria-selected="false" className="sidenav-item">Trust and Verification</a>
                                </li>
                                <li>
                                    <a href="#" aria-selected="false" className="sidenav-item">Reviews</a>

                                </li>
                                <li>
                                    <a href="#" aria-selected="false" className="sidenav-item">References</a>
                                </li>
                               */}
                                    <div className="btnView">
                                        <a href="/users/show/237420104" className="btn btn-block space-top-4">View Profile</a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Required
                                </h2>
                                </div>
                                <div className="panel-body">
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            First Name
                                    </label>
                                        <div className="col-9">
                                            <input size="30" value={this.state.firstName} onChange={this.onChange} name="firstName" />
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Last Name
                                    </label>
                                        <div className="col-9">
                                            <input type="text" value={this.state.lastName} onChange={this.onChange} name="lastName" />
                                            <div className="text-muted space-top-1">
                                                Your public profile only shows your first name. When you request a booking, your host will see your first and last name.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3">
                                            I Am <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <div className="select">
                                                <select id="user_sex" name="user[sex]"><option value="" selected="selected">Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option></select>
                                            </div>
                                            <div className="text-muted space-top-1">We use this data for analysis and never share it with other users.</div>
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Birth Date  <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <DatePicker
                                                selected={this.state.birthDate}
                                                onChange={this.handleChangeBirthDate}
                                            />

                                            <div className="text-muted space-top-1">The magical day you were dropped from the sky by a stork. We use this data for analysis and never share it with other users.</div>
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3">
                                            Email Addresss  <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <input size="30" type="text" value={this.state.emailAddress} name="emailAddress" onChange={this.onChange} />
                                            <div className="text-muted space-top-1">
                                                We won’t share your private email address with other Airbnb users. Learn more.
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Preferred Language
                                    </label>
                                        <div className="col-9">
                                            <div className="select">
                                                <select className="border-none input-search cursorPointer" value={this.state.selectedLanguage} onChange={this.handeChangeLanguage}  >
                                                    {this.state.language.map(function (object, index) {
                                                        return <option value={object.Id} key={index}>{object.Name}</option>
                                                    })}
                                                </select>

                                            </div>
                                            <div className="text-muted space-top-1">We'll send you messages in this language.</div>
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Preferred Currency
                                    </label>
                                        <div className="col-9">
                                            <div className="select">
                                                <select className="border-none input-search cursorPointer" value={this.state.selectedCurrency} onChange={this.handeChangeCurrency}  >
                                                    {this.state.currency.map(function (object, index) {
                                                        return <option value={object.Id} key={index}>{object.Name}</option>
                                                    })}
                                                </select>
                                            </div>
                                            <div className="text-muted space-top-1">We’ll show you prices in this currency.</div>
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3">
                                            Where You Live
                                    </label>
                                        <div className="col-9">
                                            <input size={30} type="text" value={this.state.address} name="address" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3">
                                            Describe Yourself
                                    </label>
                                        <div className="col-9">
                                            <textarea cols={40} value={this.state.desc} rows={5} name="desc" onChange={this.onChange} />
                                            <div className="text-muted space-top-1">Airbnb is built on relationships. Help other people get to know you.<br /><br />Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.<br /><br />Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of Airbnb hosting?<br /><br />Tell them about you: Do you have a life motto?</div>
                                        </div>
                                    </div>
                                    {this.state.isSocial === "false" ?
                                        <div className="row row-condensed space-4">
                                            <label className="col-3" >
                                                Mật khẩu
                                    </label>
                                            <div className="col-9">
                                                <input size="30" value={this.state.pass} onChange={this.onChange} name="pass" type="password" />
                                            </div>
                                        </div>
                                        : null}
                                </div>
                            </div>
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Work Travel
                                </h2>
                                </div>
                                <div className="panel-body">
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Work Email <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <input size="30" type="text" value={this.state.workEmail} name="workEmail" onChange={this.onChange} />
                                            <div className="text-muted space-top-1">Find homes perfect for work trips by choosing the Trip type filter on your next search. Learn more</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Option
                                </h2>
                                </div>
                                <div className="panel-body">
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            School <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <input size="30" type="text" value={this.state.school} name="school" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Work <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <input size="30" type="text" value={this.state.work} name="work" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    {/* <div className="row row-condensed space-4">
                                    <label className="col-3" >
                                        Hometown <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                    </label>
                                    <div className="col-9">
                                        <input size="30" type="text" value={this.state.customer.Hometown} />
                                    </div>
                                </div> */}
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Phone <i aria-label="Private" className="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                        </label>
                                        <div className="col-9">
                                            <input size="30" type="text" value={this.state.phone} name="phone" onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-large" onClick={this.updateInfo}>Save</button>
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
    console.log("this.props")
    return { cusId: store }
}
export default connect(mapStateToProps)(ProfileComponent);
