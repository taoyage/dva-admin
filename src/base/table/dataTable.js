import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
// import { request } from 'common/js';
import { getColumns } from './utils';

const DataTable = ({ fields, extraFields, ...props }) => {
  const columns = extraFields ? getColumns(fields).enhance(extraFields).values() : getColumns(fields).values();
  return (
    <Table
      pagination={false}
      columns={columns}
      rowKey={record => record.id}
      size="middle"
      {...props}
    />
  );
};

Table.PropTypes = {
  props: PropTypes.object
};

export default DataTable;
