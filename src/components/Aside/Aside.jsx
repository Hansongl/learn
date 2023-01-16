import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import menuconfig from "../../config/menuConfig";

const Aside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // menu列表数据
  const [items, setItems] = useState(menuconfig);
  // 保存当前路由
  const [path, setpath] = useState("/");
  // 保存当前展开一级菜单
  const [openkey, setOpenkey] = useState([]);
  let newitems = [...items];
  // 依赖当前路由设置高亮菜单
  useEffect(() => {
    //将当前路由保存到path
    setpath(location.pathname);
    //判断当前菜单是否是二级菜单，是的话将父菜单打开
    newitems.map((item) => {
      if (item.children) {
        item.children.some((citem) => {
          if (location.pathname.indexOf(citem.key) === 0) {
            setOpenkey([item.key]);
          }
        });
      }
    });
  }, [location.pathname]);
  return (
    <div>
      <Menu
        selectedKeys={[path]}
        openKeys={openkey}
        onClick={({ key }) => {
          navigate(key);
        }}
        onOpenChange={(openkey) => {
          setOpenkey(openkey);
        }}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default Aside;
