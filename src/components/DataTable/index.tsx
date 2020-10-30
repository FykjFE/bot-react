import React from 'react';
import { Table } from 'antd';

interface Props {
  columns: any[];
  pagination: Pageation;
  loading: boolean;
  rowKey: string;
  dataSource?: any[];
  onFinish: (val: Pageation) => void;
}

const DataTable: React.FC<Props> = (props) => {
  const { columns, loading, rowKey, dataSource, pagination, onFinish } = props;
  const pages: Pageation = {
    showSizeChanger: true,
    showQuickJumper: true,
    total: pagination.total,
    current: pagination.current,
    pageSize: pagination.pageSize,
    showTotal: (total: number) => `共 ${total} 条 `,
  };

  // 分页
  const handleTableChange = ({ current, pageSize }: any) => {
    console.log(current, pageSize);
    // 分页查询
    onFinish({ current, pageSize });
  };

  return (
    <Table
      rowKey={rowKey || 'id'}
      columns={columns}
      dataSource={dataSource}
      onChange={handleTableChange}
      loading={loading}
      pagination={pages}
    />
  );
};

export default DataTable;
