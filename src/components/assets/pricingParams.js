import React from 'react';
import { Form } from 'antd';
import { Bform } from 'base/form';

const pricingParams = ({ pricingParamsFields, form: { getFieldDecorator } }) => {
  const formProps = {
    fields: pricingParamsFields,
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
        marginTop: '10px'
      }
    }
  };
  return (
    <Bform {...formProps} />
  );
};

export default Form.create()(pricingParams);
