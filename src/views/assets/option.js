import React from 'react';
import { connect } from 'dva';
import Option from 'components/assets/option';
import PricingParams from 'components/assets/pricingParams';
import PricingResults from 'components/assets/pricingResults';

const option = ({ optionFields, pricingParamsFields, pricingResultsFields }) => {
  const optionProps = {
    optionFields
  };

  const pricingParamsProps = {
    pricingParamsFields
  };

  const pricingResultsProps = {
    pricingResultsFields
  };

  return (
    <div className="content-inner">
      <Option {...optionProps} />
      <PricingParams {...pricingParamsProps} />
      <PricingResults {...pricingResultsProps} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { optionFields, pricingParamsFields, pricingResultsFields } = state.optionModel;
  return {
    optionFields,
    pricingParamsFields,
    pricingResultsFields
  };
};

export default connect(mapStateToProps)(option);
