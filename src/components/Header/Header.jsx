import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { formateDate } from "../../util/dateutil";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./Header.css"

function Header() {
  const { confirm } = Modal;
  const navigate = useNavigate();
  // 时间
  const [currentTime, setCurrentTime] = useState(formateDate(Date.now()));
  let intervalId = null;
  // 获取user
  const user = JSON.parse(localStorage.getItem("user"));
  // 退出功能
  const logout = () => {
    confirm({
      title: "确定要退出吗？",
      icon: <ExclamationCircleFilled />,
      content: "",
      onOk: () => {
        localStorage.setItem("user", "");
        navigate("/login");
      },
      onCancel: () => {},
      okText: "确认",
      cancelText: "取消",
    });
  };
  useEffect(() => {
    // 刷新时间
    getTime();
    return () => {
      // 销毁定时器
      clearInterval(intervalId);
    };
  }, []);
  // 获取时间
  const getTime = () => {
    intervalId = setInterval(() => {
      // 设置时间
      setCurrentTime(formateDate(Date.now()));
    }, 1000);
  };

  return (
    <div className="header">
      <div className="header_welcom">
        欢迎<span>{user.username}</span>
        <Button className="logout_button" onClick={logout}>
          退出
        </Button>
      </div>
      <div className="header_msg">
        <div className="breadcrumb">
          <Breadcrumb />
        </div>
        <span className="header_time">
          当前时间:<span>{currentTime}</span>
        </span>
      </div>
    </div>
  );
}

export default Header;
