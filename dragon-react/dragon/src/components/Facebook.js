import React, { Component, CSSProperties } from 'react';
import GoogleLogin from 'react-google-login';
import service from '../services/signup.js';
import '../assets/css/header.css';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { loginUserSocial, saveCreds, logoutUser } from '../actions/auth'





class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    };
    responseFacebook = response => {
        console.log("response-------", response)

        this.setState({
            isLoggedIn: true,
            userID: response.id,
            name: response.name,
            email: response.email,
        });


        this.loginByFaceBook();
    }

    componentClicked = () => console.log("clicked");

    async loginByFaceBook() {
        var formData = new FormData();
        formData.append("Fullname", this.state.name);
        formData.append("Email", this.state.email);
        formData.append("Facebookid", this.state.userID);

        this
            .props
            .handleLoginSocial(formData)

    }


    render() {
        let fbContent;
        fbContent = (
            <FacebookLogin
                appId="358595598072446"
                // autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                icon="fa fa-facebook"
                className="buttonF"
            />
        );
        return <div>{fbContent}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isAuthenticated: state.auth.isAuthenticated, accessToken: state.auth.accessToken }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginSocial: (creds) => dispatch((loginUserSocial(creds))),
        setToken: (token) => dispatch(saveCreds(token)),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
