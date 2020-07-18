import React from "react";
import loginImg from "../../login.svg"; //replace with Cibu login svg one day

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Thanks for joining Cibu Snacks!</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Cibu Login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" >
            Register
          </button>
        </div>
      </div>
    );
  }
}
