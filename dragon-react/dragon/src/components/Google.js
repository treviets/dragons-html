import React, { Component, CSSProperties } from 'react';
import GoogleLogin from 'react-google-login';
import service from '../services/signup.js';
import '../assets/css/header.css';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { loginUserSocial, saveCreds, logoutUser } from '../actions/auth'




class Google extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    };

    responseGoogle = response => {
        console.log("SUccess");
        console.log(response.profileObj);
        this.loginByGoogle(response.profileObj);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            // picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");
    async loginByGoogle(googleUser) {
        //
        var profile = googleUser;

        var formData = new FormData();
        formData.append("Fullname", profile.name);
        formData.append("Googleid", profile.googleId);
        formData.append("Email", profile.email);
        formData.append("Lastname", profile.familyName);
        formData.append("Firstname", profile.givenName);
        formData.append("Avatar", profile.imageUrl);

        // formData.append("Fullname", "Thoại Trần");
        // formData.append("Googleid", "109571322154487634917");
        // formData.append("Email", "tranthoai151@gmail.com");
        // formData.append("Lastname", "Trần");
        // formData.append("Firstname", "Thoại");
        // formData.append("Avatar", "https://lh6.googleusercontent.com/-yeQi0yZFdnk/AAAAAAAAAAI/AAAAAAAAC0I/Lanq5F-bvQM/s96-c/photo.jpg");

        this
            .props
            .handleLoginSocial(formData)
    }


    render() {
        if (this.props.isAuthenticated) {
            this
                .props
                .setToken(localStorage.getItem('accessToken'))
            // window.location.replace('/')
            // this.props.history.push('/');
        }
        let fbContent;

        fbContent = (
            <GoogleLogin
                clientId="788493347431-igrlt78305it6lut5hd6qenii0qce173.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                className="buttonB"
            />
            // <FacebookLogin
            //     appId="1088597931155576"
            //     autoLoad={true}
            //     fields="name,email,picture"
            //     onClick={this.componentClicked}
            //     callback={this.responseFacebook}
            //     className="buttonB"
            // />
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

export default connect(mapStateToProps, mapDispatchToProps)(Google);
