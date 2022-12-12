<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row class="linha-titulo">
      <h2 class="mb-2">Cadastro de Novo Equipamentos</h2>
    </b-row>
    <b-row>
      <b-form @submit="salvar" @reset="onReset">
        <b-row class="mb-3 mt-5">
          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group id="input-group-1" label="Tombo:" label-for="input-1">
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.tombo"
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
                :options="tipoEquipamentoData"
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
                v-model="formulario.statusEquipamento"
                :options="statusData"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="3">
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
                v-model="formulario.numeroDeSerie"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="3">
            <b-form-group
              id="input-group-7"
              label="Usuario:"
              label-for="input-7"
            >
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-7"
                v-model="formulario.usuario"
                :options="usuarioData"
                required
              ></b-form-select>
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
              v-model="formulario.observacao"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="ml-auto">
            <GrupoBotaoForm/>
          </b-col>
        </b-row>
      </b-form>
    </b-row>
    {{formulario}}
  </b-container>
</template>

<script>

import GrupoBotaoForm from '@/components/GrupoBotaoForm.vue';
import serviceEquipamento from '@/services/serviceEquipamento';

export default {
  name: "FormularioEquipamento",
  components:{
    GrupoBotaoForm
  },
  data() {
    return {
      formulario: {
        tombo: "",
        tipoEquipamento: null,
        statusEquipamento: null,
        usuario: null,
        marca: "",
        modelo: "",
        numeroDeSerie: "",
        observacao: "",
      },
      tipoEquipamentoData: [],
      statusData: [],
      usuarioData: []
    };
  },

  methods:{

    salvar(){
      serviceEquipamento.salvar(this.formulario).then(() => {

      })
    },

    async getTipo(){
      const req = await serviceEquipamento.getTipo()
      this.tipoEquipamentoData = req.data.map(elem => ({
        text: elem.tipo,
        value: elem,
      }))

    },

    async getStatus(){
      const req = await serviceEquipamento.getStatus()
      this.statusData = req.data.map(elem => ({
        text: elem.status,
        value: elem,
      }))
    },

    async getUsuarios(){
      const req = await serviceEquipamento.getUsuarios()
      this.usuarioData = req.data.map(elem => ({
        text: elem.matricula + " - " + elem.nome,
        value: elem,
      }))
    },

    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formulario))
      },

      onReset(event) {
        event.preventDefault()
        this.formulario.tombo = ''
        this.formulario.marca = ''
        this.formulario.modelo = ''
        this.formulario.numeroDeSerie = ''
        this.formulario.observacao = ''

      },

  },

  mounted(){
    this.getTipo()
    this.getStatus()
    this.getUsuarios()
  }


};
</script>

<style scoped>
  .linha-titulo{
    border-bottom:solid 2px #20262c;
    color: #20262c;
  }

</style>