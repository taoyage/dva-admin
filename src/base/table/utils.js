import moment from 'moment';

const fieldTypes = {
  normal: value => value
};

const _getFieldValue = (value, field) => {
  console.log(value);
  console.log(field);
};

const getColumns = (fields, fieldKeys, extraFields) => {
  let columns = [];
  const transform = (_fields) => {
    return _fields.map(field => {
      const { dataIndex, title, key, name, render, ...others } = field;
      // if (!render) {
      //   render = (value) => {
      //     return _getFieldValue(value, field);
      //   };
      // }
      return {
        key,
        dataIndex: key || dataIndex,
        title: name || title,
        render,
        ...others
      };
    });
  };
  columns = transform(fields);
  return columns;
};

export default { getColumns };
