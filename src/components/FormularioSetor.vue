<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Setor</h2>
    </b-row>

    <b-row>
      <b-form @submit="salvar" @reset="onReset">
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
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group id="input-group-2" label="Sala:" label-for="input-2">
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-2"
                v-model="formulario.sala"
                :options="salaData"
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

      {{formulario}}
    </b-row>
  </b-container>
</template>

<script>
import GrupoBotaoForm from '@/components/GrupoBotaoForm.vue'
import serviceSetor from '@/services/serviceSetor'
export default {
  components:{
    GrupoBotaoForm
  },
  
  data() {
    return {
      formulario: {
        setor: "",
        sala: null,
      },
      salaData: [],
    };
  },

  methods:{
    
    salvar(){
      serviceSetor.salvar(this.formulario).then(() => {
      this.onSubmit()
      })
    },

    async getSala(){
      const req = await serviceSetor.getSala()
      

      this.salaData = req.data.map(elem => ({
        text: elem.sala +  " - " + elem.andar,
        value: elem,
      }))


    },

    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formulario))
      },

      onReset(event) {
        event.preventDefault()
        this.formulario.setor = ''

      },
      
  

  },

  mounted(){
    this.getSala()
  }

};
</script>