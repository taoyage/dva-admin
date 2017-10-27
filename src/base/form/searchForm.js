import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'antd';
import { createFieldDecorator } from './utils';

const searchForm = ({ fields, init = {}, form }) => {
  const ColProps = {
    xs: 24,
    sm: 12,
    md: 6,
    style: {
      marginBottom: 16
    }
  };

  const btnColProps = {
    xs: 24,
    md: 24,
    sm: 24,
    xl: 6,
    style: {
      marginBottom: 16
    }
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form layout="inline">
      <Row gutter={24}>
        {fields.map((field, index) =>
          <Col {...ColProps} key={`${index}`}>
            {createFieldDecorator(field, init, form.getFieldDecorator)}
          </Col>
        )}
        <Col {...btnColProps}>
          <Button type="primary">查询</Button>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={handleReset}>重置</Button>
        </Col>
      </Row>
    </Form>
  );
};

searchForm.PropTypes = {
  fields: PropTypes.array
};

export default Form.create()(searchForm);
