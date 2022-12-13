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