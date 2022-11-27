<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Setor</h2>
    </b-row>

    <b-row>
      <b-form>
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group
              id="input-group-1"
              label="Setor:"
              label-for="input-1"
            >
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.setor"
                type="text"
                require
              ></b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group id="input-group-" label="Sala:" label-for="input-3">
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-3"
                v-model="formulario.sala"
                :options="sala"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>


        <b-row>
          <b-col cols="12" class="ml-auto">
            <b-button type="reset" variant="danger">Limpar</b-button>
            <b-button class="m-2" type="submit" variant="primary"
              >Cadastrar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      formulario: {
        setor: "",
        sala: null,
      },
      sala: [
        { text: "Selecione", value: null },
        "1",
        "2",
        "3",
        "4",
      ],
    };
  },
};
</script>