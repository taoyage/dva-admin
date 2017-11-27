import React from 'react';
import { Form } from 'antd';
import { Bform } from 'base/form';

const pricingResults = ({ pricingResultsFields, form: { getFieldDecorator } }) => {
  const formProps = {
    fields: pricingResultsFields,
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
    <div>
      <Bform {...formProps} />
    </div>

  );
};

export default Form.create()(pricingResults);
