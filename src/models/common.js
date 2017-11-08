const model = {
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
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default {
  model
};
