import React from 'react';
import { withRouter } from 'dva/router';
import { connect } from 'dva';

const app = () => {
  return (
    <div>123123</div>
  );
};

export default withRouter(connect()(app));
