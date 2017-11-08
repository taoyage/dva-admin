import { request } from 'common/js';
import { document } from './config';

export async function getTemplate(params) {
  return request({
    url: document.template,
    method: 'get',
    data: params
  });
}

export async function createTemplate(params) {
  return request({
    url: document.template,
    method: 'post',
    data: params
  });
}

export async function deleteTemplate(params) {
  return request({
    url: document.template,
    method: 'delete',
    data: params
  });
}
