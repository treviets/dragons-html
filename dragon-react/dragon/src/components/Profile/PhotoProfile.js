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
            socialAccount: null
        }

        this.getInfoCustomer = this.getInfoCustomer.bind(this);

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

    async getInfoCustomer() {
        var cusId = localStorage.getItem("cusId")
        const res = await service.getInfoDetailCustomer(cusId);

        console.log(res)

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
                                        <Link to="/update/profile">Edit Profile</Link>
                                        {/* <a href="#" aria-selected="true" className="sidenav-item">Edit Profile</a> */}
                                    </li>
                                    <li>
                                        <Link to="/update/profile">Photos</Link>
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
                                        <a href="/users/show/237420104" className="btn btn-block space-top-4">Photo</a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="panel space-4">
                                <div className="panel-header">
                                    <h2 className="edit-profile-section-heading">
                                        Profile Photo
                                    </h2>
                                </div>
                                <div className="panel-body photos-section">
                                    <div className="row">
                                        <div className="col-lg-4 text-center">
                                            <div className="profile_pic_container picture-main space-sm-2 space-md-2">
                                                <div className="media-photo profile-pic-background">
                                                    {this.state.socialAccount === null ?
                                                        <img alt="Tran" height="225" src="../img/customer.png" title="Tran" width="225" />
                                                        :
                                                        <img alt="Tran" height="225" src={this.state.socialAccount.img} title="Tran" width="225" />

                                                    }



                                                    {/* <img alt="Tran" height="225" src="https://a0.muscache.com/im/pictures/user/ed45f966-ca3d-4b13-8e45-8aa8c07e60ff.jpg?aki_policy=profile_x_medium" title="Tran" width="225" /> */}
                                                    {/* <img alt="Tran" height="225" src="../img/customer.png" title="Tran" width="225" /> */}

                                                </div>
                                            </div>
                                            {/* <img src="https://lh6.googleusercontent.com/--8RE7QbEgDY/AAAAAAAAAAI/AAAAAAAAArY/zW6oj1O9DiQ/s96-c/photo.jpg" alt="Logo" /> */}
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="photo-info">
                                                <br />
                                                <p>
                                                    Clear frontal face photos are an important way for hosts and guests to learn about each other. It’s not much fun to host a landscape! Be sure to use a photo that clearly shows your face and doesn’t include any personal or sensitive info you’d rather not have hosts or guests see.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
export default connect(mapStateToProps)(ProfileComponent);
