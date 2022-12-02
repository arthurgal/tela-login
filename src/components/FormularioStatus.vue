<template>
  <b-container class="w-75 m-auto pt-5">
    <b-row>
      <h2 class="mb-4">Cadastro de Status de Equipamento</h2>
    </b-row>

    <b-row>
      <b-form @submit="salvar" @reset="onReset">
        <b-row class="mb-3">
          <b-col sm="12" md="12" lg="12" xl="6">
            <b-form-group
              id="input-group-1"
              label="Status:"
              label-for="input-1"
            >
              <b-form-input
                class="mt-2"
                id="input-1"
                v-model="formulario.status"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="ml-auto">
            <GrupoBotaoForm />
          </b-col>
        </b-row>
      </b-form>
    </b-row>
  </b-container>
</template>
  
  <script>
import GrupoBotaoForm from "@/components/GrupoBotaoForm.vue";
import serviceStatusEquipamento from "@/services/serviceStatusEquipamento"

export default {
  components: {
    GrupoBotaoForm,
  },
  data() {
    return {
      formulario: {
        status: "",
      },
    };
  },

  methods:{
    salvar(){
      serviceStatusEquipamento.salvar(this.formulario).then(() =>{
        this.onSubmit();
          
      })
    },
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.formulario))
      },

      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.formulario.status = ''

      }
  }
};
</script>