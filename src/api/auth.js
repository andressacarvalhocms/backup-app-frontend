import axios from '@/utils/axios';

export const login = ({ email, password }) => {
  return axios.request({
    url: 'login',
    method: 'post',
    data: { email, password }
  });
};
