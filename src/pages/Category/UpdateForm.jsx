import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";

const Item = Form.Item;
function UpdateForm(props) {
  // 创建表单实例
  const [form] = Form.useForm();
  // 获取传参
  const { categoryName,setform} = props;
  useEffect(() => {
    // 设置表单的默认值
    form.setFieldsValue({
      categoryName: categoryName,
    });
    // 表单传给父组件
    setform(form)
  }, [categoryName]);//依赖categoryName
  return (
    <Form form={form}>
      <Item label="分类名称" name="categoryName">
        <Input />
      </Item>
    </Form>
  );
}

export default UpdateForm;
