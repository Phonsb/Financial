import React from 'react';
import { Button } from 'reactstrap';
import "./style.css";
const Register = () => {
        return ( 
            <div className="base-container">
              <div className="header">Register</div>
              <div className="content">
                <div className ="form">
                  <div className="form-group">
                    <label htmlFor="uername">User</label>
                    <input type="text" name="username" placeholder="username"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="password"/>
                  </div>
                </div>
              </div>
              <div className="footer">
              <Button color="success" href="/Login">Confirm</Button>
              </div>
            </div>
        );
}
export default Register;