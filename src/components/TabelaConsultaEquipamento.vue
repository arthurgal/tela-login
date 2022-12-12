<template>
  <b-container class="w-75 m-auto mt-5">
    <b-table responsive striped  :items="equipamentos" :fields="fields"></b-table>
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