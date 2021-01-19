import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./index.less";

export default class Login extends Component {
  state = {
    formType: "login",
  };

  //   切换注册登录页
  toggleForm = (type) => {
    this.setState({
      formType: type,
    });
  };
  render() {
    const { formType } = this.state;
    return (
      <div className="login-page">
        {/* 头部 */}
        <div>
          {formType === "login" ? (
            <LoginForm toggleForm={this.toggleForm} />
          ) : (
            <RegisterForm toggleForm={this.toggleForm} />
          )}
        </div>
      </div>
    );
  }
}
