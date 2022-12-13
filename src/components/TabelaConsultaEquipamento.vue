<template>
  <b-container class="w-75 m-auto mt-5">
    <b-col lg="6" class="my-1">
        <b-form-group
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Busque pelo Tombo"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-table :filter="filter" responsive striped  :items="equipamentos" :fields="fields"></b-table>
      </b-col>
    
  </b-container>
  
</template>
  
<script>
import serviceEquipamento from "@/services/serviceEquipamento";

export default {
  data() {
    return {
      equipamentos: [],
      fields: [
        {
          key: 'tombo',
        },
        {
          key: 'tipoEquipamento.tipo',
          label: 'Tipo Equipamento'
        },
        {
          key: 'statusEquipamento.status',
          label: 'Status'
        },
        {
          key: 'marca',
        },
        {
          key: 'modelo',
        },
        {
          key: 'numeroDeSerie',
          label: 'Numero de Serie'
        },
        {
          key: 'usuario.nome',
          label: 'Usuario'
        },
        {
          key: 'usuario.setor.setor',
          label: 'Setor',
        },


      ],
      filter: null,
    };
  },

  methods: {
    async listar() {
      const req = await serviceEquipamento.getAllEquipamentos();
      this.equipamentos = req.data
      console.log(this.equipamentos)
    },
  },

  mounted() {
    this.listar();
  },
};
</script>