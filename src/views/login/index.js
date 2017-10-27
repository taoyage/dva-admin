import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form } from 'antd';
import { config } from 'common/js';
import { Bform } from 'components/form';
import styles from './index.less';


const fields = [{
  key: 'username',
  placeholder: 'username',
  required: true
}, {
  key: 'password',
  placeholder: 'password',
  type: 'password',
  required: true
}];

const login = ({
                 dispatch,
                 loading,
                 form: {
                   getFieldDecorator,
                   validateFieldsAndScroll
                 }
               }) => {
  const handleSubmit = () => {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'loginModel/login', payload: values });
    });
  };

  const formProps = {
    fields,
    event: {
      username: { onPressEnter: handleSubmit },
      password: { onPressEnter: handleSubmit }
    },
    form: { getFieldDecorator }
  };
  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <span>{config.name}</span>
      </div>
      <Bform {...formProps} />
      <Row>
        <Button type="primary" size="large" onClick={handleSubmit} loading={loading.effects.login}>
          登陆
        </Button>
      </Row>
    </div>
  );
};

login.PropTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.object,
  form: PropTypes.object
};

export default connect(({ loading }) => ({ loading }))(Form.create()(login));
