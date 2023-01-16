import React from "react";
import { Breadcrumb } from "antd";
import menuList from "../../config/menuConfig";
import { useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
  const location = useLocation();
  // 获取标题
  const getTitle = (menuList) => {
    let title;
    menuList.map((item) => {
      if (location.pathname == item.key) {
        title = (
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href={'#'+item.key}>{item.label}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        );
      } else if (item.children) {
        // 二级标题
        item.children.map((citem) => {
          if(location.pathname == citem.key){
            title = (
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a>{item.label}</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href={'#'+citem.key}>{citem.label}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            );
          }
        });
      }
    });
    return title;
  };
  const title = getTitle(menuList);
  return title;
};
export default BreadcrumbComponent;
