<template>
  <BaseLayout activemenu="">
    <BaseContentTitle icon="clipboard-list">
      Análise de Risco
      <template v-slot:toolbar>
        <b-button
          v-b-modal="'modal-analise'"
          size="sm"
          variant="outline-secondary"
        >
          Realizar nova análise
        </b-button>
      </template>
    </BaseContentTitle>
    <BaseContentTitle icon="tachometer-alt">
      Exames Atuais
    </BaseContentTitle>

    <b-row>
      <DashboardCard
        title="Creatina"
        success="true"
      />
      <DashboardCard
        title="Ureia"
        success="true"
      />
      <DashboardCard
        title="Albumina"
        success="true"
      />
      <DashboardCard
        title="Potássio"
        success="true"
      />
      <DashboardCard
        title="Microalbuminúria"
        success="true"
      />
      <DashboardCard title="Albuminúria" />
      <DashboardCard title="Taxa de Filtração Glomerular (TFG)" />
    </b-row>
    <b-modal
      id="modal-analise"
      size="sm"
      centered
      no-close-on-backdrop
      no-close-on-esc
      hide-header
      hide-footer
      @show="startAnalise"
    >
      <div
        v-if="sanalisando"
        class="d-flex align-items-center"
      >
        <b-spinner type="grow" />
        <div class="ml-3">
          <strong>Realizando análise</strong><br>
          Por favor, aguarde um instante...
        </div>
      </div>
    </b-modal>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue';
import BaseContentTitle from '@/components/BaseContentTitle.vue';
import DashboardCard from '@/components/DashboardCard.vue';

export default {
  name: 'Home',
  components: {
    BaseLayout,
    BaseContentTitle,
    DashboardCard
  },
  data() {
    return {
      sanalisando: true,
    };
  },
  methods: {
    startAnalise(evt) {
      setTimeout(() => {
        this.$bvModal.hide('modal-analise');
      }, 2000);
    }
  }
};
</script>
