import { routerRedux } from 'dva/router';
import { config, menu } from 'common/js';
import { checkToken, logout } from 'api/user';
import { parse } from 'qs';

const { prefix } = config;

export default {
  namespace: 'appModel',
  /**
   * [state状态属性]
   *
   * @key {[Object]}      user                    用户名
   * @key {[Object]}      permissions             权限
   * @key {[Array]}       menu                    侧边栏菜单
   * @key {[Bool]}        menuPopoverVisible      是否显示菜单
   * @key {[Bool]}        siderFold               侧边栏是否展开
   * @key {[Bool]}        darkTheme               侧边栏主题
   * @key {[Bool]}        isNavbar                屏幕宽度是否小于769
   * @key {[Array]}       navOpenKeys             展开第几个菜单栏
   *
   */
  state: {
    user: {},
    permissions: {
      visit: []
    },
    menu,
    menuPopoverVisible: false,
    siderFold: localStorage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: localStorage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(localStorage.getItem(`${prefix}navOpenKeys`)) || []
  },
  subscriptions: {
    setup ({ dispatch }) {
      if (localStorage.getItem('token') || location.pathname !== '/login') {
        dispatch({ type: 'checkToken' });
      }
      let tid;
      window.onresize = () => {
        clearTimeout(tid);
        tid = setTimeout(() => {
          dispatch({ type: 'changeNavbar' });
        }, 100);
      };
    }
  },
  effects: {
    // 权限验证
    * checkToken ({ payload }, { call, put }) {
      const { success, user } = yield call(checkToken, payload);
      // 权限验证成功
      if (success && user) {
        const { permissions } = user;
        let menuList = menu;
        if (permissions.role === 'admin') {
          // 返回所有菜单列表
          permissions.visit = menu.map(item => item.id);
        } else {
          // 过滤菜单列表
          menuList = menuList.filter(item => {
            const cases = [
              permissions.visit.includes(item.id),
              item.mpid ? permissions.visit.includes(item.mpid) || item.mpid === '-1' : true,
              item.bpid ? permissions.visit.includes(item.bpid) : true
            ];
            return cases.every(_ => _);
          });
        }
        // 更新user,permissions,menu的state状态
        yield put({
          type: 'updateState',
          payload: {
            user,
            permissions,
            menu: menuList
          }
        });
        // 登陆成功路由跳转
        if (location.pathname === '/login') {
          yield put(routerRedux.push('/product-list'));
        }// 权限验证失败
      } else {
        if (['/login'].indexOf(location.pathname) < 0) {
          window.location = `${location.origin}/login`;
        }
      }
    },
    // 退出登录
    * logout ({ payload }, { call, put }) {
      const data = yield call(logout, parse(payload));
      if (data.success) {
        localStorage.removeItem('token');
        yield put({ type: 'checkToken' });
      }
    },
    * changeNavbar ({ payload }, { put, select }) {
      const { appModel } = yield (select(_ => _));
      const isNavbar = document.body.clientWidth < 769;
      if (isNavbar !== appModel.isNavbar) {
        yield put({ type: 'handleNavbar', payload: isNavbar });
      }
    }
  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    switchSider (state) {
      localStorage.setItem(`${prefix}siderFold`, !state.siderFold);
      return {
        ...state,
        siderFold: !state.siderFold
      };
    },
    switchTheme (state) {
      localStorage.setItem(`${prefix}darkTheme`, !state.darkTheme);
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    },
    switchMenuPopver (state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible
      };
    },
    handleNavbar (state, { payload }) {
      return {
        ...state,
        isNavbar: payload
      };
    },
    handleNavOpenKeys (state, { payload: navOpenKeys }) {
      return {
        ...state,
        ...navOpenKeys
      };
    }
  }
};
