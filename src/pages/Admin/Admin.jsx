import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { Layout } from "antd";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";


function Admin() {
  // 获取user信息
  const user = JSON.parse(localStorage.getItem("user")?localStorage.getItem("user"):'""');
  const { Footer, Sider, Content } = Layout;
  // 判断是否登录
  if (!user || !user._id) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="admin">
      <Layout>
        <Sider>
          <Aside />
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;
