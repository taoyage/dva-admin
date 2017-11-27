import React from 'react';
import { Form, Button } from 'antd';
import { Bform } from 'base/form';

// let path = window.location.href;


const optionform = ({ optionFields, form: { getFieldDecorator, validateFieldsAndScroll, resetFields } }) => {
  // const currentPath = window.location.href;
  // if (currentPath !== path) {
  //   path = currentPath;
  //   resetFields();
  // }
  const handleSubmit = () => {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      console.log(values);
    });
  };
  const formProps = {
    fields: optionFields,
    form: { getFieldDecorator },
    layout: 'inline',
    itemlayout: {
      labelCol: {
        span: 12
      },
      wrapperCol: {
        span: 12
      },
      style: {
        width: '250px',
        marginBottom: '10px'
      }
    }
  };
  return (
    <div>
      <Bform {...formProps} />
      <Button type="primary" size="small" onClick={handleSubmit}>交易录入</Button>
    </div>
  );
};

export default Form.create()(optionform);
