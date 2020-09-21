import React, { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { GET_MENU_BY_ID, POST_MENU_BY_ID } from '../../services/menu.service';

interface MenuInfo {
  id: string;
}

const MenuModal: React.FC<MenuInfo> = ({ id, children }) => {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState({});
  const [form] = Form.useForm();

  async function getMenuInfo() {
    const { data } = await GET_MENU_BY_ID({ id });
    form.setFieldsValue(data);
    setDataSource(data);
  }
  async function doSave(values: any) {
    const r = await POST_MENU_BY_ID({ ...dataSource, ...values });
    console.log(r);
  }
  useEffect(() => {
    visible && getMenuInfo();
  }, [id, visible]);
  return (
    <>
      <span onClick={() => setVisible(true)}>{children}</span>
      <Modal
        title='Basic Drawer'
        visible={visible}
        onOk={() => form.submit()}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} layout='vertical' name='userForm' onFinish={doSave}>
          <Form.Item name='menuName' label='名称' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='icon' label='图标' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='path' label='路由地址' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='component' label='组件地址' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MenuModal;
