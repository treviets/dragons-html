import React, {Component} from 'react'
import '../assets/css/footer.css'
class PageFooter extends Component{
    render(){
        return (
            <footer className="footer" >
            <br/>
            <div className="container">
                <div className="footer-custom">
                    <div className="row font-size14">
                        <div className="col-md-3 col-sm-12">
                            <div className="box">
                                <ul>
                                    <li className="font-title title-footer">Airbnb</li>
                                    <li className="font-medium"><a href="">Careers</a></li>
                                    <li className="font-medium"><a href="">Press</a></li>
                                    <li className="font-medium"><a href="">Policies</a></li>
                                    <li className="font-medium"><a href="">Help</a></li>
                                    <li className="font-medium"><a href="">Diversity & Belonging</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="box">
                                <ul>
                                    <li className="font-title title-footer">Discover</li>
                                    <li className="font-medium"><a href="">Trust & Safety</a></li>
                                    <li className="font-medium"><a href="">Travel Credit</a></li>
                                    <li className="font-medium"><a href="">Gift Cards</a></li>
                                    <li className="font-medium"><a href="">Airbnb Citizen</a></li>
                                    <li className="font-medium"><a href="">Guidebooks</a></li>
                                    <li className="font-medium"><a href="">Airbnbmag</a></li>
                                    <li className="font-medium">
                                        <a href="">EventsNew</a>
                                        <span className="_146g3kk"><span className="_4btwil"><span className="_1awrjnc1">New</span></span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="box">
                                <ul>
                                    <li className="font-title title-footer">Hosting</li>
                                    <li className="font-medium"><a href="">Why Host</a></li>
                                    <li className="font-medium"><a href="">Hospitality</a></li>
                                    <li className="font-medium"><a href="">Responsible Hosting</a></li>
                                    <li className="font-medium"><a href="">Community Center</a></li>
                                    <li className="font-medium">
                                        <a href="">Host an ExperienceNew</a>
                                        <span className="_146g3kk"><span className="_4btwil"><span className="_1awrjnc1">New</span></span></span>
                                    </li>
                                    <li className="font-medium">
                                        <a href="">Open HomesNew</a>
                                        <span className="_146g3kk"><span className="_4btwil"><span className="_1awrjnc1">New</span></span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="box">
                                <ul>
                                    <li className="title-footer title-footer" style={{webkitTextFillColor:'rgb(118, 118, 118)'}}>
                                        <i className="fa fa-facebook fa-lg" fill aria-hidden="true"></i>
                                        <i className="fa fa-twitter fa-lg margin-left15" aria-hidden="true"></i>
                                        <i className="fa fa-instagram fa-lg margin-left15" aria-hidden="true"></i>
                                    </li>
                                    <li className="font-medium"><a href="">Terms</a></li>
                                    <li className="font-medium"><a href="">Privacy</a></li>
                                    <li className="font-medium">
                                        <a href="">Site Map</a>
                                        <span className="_146g3kk"><span className="_4btwil"><span className="_1awrjnc1">New</span></span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export  default PageFooter