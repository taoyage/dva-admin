import modelExtend from 'dva-model-extend';

const formModel = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

const model = modelExtend(formModel, {
  state: {
    visible: false,
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      shoTotal: total => `Total ${total} Item`,
      current: 1,
      total: 0
    }
  },
  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload;
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination
        }
      };
    }
  }
});


export default {
  model,
  formModel
};
