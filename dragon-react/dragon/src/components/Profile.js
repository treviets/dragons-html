import React, { Component } from 'react'
// import $ from "jquery";
import '../assets/css/profile.css';


class ProfileComponent extends Component {
    render() {
        return (
            <div className="page-container-responsive space-top-4 space-4">
                <br />
                <div className="row edit-profile">
                    <div className="col-md-3 space-sm-4">
                        <div className="sidenav">
                            <ul className="sidenav-list">
                                <li>
                                    <a href="https://www.airbnb.com/users/edit/237420104" aria-selected="true" className="sidenav-item">Edit Profile</a>
                                </li>
                                <li>
                                    <a href="https://www.airbnb.com/users/edit/237420104?section=media" aria-selected="false" className="sidenav-item">Photos</a>
                                </li>
                                <li>
                                    <a href="https://www.airbnb.com/users/edit_verification/237420104" aria-selected="false" className="sidenav-item">Trust and Verification</a>
                                </li>
                                <li>
                                    <a href="https://www.airbnb.com/users/reviews/237420104" aria-selected="false" className="sidenav-item">Reviews</a>
                                </li>
                                <li>
                                    <a href="https://www.airbnb.com/users/references/237420104" aria-selected="false" className="sidenav-item">References</a>
                                </li>
                                <li>
                                </li>
                                <div className="btnView">
                                    <a href="/users/show/237420104" className="btn btn-block space-top-4">View Profile</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="panel space-4">
                            <div className="panel-header">
                                <h2 class="edit-profile-section-heading">
                                    Required
                                </h2>
                            </div>
                            <div className="panel-body">
                                <div class="row row-condensed space-4">
                                    <label className="text-right col-3" for="user_first_name">
                                        First Name
                                    </label>
                                    <div className="col-9">
                                        <input id="user_first_name" name="user[first_name]" size="30" type="text" value="Tran" />
                                    </div>
                                </div>
                                <div class="row row-condensed space-4">
                                    <label className="text-right col-3" for="user_first_name">
                                        Last Name
                                    </label>
                                    <div className="col-9">
                                        <input id="user_first_name" name="user[first_name]" size="30" type="text" value="Thoai" />
                                        <div className="text-muted space-top-1">
                                            Your public profile only shows your first name. When you request a booking, your host will see your first and last name.
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-condensed space-4">
                                    <label className="text-right col-3" for="user_first_name">
                                        I Am <i aria-label="Private" class="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                    </label>
                                    <div className="col-9">
                                        <div class="select">
                                            <select id="user_sex" name="user[sex]"><option value="" selected="selected">Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option></select>
                                        </div>
                                        <div class="text-muted space-top-1">We use this data for analysis and never share it with other users.</div>
                                    </div>
                                </div>
                                <div class="row row-condensed space-4">
                                    <label className="col-3" for="user_first_name">
                                        Birth Date  <i aria-label="Private" class="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                    </label>
                                    <div className="col-9">
                                        <fieldset>
                                            {/* <legend class="screen-reader-only">Birthday</legend> */}
                                            <div class="select">
                                                <select aria-label="Month" id="user_birthdate_2i" name="user[birthdate(2i)]">
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
                                            <div class="select">
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
                                            <div class="select">
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
                                        <div class="text-muted space-top-1">The magical day you were dropped from the sky by a stork. We use this data for analysis and never share it with other users.</div>
                                    </div>
                                </div>
                                <div class="row row-condensed space-4">
                                    <label className="text-right col-sm-3" for="user_first_name">
                                        Email Addresss  <i aria-label="Private" class="fa fa-lock icon-lock icon-ebisu" data-behavior="tooltip" role="img" tabindex="0"></i>
                                    </label>
                                    <div className="col-sm-9">
                                        <input id="user_first_name" name="user[first_name]" size="30" type="text" value="tranthoai142@gmail.com" />
                                        <div className="text-muted space-top-1">
                                            We won’t share your private email address with other Airbnb users. Learn more.
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="text-right col-sm-3" htmlFor="user_phone_numbers">
                                        Phone Numbers
                                    </label>
                                    <div className="col-sm-9">
                                        <style data-aphrodite="data-aphrodite" dangerouslySetInnerHTML={{ __html: "._pgfpyhv{color: #008489 !important;font:inherit !important;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;-webkit-text-decoration-line:none !important;-moz-text-decoration-line:none !important;text-decoration-line:none !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;background:transparent !important;border:0px !important;cursor:pointer !important;margin:0px !important;padding:0px !important;-webkit-user-select:auto !important;-moz-user-select:auto !important;-ms-user-select:auto !important;user-select:auto !important;text-align:left !important;}._pgfpyhv:hover{-webkit - text - decoration - line: underline !important;-moz-text-decoration-line:underline !important;text-decoration-line:underline !important;color:#008489 !important;}._pgfpyhv:focus{-webkit - text - decoration - line: underline !important;-moz-text-decoration-line:underline !important;text-decoration-line:underline !important;}@supports(--custom: properties){._pgfpyhv{color:var(--color-text-link, #008489) !important;font-family:var(--font-font_family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;-webkit-text-decoration-line:var(--font-link-text-decoration-line, none) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line, none) !important;text-decoration-line:var(--font-link-text-decoration-line, none) !important;}._pgfpyhv:hover{-webkit - text - decoration - line: var(--font-link-text-decoration-line-hover, underline) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line-hover, underline) !important;text-decoration-line:var(--font-link-text-decoration-line-hover, underline) !important;color:var(--color-text-link-hover, #008489) !important;}._pgfpyhv:focus{-webkit - text - decoration - line: var(--font-link-text-decoration-line-focus, underline) !important;-moz-text-decoration-line:var(--font-link-text-decoration-line-focus, underline) !important;text-decoration-line:var(--font-link-text-decoration-line-focus, underline) !important;}._pgfpyhv:active{color: var(--color-text-link-active, #006C70) !important;}}._pgfpyhv:active{color: #006C70 !important;outline:0px !important;}" }} />
                                        <div data-hypernova-key="edit_profilephone_numbersbundlejs" data-hypernova-id="1870cbb1-404d-4a62-a6c0-d8b1a607e24d"><div dir="ltr" data-reactroot><div style={{ marginTop: '9px' }}><div><strong>No phone number entered</strong><div style={{ marginTop: '4px' }}><div className="text-muted">This is so your hosts, guests, and Airbnb can contact you. We’ll send you booking requests, reminders, and other notifications.</div></div><div style={{ marginTop: '8px' }}><button type="button" className="_pgfpyhv" aria-busy="false">Add a phone number</button></div></div></div></div></div>
                                    </div>
                                </div>

                                <div className="row row-condensed space-4">
                                    <label className="text-right col-sm-3" htmlFor="user_profile_info_preferred_language">
                                        Preferred Language
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="select">
                                            <select id="user_profile_info_preferred_language" name="user[preferred_locale]"><option value="id">Bahasa Indonesia</option>
                                                <option value="ms">Bahasa Melayu</option>
                                                <option value="ca">Català</option>
                                                <option value="da">Dansk</option>
                                                <option value="de">Deutsch</option>
                                                <option value="en" selected="selected">English</option>
                                                <option value="es">Español</option>
                                                <option value="el">Eλληνικά</option>
                                                <option value="fr">Français</option>
                                                <option value="hr">Hrvatski</option>
                                                <option value="it">Italiano</option>
                                                <option value="hu">Magyar</option>
                                                <option value="nl">Nederlands</option>
                                                <option value="no">Norsk</option>
                                                <option value="pl">Polski</option>
                                                <option value="pt">Português</option>
                                                <option value="fi">Suomi</option>
                                                <option value="sv">Svenska</option>
                                                <option value="tr">Türkçe</option>
                                                <option value="is">Íslenska</option>
                                                <option value="cs">Čeština</option>
                                                <option value="ru">Русский</option>
                                                <option value="th">ภาษาไทย</option>
                                                <option value="zh">中文 (简体)</option>
                                                <option value="zh-TW">中文 (繁體)</option>
                                                <option value="ja">日本語</option>
                                                <option value="ko">한국어</option></select>
                                        </div>
                                        <div className="text-muted space-top-1">We'll send you messages in this language.</div>
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="text-right col-sm-3" htmlFor="user_profile_info_preferred_currency">
                                        Preferred Currency
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="select">
                                            <select id="user_profile_info_preferred_currency" name="user[native_currency]"><option value="AUD">Australian dollar</option>
                                                <option value="BRL">Brazilian real</option>
                                                <option value="BGN">Bulgarian lev</option>
                                                <option value="CAD">Canadian dollar</option>
                                                <option value="CLP">Chilean peso</option>
                                                <option value="CNY">Chinese yuan</option>
                                                <option value="COP">Colombian peso</option>
                                                <option value="CRC">Costa Rican colon</option>
                                                <option value="HRK">Croatian kuna</option>
                                                <option value="CZK">Czech koruna</option>
                                                <option value="DKK">Danish krone</option>
                                                <option value="AED">Emirati dirham</option>
                                                <option value="EUR">Euro</option>
                                                <option value="HKD">Hong Kong dollar</option>
                                                <option value="HUF">Hungarian forint</option>
                                                <option value="INR">Indian rupee</option>
                                                <option value="ILS">Israeli new shekel</option>
                                                <option value="JPY">Japanese yen</option>
                                                <option value="MYR">Malaysian ringgit</option>
                                                <option value="MXN">Mexican peso</option>
                                                <option value="MAD">Moroccan dirham</option>
                                                <option value="TWD">New Taiwan dollar</option>
                                                <option value="NZD">New Zealand dollar</option>
                                                <option value="NOK">Norwegian krone</option>
                                                <option value="PEN">Peruvian sol</option>
                                                <option value="PHP">Philippine peso</option>
                                                <option value="PLN">Polish zloty</option>
                                                <option value="GBP">Pound sterling</option>
                                                <option value="RON">Romanian leu</option>
                                                <option value="RUB">Russian ruble</option>
                                                <option value="SAR">Saudi Arabian riyal</option>
                                                <option value="SGD">Singapore dollar</option>
                                                <option value="ZAR">South African rand</option>
                                                <option value="KRW">South Korean won</option>
                                                <option value="SEK">Swedish krona</option>
                                                <option value="CHF">Swiss franc</option>
                                                <option value="THB">Thai baht</option>
                                                <option value="TRY">Turkish lira</option>
                                                <option value="USD">United States dollar</option>
                                                <option value="UYU">Uruguayan peso</option></select>
                                        </div>
                                        <div className="text-muted space-top-1">We’ll show you prices in this currency.</div>
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="text-right col-sm-3" htmlFor="user_profile_info_current_city">
                                        Where You Live
                                    </label>
                                    <div className="col-sm-9">
                                        <input id="user_profile_info_current_city" name="user_profile_info[current_city]" placeholder="e.g. Paris, France / Brooklyn, NY / Chicago, IL" size={30} type="text" />
                                    </div>
                                </div>
                                <div className="row row-condensed space-4">
                                    <label className="text-right col-sm-3" htmlFor="user_profile_info_about">
                                        Describe Yourself
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea cols={40} id="user_profile_info_about" name="user_profile_info[about]" rows={5} defaultValue={""} />
                                        <div className="text-muted space-top-1">Airbnb is built on relationships. Help other people get to know you.<br /><br />Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.<br /><br />Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of Airbnb hosting?<br /><br />Tell them about you: Do you have a life motto?</div>
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

export default ProfileComponent