import React, { useEffect, useState } from "react";
import { reqCategorys, reqAddCategorys } from "../../api";
import { Card, Button, Table, Space, Modal } from "antd";
import AddForm from "./AddForm";

function Category() {
  // 判断当前分类列表层级
  const [parentId, setParentId] = useState("0");
  // 分类标题
  const [parentName, setParentName] = useState("");
  // 一级分类列表
  const [categorys, setCategorys] = useState([]);
  // 二级分类列表
  const [childCategorys, setChildCategorys] = useState([]);
  // 对话框是否显示
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 弹框传递的数据
  const [useForm, setUseForm] = useState({});
  // table结构
  const columns = [
    {
      title: "分类名称",
      dataIndex: "name",
      key: "name",
      width: "60%",
    },
    {
      title: "操作",
      dataIndex: "option",
      key: "option",
      // 操作栏设置
      render: (_, record) => {
        return (
          <Space size="middle">
            <a>修改分类</a>
            {/* 当parentId==0时是一级分类，显示查看子分类 */}
            {record.parentId == 0 ? (
              <a
                onClick={() => {
                  setParentId(record._id);
                  setParentName(record.name);
                  return getCategorysList(record._id);
                }}
              >
                查看子分类
              </a>
            ) : (
              ""
            )}
            <a>删除分类</a>
          </Space>
        );
      },
    },
  ];
  // 请求分类列表
  const getCategorysList = async (pid) => {
    const result = await reqCategorys(pid);
    if (result.status == 0) {
      if (result.data[0] && result.data[0].parentId == "0") {
        setCategorys(result.data);
      } else {
        setChildCategorys(result.data);
      }
    }
  };
  // 添加按钮
  const showAdd = () => {
    setIsModalOpen(true);
  };
  const extra = (
    <Button type="primary" onClick={showAdd}>
      添加
    </Button>
  );
  // 添加对话框确定回调
  const handleOk = async () => {
    const {categoryName,pid} = useForm.getFieldsValue();
    setIsModalOpen(false);
    console.log(useForm);
    const result = await reqAddCategorys(pid,categoryName);
    console.log(result);
  };
  // 添加对话框取消回调
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // 删除按钮

  // 显示子分类列表

  // 返回一级分类
  const showCategorys = () => {
    setParentId("0");
  };
  // 设定title
  const title =
    parentId == 0 ? (
      "一级分类列表"
    ) : (
      <>
        <a onClick={showCategorys}>一级分类列表</a>
        <span>/{parentName}</span>
      </>
    );
  // 发请求
  useEffect(() => {
    getCategorysList();
  }, []);

  return (
    <div>
      <Card title={title} extra={extra}>
        <Table
          rowKey="_id"
          dataSource={parentId == 0 ? categorys : childCategorys}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
      <Modal
        title="添加分类"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddForm
          categorys={categorys}
          pid={parentId}
          useform={(form) => setUseForm(form)}
        />
      </Modal>
    </div>
  );
}

export default Category;
