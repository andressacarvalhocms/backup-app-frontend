<template>
  <BaseLayout activemenu="3">
    <BaseContentTitle icon="notes-medical">
      Classificação de Risco
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-adicionar-classificacao'"
          size="sm"
          variant="outline-secondary"
        >
          <font-awesome-icon icon="plus" /> Adicionar Classificação
        </b-button>
      </template>
    </BaseContentTitle>

    <div class="table-responsive">
      <b-table
        striped
        hover
        fixed
        bordered
        small
        :items="items"
        :fields="fields"
      />
    </div>

    <b-modal
      id="modal-adicionar-classificacao"
      ref="modal"
      size="md"
      title="Adicionar nova Classificação"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleSave"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          label="Diabetes"
          label-for="inp-diabetes"
          invalid-feedback="Diabetes é obrigatório"
        >
          <b-form-input
            id="inp-diabetes"
            v-model="form.diabetes"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Hipertensão"
          label-for="inp-hipertensao"
          invalid-feedback="Hipertensão é obrigatório"
        >
          <b-form-input
            id="inp-hipertensao"
            v-model="form.hipertensao"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Creatinina"
          label-for="inp-creatinina"
          invalid-feedback="Creatinina é obrigatório"
        >
          <b-form-input
            id="inp-creatinina"
            v-model="form.creatinina"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Ureia"
          label-for="inp-ureia"
          invalid-feedback="Ureia é obrigatório"
        >
          <b-form-input
            id="inp-ureia"
            v-model="form.ureia"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Microalbuminaria"
          label-for="inp-microalbuminaria"
          invalid-feedback="Microalbuminaria é obrigatório"
        >
          <b-form-input
            id="inp-microalbuminaria"
            v-model="form.microalbuminaria"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Idade"
          label-for="inp-idade"
          invalid-feedback="Idade é obrigatório"
        >
          <b-form-input
            id="inp-idade"
            v-model="form.idade"
            type="text"
            required
          />
        </b-form-group>
<b-form-group
          label="Sexo"
          label-for="inp-sexo"
          invalid-feedback="Sexo é obrigatório"
        >
          <b-form-input
            id="inp-sexo"
            v-model="form.sexo"
            type="text"
            required
          />
        </b-form-group>

        <b-form-group
          label="TFG"
          label-for="inp-tfg"
          invalid-feedback="TFG é obrigatório"
        >
          <b-form-input
            id="inp-tfg"
            v-model="form.tfg"
            type="text"
            required
          />
        </b-form-group>
      </form>

      <template slot="modal-ok">
        Adicionar
      </template>
      <template slot="modal-cancel">
        Cancelar
      </template>
    </b-modal>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';

export default {
  name: 'Alergias',
  components: {
    BaseLayout,
    BaseContentTitle
  },
  data() {
    return {
      fields: [
        {
          key: 'DM',
          sortable: true
        },
        {
          key: 'HAS',
          sortable: true
        },
        {
          key: 'Creatinina',
          sortable: true
        },
        {
          key: 'Ureia',
          sortable: true
        },
        {
          key: 'Microalbuminaria',
          sortable: true
        },
        {
          key: 'Idade',
          sortable: true
        },
        {
          key: 'Sexo',
          sortable: true
        },
        {
          key: 'TFG',
          sortable: true
        },
        {
          key: 'Classificação',
          sortable: true
        }
      ],
      items: [
        { DM: 'T', HAS: 'F', Creatinina: '0,86', Ureia: '35,8', Microalbuminaria: '36,8', Idade: '56', Sexo: 'F', TFG: '96,9', Classificação: 'RISCO MODERADO' },
        { DM: 'T', HAS: 'T', Creatinina: '0,54', Ureia: '25,2', Microalbuminaria: '0,6', Idade: '60', Sexo: 'F', TFG: '139,9', Classificação: 'ALTO RISCO' },
        { DM: 'T', HAS: 'F', Creatinina: '0,81', Ureia: '33', Microalbuminaria: '77,5', Idade: '79', Sexo: 'M', TFG: '63,8', Classificação: 'RISCO MODERADO' },
      ],
      form: {
        DM: '',
        gravidade: '',
        HAS: '03/04/2019'
      }
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    resetModal() {
      this.form.nome = '';
      this.form.gravidade = '';
    },
    handleSave(evt) {
      evt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.items.push({
        nome: this.form.nome,
        data_cadastro: this.form.data_cadastro
      });
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>
