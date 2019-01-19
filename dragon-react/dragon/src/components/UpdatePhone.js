import React, { Component } from 'react'
import '../assets/css/privateHomeInHouse.css'


class UpdatePhone extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-update-phone">
                    <h3>Add you phone number</h3>
                    <p>This is so your host and Airbnb can reach you.</p>
                    <form>
                        <div className="form-group">
                            <label>Country</label>
                            <select className="form-control" id="sel1">
                                <option>United States (+1)</option>
                                <option>Viet Nam (+84)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input type="email" className="form-control" id="phone" />
                        </div>
                        <p className="autho">I authorize phone/text messages to this number.</p>
                        <button type="button" className="btn btnNext">Next ></button>

                    </form>

                </div>
                <br/>
            </div>
        )
    }
}

export default UpdatePhone