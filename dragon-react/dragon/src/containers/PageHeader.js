import React, {Component} from 'react';

import '../assets/js/index'
import '../assets/css/header.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            select:"",
            startDate: null,
            endDate: null,
        };
        this.handeChage =  this.handeChage.bind(this)
        this.handleChangeFromTime = this.handleChangeFromTime.bind(this);
        this.handleChangeToTime = this.handleChangeToTime.bind(this);


    }
    handeChage(event){
        this.setState({
            select: event.target.value,
        });
    }
    handleChangeFromTime(date) {
        this.setState({
            startDate: date,
        });
    }
    handleChangeToTime(date){
        this.setState({
            endDate:date,
        });
    }
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
        return (
            <div  >
                <nav className="navbar navbar-expand-lg bg-blue"id="header" >
                    <div className="header-icon">
                        {/* <img src="img/fb.png" style="height: 35px;"/> */}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-label="Toggle navigation">
                        <i className="fa fa-bars" ></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav row-direction" style={{textAlign: 'center',width: '100%'}}>
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
                                    <a className="nav-link" href="#"  data-toggle="modal" data-target="#contact-modal">Contact</a>
                                </li>
                            <li className="nav-item">
                                <button  className="btn btn-default my-2 my-sm-0 btn-login" type="submit" data-toggle="modal" data-target="#login-modal">Log in</button> 
                                
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-default my-2 my-sm-0 btn-sign-up" type="submit"  data-toggle="modal" data-target="#signup-modal">Sign up</button>
                            </li>
                        </ul>

                    </div>
                    
                </nav>
                <div id="header-search"  className="banner menu-header" >
                    <img src="img/banner-travel-insurance-2000x400.jpg" className="banner-menu" ></img>
                    <div className="card-search">
                        <div className="search-home">
                            <div className="col-md-12 col-sm-12 col-init" style={{fontSize: '15px'}}>
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-init col-search">
                                        <span style={{ display: 'block', position: 'relative'}}>
                                            <i className="fa fa-map-marker icon-search" aria-hidden="true"></i>
                
                                            <input className="border-none input-search"  placeholder="Enter a destination or property"/>
                                        </span>
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-init col-search" >
                                        <span style={{ display: 'block', position: 'relative'}}>
                                            <DatePicker className="border-none input-search" id="checkIn" ref="check" placeholderText="Check In"
                                                selected={this.state.startDate}
                                                onChange={this.handleChangeFromTime}
                                            />                                            
                                            <i className="fa fa-calendar icon-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-init col-search" >
                                        <span style={{ display: 'block', position: 'relative'}}>
                                            <DatePicker className="border-none input-search" id="checkOut"  placeholderText="Check Out"
                                                selected={this.state.endDate}
                                                onChange={this.handleChangeToTime}
                                            />                                                
                                            <i className="fa fa-calendar icon-search" aria-hidden="true"></i>
                                        </span>                    
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-init col-search" >
                                        <span style={{ display: 'block', position: 'relative'}}>
                                                <select className="border-none input-search" value={this.state.select} onChange={this.handeChage}  id="inlineFormCustomSelect"  >
                                                        <option value="" disabled hidden>Number of guests</option>
                                                        <option value="2">1 guest</option>
                                                        <option value="1">2 guests</option>
                                                </select>                                
                                                <i className="fa fa-angle-down icon-search" aria-hidden="true"></i>
                                        </span>                    
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-init col-search" style={{background: '#FF5A5F'}}>
                                        <button className="button-search" >Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="login-modal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                
                                <h2 className="modal-title" id="myModalLabel">Login to Your Account</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                                <p>Awesome Popup Modal</p>
                                <br/>
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div className='modal-body-left'>
                                        <div className="form-group">
                                            <input type="text" id="username" placeholder="Enter your name" className="form-control login-field"/>
                                            <i className="fa fa-user login-field-icon"></i>
                                        </div>
                        
                                        <div className="form-group">
                                            <input type="password" id="login-pass" placeholder="Password"  className="form-control login-field"/>
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

                <div className="modal fade" id="signup-modal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                
                                <h2 className="modal-title" id="myModalLabel">Sign Up Your Account</h2>
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
                                            <a href='#' className="btn btn-default twitter"> 
                                                <i className="fa fa-twitter modal-icons"></i> Continue with Twitter 
                                            </a>
                                            <a href='#' className="btn btn-default google"> 
                                                <i className="fa fa-google-plus modal-icons"></i> Continue with Google 
                                            </a>
                                            <a href='#' className="btn btn-default linkedin"> 
                                                <i className="fa fa-linkedin modal-icons"></i> Continue with Linkedin 
                                            </a>
                                        </div> 
                                    </div>	
                    
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

                <div className="modal fade" id="contact-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header login_modal_header">
                                <h2 className="modal-title" id="myModalLabel">Contact us</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                    
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div >
                                        <div className="form-group">
                                                <input type="text" placeholder="Enter your name"  className="form-control login-field"/>
                                        </div>
                        
                                        <div className="form-group">
                                                <input type="text" placeholder="Enter your email"  className="form-control login-field"/>

                                        </div>
                                        <div className="form-group">
                                                <input  placeholder="Enter your phone"  className="form-control login-field"/>
                                                
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Enter your address"  className="form-control login-field"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea rows="5" placeholder="Enter your message"  className="form-control login-field"></textarea>
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
                            <div className="modal-header login_modal_header">                          
                                <h2 className="modal-title" id="myModalLabel">Register new account</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body login-modal">
                        
                                <div className="clearfix"></div>
                                <div id='social-icons-conatainer'>
                                    <div >
                                        <div className="form-group">
                                            <label>Username:</label>
                                            <input type="text" placeholder="Enter Username" className="form-control login-field"/>
                                        </div>
                        
                                        <div className="form-group">
                                            <label>Password:</label>
                                            <input type="password"  placeholder="Enter your password" className="form-control login-field"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Repeat Password:</label>
                                            <input  placeholder="Enter your repeat password"  className="form-control login-field"/>                                              
                                        </div>
                                        <div className="form-group">
                                            <label>Phone:</label>
                                            <input placeholder="Enter your phone"  className="form-control login-field"/>
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
                
            </div>

    

    
        );
    }
}

export default PageHeader