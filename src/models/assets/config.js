const commonFields = [{
  key: 'trade_id',
  name: '交易ID',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: '交易簿',
  name: 'book_id',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'trade_date',
  name: '交易日',
  type: 'date',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'counterparty',
  name: '交易对手',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'direction',
  name: '买卖方向',
  enums: {
    buy: '买',
    sell: '卖'
  },
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'instrument_id',
  name: '标的物',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'specified_price',
  name: '定盘价',
  enums: {
    close: '收盘价',
    settle: '结算价'
  },
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'expiration_date',
  name: '到期日',
  type: 'date',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'expiration_time',
  name: '到期时间',
  type: 'date',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'settlement_type',
  name: '结算方式',
  enums: {
    cash: '现金',
    physical: '实物',
    commodity: '商品',
    equity: '股票'
  },
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'option_type',
  name: '期权类型',
  enums: {
    call: '看涨',
    put: '看跌'
  },
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'strike_price_per_unit',
  name: '行权价(¥)',
  type: 'number',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'number_of_contracts',
  name: '期权合约数',
  type: 'number',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'premium',
  name: '期权费(¥)',
  type: 'number',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}, {
  key: 'premium_payment_date',
  name: '期权费支付日',
  type: 'date',
  meta: {
    size: 'small'
  },
  placeholder: false,
  required: true,
  hasFeedback: false
}];

const optionFields = {
  european: commonFields,
  american: commonFields,
  knockout: commonFields.concat([{
    key: 'barrier',
    name: '障碍价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'barrier_direction',
    name: '敲出方向',
    enums: {
      up_and_out: '向上敲出',
      down_and_out: '向下敲出'
    },
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'rebate',
    name: '敲出补偿',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'rebate_type',
    name: '敲出补偿支付时间',
    enums: {
      pay_when_hit: '敲出即付',
      pay_at_expiry: '到期支付'
    },
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }]),
  digital: commonFields.concat([{
    key: 'payout',
    name: '支付价(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }]),
  spread: commonFields.concat([{
    key: 'upper_strike_price_per_unit',
    name: '高执行价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'lower_strike_price_per_unit',
    name: '低执行价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }]),
  doubleshark: commonFields.concat([{
    key: 'upper_strike',
    name: '高执行价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'upper_barrier',
    name: '高障碍价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'upper_rebate',
    name: '高障碍补偿(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'lower_strike',
    name: '低执行价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'lower_barrier',
    name: '低障碍价格(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'lower_rebate',
    name: '低障碍补偿(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }])
};

const pricingFields = {
  params: [{
    key: 'pricer',
    name: '模型',
    enums: {
      black_analytic: '解析解',
      black_pde: '偏微分方程'
    },
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'valuation_date',
    name: '估值日',
    type: 'date',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'spot',
    name: '标的物价格',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'vol',
    name: '波动率(%)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'r',
    name: '无风险利率(%)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'q',
    name: '股息+融券成本(%)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }],
  results: [{
    key: 'price',
    name: '现价(¥)',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'delta',
    name: 'DELTA',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'gamma',
    name: 'GAMMA',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'vega',
    name: 'VEGA',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }, {
    key: 'theta',
    name: 'THETA',
    type: 'number',
    meta: {
      size: 'small'
    },
    placeholder: false,
    required: true,
    hasFeedback: false
  }]
};


export default { optionFields, pricingFields };
