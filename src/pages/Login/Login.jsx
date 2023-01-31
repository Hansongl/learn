import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import "./Login.css";
import { reqLogin } from "../../api";

function Login() {
  const navigate = useNavigate();
  // 表单验证成功的回调
  const onFinish = async (values) => {
    const { username, password } = values;
    // 登录请求
    const result = await reqLogin(username, password);
    if (result.status == 0) {
      message.success("登录成功");
      // 保存user信息
      localStorage.setItem("user", JSON.stringify(result.data));
    }
    navigate({ pathname: "/" });
  };
  // 表单验证失败的回调
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login_background clearfix">
      <div id="login_title">CRM后台管理系统</div>
      <div className="loginfilter"></div>
      <div className="login">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            username: "admin",
            password: "admin",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入您的用户名!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入您的密码!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
