import modelExtend from 'dva-model-extend';
import pathToRegexp from 'path-to-regexp';
import { optionFields, pricingFields } from './config';
import { formModel } from '../common';

export default modelExtend(formModel, {
  namespace: 'optionModel',
  state: {
    optionFields: [],
    pricingParamsFields: [],
    pricingResultsFields: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(() => {
        const match = pathToRegexp('/assets/option/:id').exec(location.pathname)[1];
        dispatch({
          type: 'updateState',
          payload: {
            optionFields: optionFields[match],
            pricingParamsFields: pricingFields.params,
            pricingResultsFields: pricingFields.results
          }
        });
      });
    }
  },
  effects: {},
  reducers: {}
});
