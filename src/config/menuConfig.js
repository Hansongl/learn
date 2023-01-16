import { AppstoreOutlined } from "@ant-design/icons";
export default [
  {
    label: "首页",
    key: "/home",
    icon: <AppstoreOutlined />,
  },
  {
    label: "商品",
    key: "/products",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "品类管理",
        key: "/category",
        icon: <AppstoreOutlined />,
      },
      {
        label: "商品管理",
        key: "/product",
        icon: <AppstoreOutlined />,
      },
    ],
  },
  {
    label: "用户管理",
    key: "/user",
    icon: <AppstoreOutlined />,
  },
  {
    label: "角色管理",
    key: "/role",
    icon: <AppstoreOutlined />,
  },
  {
    label: "图表",
    key: "/charts",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "柱状图",
        key: "/bar",
        icon: <AppstoreOutlined />,
      },
      {
        label: "折线图",
        key: "/line",
        icon: <AppstoreOutlined />,
      },
      {
        label: "饼图",
        key: "/pie",
        icon: <AppstoreOutlined />,
      },
    ],
  },
  {
    label: "系统设置",
    key: "/options",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "设置",
        key: "/option",
        icon: <AppstoreOutlined />,
      },
    ],
  },
];
