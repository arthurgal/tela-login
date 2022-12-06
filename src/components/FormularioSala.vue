<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Novo Sala</h2>
    </b-row>

    <b-row>
      <b-form @submit="salvar" @reset="onReset">
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="4">
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

          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group
              id="input-group-2"
              label="Andar:"
              label-for="input-2"
            >
              <b-form-input
                class="mt-2"
                id="input-2"
                v-model="formulario.andar"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          
          <b-col sm="12" md="12" lg="12" xl="4">
            <b-form-group id="input-group-3" label="Predio:" label-for="input-3">
              <b-form-select
                class="w-100 p-2 mt-2"
                id="input-3"
                v-model="formulario.predio"
                :options="predioData"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <div>
          {{formulario}}
        </div>


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
        andar: "",
        predio: null,
      },
      predioData: []
    };
  },

  methods:{
     salvar(){
      serviceSala.salvar(this.formulario).then(() => {
        this.onSubmit()
      })
    },

    async getPredio(){
      const req = await serviceSala.getPredio()

      this.predioData = req.data.map(elem => ({
        text: elem.predio, 
        value: elem,
      }))


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