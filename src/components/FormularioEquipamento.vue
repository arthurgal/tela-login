<template>
  <b-container class="w-80 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Equipamentos</h2>
    </b-row>
    <b-row>
      <b-form>
        <b-row>
          <b-col cols="4">
            <b-form-group
              id="input-group-1"
              label="Tombo"
              label-for="input-1"
        
            >
              <b-form-input
                id="input-1"
                v-model="formulario.nome"
                type="text"
                require
              ></b-form-input>
            </b-form-group>

          </b-col>
          <b-col cols="4">
            <b-form-group
              id="input-group-"
              label="Tipo Equipamento:"
              label-for="input-2"
            >
              <b-form-select class="w-100 p-2"
                id="input-2"
                v-model="formulario.tipoEquipamento"
                :options="tipoEquipamento"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>

        <b-col cols="4">
            <b-form-group
              id="input-group-"
              label="Status (Condição):"
              label-for="input-3"
            >
              <b-form-select class="w-100 p-2"
                id="input-3"
                v-model="formulario.status"
                :options="status"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>

        </b-row>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FormularioEquipamento",
  data() {
    return {
      formulario: {
        nome: "",
        tipoEquipamento: null,
        status: null
      },
      tipoEquipamento: [
        { text: "Selecione", value: null },
        "Computador",
        "Notebook",
        "Monitor",
        "Estabilizaor",
      ],
      status: [
        { text: "Selecione", value: null },
        "Funcionando",
        "Quebrado",
        "Ocioso"
      ],
    };
  },
};
</script>