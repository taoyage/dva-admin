import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'common/js';
import { Icon, Switch } from 'antd';
// import logo from 'common/image/logo.png';
import styles from './layout.less';

import Menus from './menu';

const Sider = ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {
  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  };
  return (
    <div>
      <div className={styles.logo}>
        {/* <img alt={'logo'} src={logo} />*/}
        {siderFold ? '' : <span>{config.name}</span>}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />Switch Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div> : ''}
    </div>
  );
};

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
};

export default Sider;
