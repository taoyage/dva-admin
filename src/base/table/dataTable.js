import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { getColumns } from './utils';

const DataTable = ({ fields, ...props }) => {

  // const handleModal = (record) => {
  //   console.log(record);
  // };
  const columns = getColumns(fields);

  return (
    <Table
      {...props}
      columns={columns}
      rowKey={record => record.id}
    />
  );
};

Table.PropTypes = {
  props: PropTypes.object
};

export default DataTable;
