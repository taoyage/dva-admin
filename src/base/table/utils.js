// import moment from 'moment';

// const fieldTypes = {
//   normal: value => value
// };

// const _getFieldValue = (value, field) => {
//   console.log(value);
//   console.log(field);
// };

const getColumns = (fields, fieldKeys, extraFields) => {
  const chain = {};
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

  const enhance = (_extraFields) => {
    if (!Array.isArray(_extraFields)) {
      _extraFields = Object.keys(_extraFields).map(key => {
        return Object.assign(_extraFields[key], { key });
      });
    }
    _extraFields.forEach(extraField => {
      const { dataIndex, title, key, name, ...others } = extraField;
      extraField = {
        dataIndex: key || dataIndex,
        title: name || title,
        ...others
      };
      const column = columns.find(item => item.dataIndex === extraField.dataIndex);
      if (column) {
        Object.assign(column, extraField);
      } else {
        columns.push(extraField);
      }
    });
    return chain;
  };

  const values = () => {
    return columns;
  };

  columns = transform(fields);

  if (extraFields) {
    enhance(extraFields);
  }

  return Object.assign(chain, {
    values,
    enhance
  });
};

export default { getColumns };
