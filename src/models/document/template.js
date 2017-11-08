import modelExtend from 'dva-model-extend';
import { model } from '../common';
import { getTemplate, createTemplate, deleteTemplate } from 'api/document';

export default modelExtend(model, {
  namespace: 'templateModel',
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/template') {
          dispatch({ type: 'query', payload: location.query });
        }
      });
    }
  },
  effects: {
    * query({ payload = {} }, { call, put }) {
      const data = yield call(getTemplate, payload);
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.count
            }
          }
        });
      }
    },
    * create({ payload = {} }, { call, put }) {
      const data = yield call(createTemplate, payload);
      if (data.success) {
        yield put({ type: 'query' });
      }
    },
    * delete({ payload = {} }, { call, put }) {
      const data = yield call(deleteTemplate, payload);
      if (data.success) {
        yield put({ type: 'query' });
      }
    }
  },
  reducers: {
    showModal(state) {
      return { ...state, visible: true };
    },
    hideModal(state) {
      return { ...state, visible: false };
    }
  }
});
