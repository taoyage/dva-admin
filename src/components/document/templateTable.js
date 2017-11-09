import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'base/table/dataTable';
import { Modal, Upload, message } from 'antd';
import * as api from 'api/config';

const confirm = Modal.confirm;

const table = ({ onDeleteItem, queryTemplate, ...tableProps }) => {
  /* 删除表格行 */
  const handleDelete = (record) => {
    confirm({
      title: '是否确认删除',
      onOk() {
        onDeleteItem(record.id);
      }
    });
  };

  const uploadProps = {
    name: 'file',
    action: api.document.uploadFile,
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    showUploadList: false,
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name}上传成功`);
        queryTemplate();
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name}上传失败, ${info.file.response.error}`);
      }
    }
  };

  /* 表格属性 */
  const props = {
    ...tableProps,
    extraFields: [{
      key: 'operation',
      name: '操作',
      render: (text, record) => (
        <div>
          <Upload {...uploadProps} data={record}><a>上传文件</a></Upload>
          <span className="ant-divider"></span>
          <a onClick={e => handleDelete(record, e)}>删除</a>
          <span className="ant-divider"></span>
          <a>查看历史</a>
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
  onDeleteItem: PropTypes.func,
  loading: PropTypes.func
};

export default table;

