import { http } from './config';

export default {

  login: (login) => {
    return http.post('login', login);
  },
  cadastrar: (usuario) => {
    return http.post('usuario/cadastrar/', usuario);
  }
};
