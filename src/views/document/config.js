export const fields = [{
  key: 'template_type',
  name: '模版类型',
  enums: {
    收益凭证说明书: '收益凭证说明书',
    产品TA要素表: '产品TA要素表',
    产品发行审批单: '产品发行审批单',
    产品风险揭示书: '产品风险揭示书',
    产品合同: '产品合同'
  },
  required: true
}, {
  key: 'option_style',
  name: '期权类型',
  enums: {
    价差: '价差',
    欧式香草: '欧式香草',
    二元: '二元',
    障碍触碰: '障碍触碰',
    default: '所有'
  },
  required: true,
  render: text => text === 'default' ? <span>所有</span> : <span>{text}</span>
}, {
  key: 'put_call',
  name: '方向',
  enums: {
    call: '看涨',
    put: '看跌',
    default: '所有'
  },
  required: true
}, {
  key: 'status',
  name: '状态',
  required: true,
  render: text => text ? <span>已上传</span> : <span>未上传</span>
}];
