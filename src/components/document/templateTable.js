import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'base/table/dataTable';
import { Modal, message, Upload } from 'antd';

const confirm = Modal.confirm;

const table = ({ fields, dataSource, pagination, queryTemplate, onDeleteItem, loading }) => {
  /* 删除表格行 */
  const handleDelete = (record) => {
    confirm({
      title: '是否确认删除',
      onOk() {
        onDeleteItem(record.id);
      }
    });
  };

  /* 表格属性 */
  const props = {
    pagination,
    fields,
    dataSource,
    loading,
    extraFields: [{
      key: 'operation',
      name: '操作',
      render: (text, record) => (
        <div>
          <a href="">上传文件</a>
          <span className="ant-divider"></span>
          <a onClick={e => handleDelete(record)}>删除</a>
          <span className="ant-divider"></span>
          <a href="">查看历史</a>
        </div>
      )
    }]
  };

  return (
    <DataTable {...props} />
  );
};

table.PropTypes = {
  fields: PropTypes.array,
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  queryTemplate: PropTypes.func,
  onDeleteItem: PropTypes.func
};

export default table;

