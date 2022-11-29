<template>
    <b-container>
        <h3 class="titulo">Login De Membro</h3>
        <b-form @submit="onSubmit">
            <b-form-group 
                id="input-group-1"  
                label-for="input-1"   
                >

            <b-form-input 
                id="input-1" 
                v-model="form.login" 
                type="login"
                size = "sm"
                placeholder="Login" 
                required>
            </b-form-input>

            </b-form-group>

            <b-form-group 
                id="input-group-2"  
                label-for="input-2"    
                >

            <b-form-input 
                id="input-2" 
                v-model="form.senha" 
                type="password"
                size = "sm" 
                placeholder="Senha" 
                required>
            </b-form-input>

            </b-form-group>

            <b-button to="cadastro/equipamento" id="botao-form" type="submit" variant="primary">Login</b-button>
        </b-form>
    </b-container>
</template>

<script>
  export default {
    name:'FormularioTelaLogin',
    data() {
      return {
        form: {
          login: '',
          senha: '',
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert("Cadastrado")
      },
    }
  }
</script>

<style>


    #botao-form{
        margin-top: 10px;
        width: 100%;
        background-color: #384c61;
        color: #f7f7f8;
        border: none;
    }

    #botao-form:hover{
        background-color: #2b3c4e;
        color: #f7f7f8;
    }

    #botao-form:active{
      background-color: #213141;
    }

    .titulo{
        border-left: solid #384c61 3px;
        font-size: 22px;
        margin-bottom: 20px;
        font-weight: bold;
        color: #384c61;   
    }

    #input-group-1{
      padding-bottom: 10px;
    }

</style>