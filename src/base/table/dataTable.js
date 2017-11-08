import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { request } from 'common/js';
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

// class DataTable extends React.Component {
//   constructor(props) {
//     super(props);
//     const {
//       fields,
//       extraFields,
//       dataSource,
//       pagination = {
//         showSizeChanger: true,
//         showQuickJumper: true,
//         showTotal: total => `共 ${total} 条`,
//         current: 1,
//         total: 0
//       }
//     } = props;
//
//     this.state = {
//       dataSource,
//       pagination,
//       loading: true
//     };
//     this.columns = extraFields ? getColumns(fields).enhance(extraFields).values() : getColumns(fields).values();
//   }
//
//   componentWillMount() {
//     console.log(this.state.dataSource);
//   }
//
//   componentDidMount() {
//     console.log(this.state.dataSource);
//     this.fetch();
//   }
//   //
//   // fetch = () => {
//   //   this.setState({ loading: true });
//   //   this.data = request({
//   //     url: '/api/template',
//   //     method: 'get'
//   //   }).then(result => {
//   //     if (!this.tableElement) {
//   //       return;
//   //     }
//   //     const { pagination } = result || this.state;
//   //     this.setState({
//   //       loading: false,
//   //       dataSource: result.data,
//   //       pagination
//   //     });
//   //   });
//   // };
//
//   render() {
//     const { loading, dataSource, pagination } = this.state;
//     return (
//       <Table
//         ref={el => this.tableElement = el}
//         pagination={pagination}
//         dataSource={dataSource}
//         // loading={loading}
//         columns={this.columns}
//         rowKey={record => record.id}
//         size="middle"
//         {...this.state.TableProps}
//       />
//     );
//   }
// }

Table.PropTypes = {
  props: PropTypes.object
};

export default DataTable;
