import React, { useEffect } from "react";
import { Select, Form, Input } from "antd";

const Item = Form.Item;
function AddForm(props) {
  // 创建表单实例
  const [form] = Form.useForm();
  // 获取传参
  const { categorys, pid, useform } = props;
  // select选项数据
  let options = [
    {
      label: "一级分类",
      value: "0",
    },
  ];
  useEffect(() => {
    // 设置表单的默认值
    form.setFieldsValue({
      pid: pid,
    });
    useform(form)
  }, []);
  return (
    <Form form={form} name='添加'>
      <Item label="请选择" name="pid" >
        <Select
          value={pid}
          options={options.concat(
            categorys.map((v) => {
              const label = v.name;
              const value = v._id;
              return { value, label };
            })
          )}
        ></Select>
      </Item>
      <Item
        label="分类名称"
        name="categoryName"
        rules={[{ required: true, message: "名称必须" }]}
      >
        <Input />
      </Item>
    </Form>
  );
}

export default AddForm;
