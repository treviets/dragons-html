import React, { Component } from 'react'
// import $ from "jquery";
import '../assets/css/profile.css';
import service from '../services/signup.js';
import { connect } from 'react-redux';
import language from '../masterData/language.json'
import moment, { lang } from 'moment';
import { Link, Redirect } from 'react-router-dom'





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
            birthDate: '',
            emailAddress: '',
            phone: '',
            hometown: '',
            desc: '',
            workEmail: '',
            school: '',
            work: '',
            showPassWord: true,
            pass: '',
        }

        this.getInfoCustomer = this.getInfoCustomer.bind(this);
        this.handeChangeLanguage = this.handeChangeLanguage.bind(this);
        this.handeChangeCurrency = this.handeChangeCurrency.bind(this)
        this.updateInfo = this.updateInfo.bind(this)


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
    async updateInfo() {
        // this.setState({
        //     showHomepage: true
        // })
        console.log(this.state)
        var cus = {
            Id: this.state.cusId,
            // Id: 1,
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.emailAddress,
            Password: "123123123",
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
        const res = await service.updateInfoDetailCustomer(obj)
        //console.log(res)


    }
    async getInfoCustomer() {
        var cusId = localStorage.getItem("cusId")
        console.log("cusId localStorage", cusId)
        const res = await service.getInfoDetailCustomer(cusId);

        var item = res.Data

        var customer = item.Customer
        var dateString = moment.unix(customer.DateOfBirth / 1000).utc();

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
            birthDate: dateString,
            phone: customer.Phone,
            address: customer.Hometown,
        })
        // var day = dateString.date();
        // var month = dateString.month() + 1;
        // var year = dateString.year();
        // alert(year)
        console.log("Object Info", this.state.customer)
        // console.log("Language", this.state.language)
        console.log("Currency", this.state.currency)

    }
    render() {
        // 
        return (
            <div className="page-container-responsive space-top-4 space-4">
                <br />
                <div className="row edit-profile">
                    <div className="col-sm-3 space-sm-4">
                        <div className="sidenav">
                            <ul className="sidenav-list">
                                <li>
                                    <a href="#" aria-selected="true" className="sidenav-item">Edit Profile</a>
                                    {/* <a href="https://www.airbnb.com/users/edit/237420104" aria-selected="true" className="sidenav-item">Edit Profile</a> */}
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
                                        <fieldset>
                                            {/* <legend className="screen-reader-only">Birthday</legend> */}
                                            <div className="select">
                                                <select aria-label="Month" id="user_birthdate_2i" name="birthDate">
                                                    {/* <select value={this.props.Selected}>
                                                        {
                                                            this.state.currency.map(function (item) {
                                                                return <option value={this.state.currency.Name}>{this.state.currencyitem.Name}</option>;
                                                            })
                                                        }
                                                    </select>); */}
                                                    <option value="">Month</option>
                                                    <option selected="selected" value="1">January</option>
                                                    <option value="2">February</option>
                                                    <option value="3">March</option>
                                                    <option value="4">April</option>
                                                    <option value="5">May</option>
                                                    <option value="6">June</option>
                                                    <option value="7">July</option>
                                                    <option value="8">August</option>
                                                    <option value="9">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </div>
                                            <div className="select">
                                                <select aria-label="Day" id="user_birthdate_3i" name="user[birthdate(3i)]">
                                                    <option value="">Day</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option selected="selected" value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </select>

                                            </div>
                                            <div className="select">
                                                <select aria-label="Year" id="user_birthdate_1i" name="user[birthdate(1i)]">
                                                    <option value="">Year</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="1999">1999</option>
                                                    <option value="1998">1998</option>
                                                    <option value="1997">1997</option>
                                                    <option value="1996">1996</option>
                                                    <option selected="selected" value="1995">1995</option>
                                                    <option value="1994">1994</option>
                                                    <option value="1993">1993</option>
                                                    <option value="1992">1992</option>
                                                    <option value="1991">1991</option>
                                                    <option value="1990">1990</option>
                                                    <option value="1989">1989</option>
                                                    <option value="1988">1988</option>
                                                    <option value="1987">1987</option>
                                                    <option value="1986">1986</option>
                                                    <option value="1985">1985</option>
                                                    <option value="1984">1984</option>
                                                    <option value="1983">1983</option>
                                                    <option value="1982">1982</option>
                                                    <option value="1981">1981</option>
                                                    <option value="1980">1980</option>
                                                    <option value="1979">1979</option>
                                                    <option value="1978">1978</option>
                                                    <option value="1977">1977</option>
                                                    <option value="1976">1976</option>
                                                    <option value="1975">1975</option>
                                                    <option value="1974">1974</option>
                                                    <option value="1973">1973</option>
                                                    <option value="1972">1972</option>
                                                    <option value="1971">1971</option>
                                                    <option value="1970">1970</option>
                                                    <option value="1969">1969</option>
                                                    <option value="1968">1968</option>
                                                    <option value="1967">1967</option>
                                                    <option value="1966">1966</option>
                                                    <option value="1965">1965</option>
                                                    <option value="1964">1964</option>
                                                    <option value="1963">1963</option>
                                                    <option value="1962">1962</option>
                                                    <option value="1961">1961</option>
                                                    <option value="1960">1960</option>
                                                    <option value="1959">1959</option>
                                                    <option value="1958">1958</option>
                                                    <option value="1957">1957</option>
                                                    <option value="1956">1956</option>
                                                    <option value="1955">1955</option>
                                                    <option value="1954">1954</option>
                                                    <option value="1953">1953</option>
                                                    <option value="1952">1952</option>
                                                    <option value="1951">1951</option>
                                                    <option value="1950">1950</option>
                                                    <option value="1949">1949</option>
                                                    <option value="1948">1948</option>
                                                    <option value="1947">1947</option>
                                                    <option value="1946">1946</option>
                                                    <option value="1945">1945</option>
                                                    <option value="1944">1944</option>
                                                    <option value="1943">1943</option>
                                                    <option value="1942">1942</option>
                                                    <option value="1941">1941</option>
                                                    <option value="1940">1940</option>
                                                    <option value="1939">1939</option>
                                                    <option value="1938">1938</option>
                                                    <option value="1937">1937</option>
                                                    <option value="1936">1936</option>
                                                    <option value="1935">1935</option>
                                                    <option value="1934">1934</option>
                                                    <option value="1933">1933</option>
                                                    <option value="1932">1932</option>
                                                    <option value="1931">1931</option>
                                                    <option value="1930">1930</option>
                                                    <option value="1929">1929</option>
                                                    <option value="1928">1928</option>
                                                    <option value="1927">1927</option>
                                                    <option value="1926">1926</option>
                                                    <option value="1925">1925</option>
                                                    <option value="1924">1924</option>
                                                    <option value="1923">1923</option>
                                                    <option value="1922">1922</option>
                                                    <option value="1921">1921</option>
                                                    <option value="1920">1920</option>
                                                    <option value="1919">1919</option>
                                                </select>

                                            </div>
                                        </fieldset>
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
                                {/* <div className="row row-condensed space-4">
                                    <label className="col-3">
                                        Phone Numbers
                                    </label>
                                    <div className="col-9">
                                        <style data-aphrodite="data-aphrodite" dangerouslySetInnerHTML={{ __html: "._pgfpyhv{color: #008489 !important;font:inherit !important;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;-webkit-text-decoration-line:none !important;-moz-text-decoration-line:none !important;text-decoration-line:none !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;background:transparent !important;border:0px !important;cursor:pointer !important;margin:0px !important;padding:0px !important;-webkit-user-select:auto !important;-moz-user-select:auto !important;-ms-user-select:auto !important;user-select:auto !important;text-align:left !important;}._pgfpyhv:hover{-webkit - text - decoration - line: underline !important;-moz-text-decoration-line:underline !important;text-decoration-line:underline !important;color:#008489 !important;}._pgfpyhv:focus{-webkit - text - decoration - line: underline !important;-moz-text-decoration-line:underline !important;text-decoration-line:underline !important;}@supports(--custom: properties){._pgfpyhv{color:var(--color-text-link, #008489) !important;font-family:var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;-webkit-text-decoration-line:var(--font-link-text-decoration-line, none) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line, none) !important;text-decoration-line:var(--font-link-text-decoration-line, none) !important;}._pgfpyhv:hover{-webkit - text - decoration - line: var(--font-link-text-decoration-line-hover, underline) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line-hover, underline) !important;text-decoration-line:var(--font-link-text-decoration-line-hover, underline) !important;color:var(--color-text-link-hover, #008489) !important;}._pgfpyhv:focus{-webkit - text - decoration - line: var(--font-link-text-decoration-line-focus, underline) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line-focus, underline) !important;text-decoration-line:var(--font-link-text-decoration-line-focus, underline) !important;}._pgfpyhv:active{color: var(--color-text-link-active, #006C70) !important;}}._pgfpyhv:active{color: #006C70 !important;outline:0px !important;}" }} />
                                        <div data-hypernova-key="edit_profilephone_numbersbundlejs" data-hypernova-id="1870cbb1-404d-4a62-a6c0-d8b1a607e24d"><div dir="ltr" data-reactroot><div style={{ marginTop: '9px' }}><div><strong>No phone number entered</strong><div style={{ marginTop: '4px' }}><div className="text-muted">This is so your hosts, guests, and Airbnb can contact you. We’ll send you booking requests, reminders, and other notifications.</div></div><div style={{ marginTop: '8px' }}><button type="button" className="_pgfpyhv" aria-busy="false">Add a phone number</button></div></div></div></div></div>
                                    </div>
                                </div> */}

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
                                {this.state.showPassWord ?
                                    <div className="row row-condensed space-4">
                                        <label className="col-3" >
                                            Mật khẩu
                                    </label>
                                        <div className="col-9">
                                            <input size="30" value={this.state.pass} onChange={this.onChange} name="pass" />
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


const mapStateToProps = (state) => {
    let store = state.signUpReducers
    console.log("GET STORE FROM PROFILE", store);
    console.log("this.props")
    return { cusId: store }
}
export default connect(mapStateToProps)(ProfileComponent);
