import React, { Component } from 'react'
import '../assets/css/footer.css'
class PageFooter extends Component {
    render() {
        return (
            <footer className="footer" >
                <br />
                <div className="container">
                    <div className="footer-info">
                        <div className="list-logo-footer">
                            <ul>
                                <li className="title-footer title-footer" style={{ fill: 'rgb(118, 118, 118)' }}>
                                    <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                                    <i className="fa fa-twitter fa-lg margin-left15" aria-hidden="true"></i>
                                    <i className="fa fa-instagram fa-lg margin-left15" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </div>
                        <p>@Copyright. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default PageFooter