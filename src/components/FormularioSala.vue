<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Sala</h2>
    </b-row>

    <b-row>
      <b-form @submit="salvar" @reset="onReset">
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group
              id="input-group-1"
              label="Sala:"
              label-for="input-1"
            >
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.sala"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group id="input-group-" label="Predio:" label-for="input-2">
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-2"
                v-model="formulario.predio"
                :options="predio"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        {{formulario.predio}}


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
import serviceSala from '@/services/serviceSala'
export default {
  components:{
    GrupoBotaoForm
  },
  
  data() {
    return {
      formulario: {
        sala: "",
        predio: [],
      },
    };
  },

  methods:{
    salvar(){
      serviceSala.salvar(this.formulario).then(() => {
        this.onSubmit()
      })
    },

    getPredio(){
      serviceSala.getPredio().then((resposta) => {
        console.table(resposta.data)
      })
    },
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formulario))
      },

      onReset(event) {
        event.preventDefault()
        this.formulario.sala = ''

      }
  },

  mounted(){
    this.getPredio()
  }
  
};
</script>