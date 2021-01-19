import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { validate_password } from "../../utils/validate";

import { login, getCode } from "../../api/account";

export default class LoginForm extends Component {
  state = {
    username: "",
  };
  componentDidMount() {}
  // 去注册
  handleRegister = () => {
    this.props.toggleForm("register");
  };
  // 获取验证码必须的用户名
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  // 获取验证码
  handleGetCode = (e) => {
    const data = {
      username: this.state.username,
      module: "login",
    };
    getCode(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err); // baocuo
      });
  };
  //   收集表单数据
  onFinish = (values) => {
    console.log("Received values of form: ", values);
    login(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { username } = this.state;
    return (
      <>
        <div className="form-header">
          <div className="left">登录</div>
          <span onClick={this.handleRegister}>注册账号</span>
        </div>
        <div className="form-content">
          <Form
            name="normal_login"
            className="login-form"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "请输入用户名!" },
                { type: "email", message: "请输入正确的邮箱格式!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "请输入密码!" },
                // { min: 6, message: "密码不能小于6位!" },
                // { max: 20, message: "密码不能大于20位!" },
                {
                  pattern: validate_password,
                  message: "密码只能为6到20位数字+字母组成",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[
                { required: true, message: "请输入正确的验证码!" },
                { len: 4, message: "请输入4位验证码" },
              ]}
            >
              <Row gutter={13}>
                <Col span={16}>
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="code"
                  />
                </Col>
                <Col span={8}>
                  <Button
                    type="danger"
                    block
                    onClick={(e) => this.handleGetCode(e)}
                  >
                    验证码
                  </Button>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}
