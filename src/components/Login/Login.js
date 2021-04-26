import React from 'react';
import { Button } from 'reactstrap';
import loginImg from "../img/login.png";
import "./style.css";

const login = () => {
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="uername">User</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer" style={{ border: 1 }}>

                <Button type="password"color="success" className="btnLogin" href="/">Login</Button>
                <Button color="primary" className="btnRegister" href="/Register">Register</Button>
            </div>
        </div>
    );

}
export default login;