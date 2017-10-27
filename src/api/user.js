import { request } from 'common/js';
import { user } from './config';

export async function login (params) {
  return request({
    url: user.login,
    method: 'post',
    data: params
  });
}

export async function logout (params) {
  return request({
    url: user.logout,
    method: 'get',
    data: params
  });
}

export async function checkToken (params) {
  return request({
    url: user.tokens,
    method: 'get',
    data: params
  });
}

