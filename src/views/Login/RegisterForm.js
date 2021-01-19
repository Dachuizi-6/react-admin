import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default class LoginForm extends Component {
  // 去登录
  handleLogin = () => {
    this.props.toggleForm("login");
  };
  //   收集表单数据
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  render() {
    return (
      <>
        <div className="form-header">
          <div className="left">注册</div>
          <span onClick={this.handleLogin}>已注册？去登录</span>
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
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="repassword"
              rules={[
                { required: true, message: "Please input your PasswordAgain!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("两次输入的密码不一致!");
                  },
                }),
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
              rules={[{ required: true, message: "Please input your Code!" }]}
            >
              <Row gutter={13}>
                <Col span={16}>
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="code"
                  />
                </Col>
                <Col span={8}>
                  <Button type="danger" block>
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
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}
