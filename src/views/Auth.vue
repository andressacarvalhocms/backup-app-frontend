<template>
  <BaseLayout @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Email:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="username"
        type="email"
        required
        autofocus
        placeholder="Digite seu email"
      />
    </b-form-group>

    <b-form-group
      id="input-group-s"
      label="Senha:"
      label-for="input-s"
    >
      <b-form-input
        id="input-s"
        v-model="password"
        type="password"
        required
        placeholder="Digite sua senha"
      />
    </b-form-group>

    <b-form-group>
      <b-button
        variant="primary"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        Entrar
      </b-button>
    </b-form-group>

    <p class="mt-5 mb-3 text-muted text-center">
      Ainda não tem cadastro? <a href="#/register">Crie sua conta agora!</a>
    </p>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayoutLogin.vue';

export default {
  name: 'Historico',
  components: {
    BaseLayout
  },
  data: () => ({
    username: '',
    password: ''
  }),
  beforeMount() {
    if (this.$router.currentRoute.name === 'logout') {
      console.log('Evt:Logout');
      localStorage.removeItem('jwt');
      this.$router.push({ name: 'login' });
    }
  },
  methods: {
    onSubmit(evt) {
      console.log('Evt:Login');
      localStorage.setItem('jwt', this.username);
      this.$router.push({ name: 'home' });
    }
  }
};
</script>
