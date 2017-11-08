import React from 'react';
import { Modal, Form, Button } from 'antd';
import { Bform, getFields } from '../form';

class BModal extends React.Component {
  constructor(props) {
    super(props);
    const { visible } = props;
    this.state = {
      visible: visible || false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this.setState({
      visible: false
    });
  };

  handleOk = () => {
    const { onOk } = this.props;
    if (onOk) {
      this.props.form.validateFieldsAndScroll((errors, values) => {
        if (errors) {
          return;
        }
        onOk(values);
        this.handleCancel();
        this.props.form.resetFields();
      });
    }
  };

  render() {
    const { form, title, excludes } = this.props;
    let { fields } = this.props;
    fields = excludes ? getFields(fields).excludes(excludes).values() : fields;

    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        {this.props.showBtn && <Button type="primary" onClick={this.showModal}>{title}</Button>}
        <Modal
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          title={title}
          visible={this.state.visible}
          maskClosable={false}
        >
          <Bform
            form={form}
            fields={fields}
            layout={{ labelCol: { span: 6 }, wrapperCol: { span: 14 } }}
          />
        </Modal>
      </div>
    );
  }
}

export default Form.create()(BModal);
