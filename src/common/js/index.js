import lodash from 'lodash';
import config from './config';
import { menu } from './menu';
import { request } from './request';

const arrayUtil = {
  /**
   * 数组内查询
   * @param   {array}      array
   * @param   {String}    id
   * @param   {String}    keyAlias
   * @return  {Array}
   */
  queryArray: (array, key, keyAlias = 'key') => {
    if (!(array instanceof Array)) {
      return null;
    }
    const item = array.filter(_ => _[keyAlias] === key);
    if (item.length) {
      return item[0];
    }
    return null;
  },

  /**
   * 数组格式转树状结构
   * @param   {array}     array
   * @param   {String}    id
   * @param   {String}    pid
   * @param   {String}    children
   * @return  {Array}
   */
  arrayToTree: (array, id = 'id', pid = 'pid', children = 'children') => {
    const data = lodash.cloneDeep(array);
    const result = [];
    const hash = {};
    data.forEach((item, index) => {
      hash[data[index][id]] = data[index];
    });

    data.forEach((item) => {
      const hashVP = hash[item[pid]];
      if (hashVP) {
        !hashVP[children] && (hashVP[children] = []);
        hashVP[children].push(item);
      } else {
        result.push(item);
      }
    });
    return result;
  }
};

export default {
  config,
  arrayUtil,
  menu,
  request
};

