import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { GET_MENU_LIST } from '../../services/menu.service';
import list2tree from '../../utils/list2tree';
import MenuModal from './MenuModal';
import Icon from '../../components/Icon';

const columns = [
  {
    title: '菜单名称',
    dataIndex: 'name',
  },
  {
    title: '图标',
    key: 'icon',
    render: (text: string, record: any): JSX.Element => <Icon name={record.icon} />,
  },
  {
    title: '组件路径',
    dataIndex: 'component',
  },
  {
    title: '状态',
    dataIndex: 'isShow',
    render: (text: number) => (text === 1 ? '显示' : '隐藏'),
  },
  {
    title: '操作',
    key: 'action',
    render: (text: string, record: any): JSX.Element => (
      <Space size='middle'>
        <MenuModal id={record.menuId}>
          <a>修改</a>
        </MenuModal>
        <a>新增</a>
        <a>删除</a>
      </Space>
    ),
  },
];

function Menu(): JSX.Element {
  const [dataSource, setDataSource] = useState([]);

  async function getMenuList() {
    const { code, data } = await GET_MENU_LIST({});
    const list = data.map((item: any) => {
      delete item.children;
      return item;
    });
    const tree = list2tree(list, { pid: 'parentId' });
    setDataSource(tree as never);
  }

  useEffect(() => {
    getMenuList();
  }, []);
  return (
    <div>
      <Table rowKey={'id'} dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Menu;
