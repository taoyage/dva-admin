import React from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { withRouter } from 'dva/router';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import { Layout, Loader } from 'base';
import { config } from 'common/js';
import 'common/styles/index.less';
import './app.less';


import Error from './error';


const { prefix } = config;
const { Header, Sider, Footer, Bread, styles } = Layout;

let lastHref;

const app = ({ appModel, children, location, loading, dispatch }) => {
  const { user, siderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys, menu, permissions } = appModel;
  let { pathname } = location;
  pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const current = menu.filter(item => pathToRegexp(item.route || '').exec(pathname));
  const hasPermission = current.length ? permissions.visit.includes(current[0].id) : false;
  const href = window.location.href;

  if (lastHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      lastHref = href;
    }
  }

  // 往header组件传递的属性
  const headerProps = {
    menu,
    user,
    siderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover () {
      dispatch({ type: 'appModel/switchMenuPopver' });
    },
    logout () {
      dispatch({ type: 'appModel/logout' });
    },
    switchSider () {
      dispatch({ type: 'appModel/switchSider' });
    },
    changeOpenKeys (openKeys) {
      dispatch({ type: 'appModel/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
    }
  };

  const breadProps = {
    menu,
    location
  };

  const siderProps = {
    menu,
    location,
    siderFold,
    darkTheme,
    navOpenKeys,
    changeTheme () {
      dispatch({ type: 'appModel/switchTheme' });
    },
    changeOpenKeys (openKeys) {
      window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys));
      dispatch({ type: 'appModel/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
    }
  };

  if (['/login'].includes(pathname)) {
    return (
      <div>
        {children}
      </div>);
  }
  return (
    <div>
      <Loader fullScreen spinning={loading.effects['appModel/checkToken']} />
      <Helmet>
        <title>同余科技</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" />
      </Helmet>
      <div className={classnames(styles.layout, { [styles.fold]: isNavbar ? false : siderFold }, { [styles.withnavbar]: isNavbar })}>
        {!isNavbar ? <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
          {siderProps.menu.length === 0 ? null : <Sider {...siderProps} />}
        </aside> : ''}
        <div className={styles.main}>
          <Header {...headerProps} />
          <Bread {...breadProps} />
          <div className={styles.container}>
            <div className={styles.content}>
              {hasPermission ? children : <Error />}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

app.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  appModel: PropTypes.object,
  loading: PropTypes.object
};

export default withRouter(connect(({ appModel, loading }) => ({ appModel, loading }))(app));
