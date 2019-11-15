import React, { Component } from 'react';
import Login from './login/Login'
import NavLogin from './login/NavLogin'
import './styles/nav.css'
import './styles/login.css'


class login extends Component {
    render() {
        return (
            <>
                <NavLogin />
                <Login />
            </>
        )
    }

}
export default login;