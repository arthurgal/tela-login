<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Responsável</h2>
    </b-row>

    <b-row>
      <b-form @submit="salvar" @reset="onReset">
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="3">
            <b-form-group
              id="input-group-1"
              label="Matricula:"
              label-for="input-1"
            >
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.matricula"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group id="input-group-" label="Nome:" label-for="input-2">
              <b-form-input
                class="w-100 p-2 mt-2"
                id="input-2"
                v-model="formulario.nome"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col sm="12" md="12" lg="12" xl="3">
            <b-form-group id="input-group-" label="Setor:" label-for="input-3">
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-3"
                v-model="formulario.setor"
                :options="setorData"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="ml-auto">
            <GrupoBotaoForm/>
          </b-col>
        </b-row>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import GrupoBotaoForm from '@/components/GrupoBotaoForm.vue'
import serviceUsuario from '@/services/serviceUsuario'
export default {

  components:{
      GrupoBotaoForm
    },
  data() {
    return {
      formulario: {
        matricula: "",
        nome: "",
        setor: null,
      },
      setorData: [],
    };
  },

  methods:{
    salvar(){
      serviceUsuario.salvar(this.formulario).then(() => {

      })
    },

    async getSetor(){
      const req = await serviceUsuario.getSetor()

      this.setorData = req.data.map(elem => ({
        text: elem.setor + " - Sala: " + elem.sala.sala + " " + elem.sala.andar,
        value: elem,
      }))

    },

    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formulario))
      },

      onReset(event) {
        event.preventDefault()
        this.formulario.matricula = ''
        this.formulario.nome = ''

      },

  },

  mounted(){
    this.getSetor()
  }

};
</script>
