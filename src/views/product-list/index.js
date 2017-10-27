import React from 'react';
import { connect } from 'dva';

const productList = () => {
  return (
    <div className="content-inner">productList</div>
  );
};

export default connect()(productList);
