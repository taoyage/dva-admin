import React from 'react';
import Table from 'components/document/templateTable';
import BModal from 'base/modal/modal';
import { connect } from 'dva';
import { fields } from './config';

const Template = ({ dispatch, loading, list, pagination }) => {
  const tableProps = {
    dataSource: list,
    pagination,
    fields,
    loading: loading.effects['templateModel/query'],
    onDeleteItem(id) {
      dispatch({
        type: 'templateModel/delete',
        payload: { id }
      });
    },
    queryTemplate() {
      dispatch({
        type: 'templateModel/query'
      });
    }
  };

  const modalProps = {
    fields,
    title: '添加模版',
    excludes: ['status'],
    showBtn: true,
    onOk(data) {
      dispatch({
        type: 'templateModel/create',
        payload: data
      });
    }
  };

  return (
    <div className="content-inner">
      <BModal {...modalProps} />
      <Table {...tableProps} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { list, pagination } = state.templateModel;
  return {
    loading: state.loading,
    list,
    pagination
  };
};

export default connect(mapStateToProps)(Template);
