<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Equipamentos</h2>
    </b-row>
    <b-row>
      <b-form>
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group id="input-group-1" label="Tombo:" label-for="input-1">
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.nome"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group
              id="input-group-"
              label="Tipo Equipamento:"
              label-for="input-2"
            >
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-2"
                v-model="formulario.tipoEquipamento"
                :options="tipoEquipamento"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group
              id="input-group-"
              label="Status (Condição):"
              label-for="input-3"
            >
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-3"
                v-model="formulario.status"
                :options="status"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group id="input-group-4" label="Marca:" label-for="input-4">
              <b-form-input
                class="mt-2"
                id="input-4"
                v-model="formulario.marca"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="3">
            <b-form-group
              id="input-group-5"
              label="Modelo:"
              label-for="input-5"
            >
              <b-form-input
                class="mt-2"
                id="input-5"
                v-model="formulario.modelo"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="3">
            <b-form-group
              id="input-group-6"
              label="Numero De Serie:"
              label-for="input-6"
            >
              <b-form-input
                class="mt-2"
                id="input-6"
                v-model="formulario.numSerie"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="2">
            <b-form-group id="input-group-7" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="formulario.checked"
                id="checkboxes-7"
                :aria-describedby="ariaDescribedby"
              >
                <b-form-checkbox value="Não">Não Aparente</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <label class="mb-2" for="textarea-default"
            >Descrição Complementar:</label
          >
          <b-col sm="12">
            <b-form-textarea
              id="textarea-default"
              rows="8"
              placeholder="Descrição Complementar"
              v-model="formulario.descricao"
            ></b-form-textarea>
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
  name: "FormularioEquipamento",
  data() {
    return {
      formulario: {
        nome: "",
        tipoEquipamento: null,
        status: null,
        marca: "",
        modelo: "",
        numSerie: "",
        checked: [],
        descricao: "",
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
        "Ocioso",
      ],
    };
  },
};
</script>