import { login } from 'api/user';

export default {
  namespace: 'loginModel',
  effects: {
    * login ({ payload }, { put, call }) {
      const data = yield call(login, payload);

      if (data.success) {
        const storageItem = Object.assign({}, {
          role: data.role,
          user: data.user,
          department_id: data.department_id,
          token: data.token
        });

        for (const key in storageItem) {
          localStorage.setItem(key, data[key]);
        }

        yield put({ type: 'appModel/checkToken' });
      }
    }
  }
};
