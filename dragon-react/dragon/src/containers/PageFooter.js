import React, { Component } from 'react'
import '../assets/css/footer.css'
class PageFooter extends Component {
    render() {
        return (
            <footer >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="media-social">
                                <h2>Social media</h2>
                                <ul>
                                    <li><img src="http://thedragonshost.com/wp-content/uploads/2019/07/facebook.png" alt="" /></li>
                                    <li><img src="http://thedragonshost.com/wp-content/uploads/2019/07/instagram.png" alt="" /></li>
                                    <li><img src="http://thedragonshost.com/wp-content/uploads/2019/07/twitter.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-us">
                                <h2>Contact Us</h2>
                                <ul>
                                    <li className="footer-phone">090912312</li>
                                    <li className="footer-gmail">cs@thedragonhost.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="locations">
                                <h2>locations</h2>
                                <ul>
                                    <li>TDH - PARKSIDE</li>
                                    <li>TDH - DB COURT</li>
                                    <li>TDH - VINHOMES CENTER PARK</li>
                                    <li>TDH - THE TRESOR</li>
                                    <li>TDH - VUNG TAU MELODY</li>
                                    <li>TDH - VINHOMES OCEANAMI</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-company">
                                <div className="footer-logo-company"></div>
                                <div className="address-company">
                                    CÔNG TY CÔ PHẦN THE DRAGONS HOST <br />
                                    Địa chỉ đăng ký kinh doanh: A22, Cống Quỳnh,<br />
                                    Phường Nguyễn Cư Trinh, Quận 1, Tp.HCM<br />
                                    Điện thoại: +84 939 762 131<br />
                                    Mã Số Doanh Nghiệp: 0314735319 theo giấy<br />
                                    ĐKKD do sở KHĐT TPHCM cấp lần đầu<br />
                                    ngày 14 tháng 11 năm 2017.<br />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default PageFooter