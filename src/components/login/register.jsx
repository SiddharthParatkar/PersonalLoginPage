import React from "react";
import loginImg from "../../login.svg"; //replace with Cibu login svg one day

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Cibu Login" />
          </div>
          <div className="form">
            <div className="form-group"> {/*change to email and have email validation?*/}
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
