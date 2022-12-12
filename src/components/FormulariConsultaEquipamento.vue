<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row class="linha-titulo">
      <b-col cols="10">
        <h2 class="mb-2">Consulta de Equipamentos</h2>
      </b-col>
      <b-col>
        <b-button to="/cadastro/equipamento" variant="dark">Novo</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-input-group class="w-50 mt-5">
        <b-form-input v-model="busca" placeholder="Busque por tombo"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-dark">Buscar</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-row>
  </b-container>
</template>
  
<script>
export default {
  name: "FormularioEquipamento",
  data() {
    return {
        busca:''
  }
},
}

</script>


<style scoped>
.linha-titulo {
  border-bottom: solid 2px #20262c;
  color: #20262c;
}
</style>