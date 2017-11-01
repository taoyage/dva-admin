const prefix = '/api';

export default {
  user: {
    login: `${prefix}/login`,
    logout: `${prefix}/logout`,
    tokens: `${prefix}/tokens`
  },
  document: {
    template: `${prefix}/template`
  }
};
