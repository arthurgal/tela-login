<template>
    <div class="formulario">
        <h3 class="titulo">Login De Membro</h3>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group 
                id="input-group-1"  
                label-for="input-1"    
                >

            <b-form-input 
                id="input-1" 
                v-model="form.login" 
                type="login" 
                placeholder="Login" 
                required>
            </b-form-input>

            </b-form-group>

            <b-form-group 
                id="input-group-1"  
                label-for="input-1"    
                >

            <b-form-input 
                id="input-1" 
                v-model="form.senha" 
                type="password" 
                placeholder="Senha" 
                required>
            </b-form-input>

            </b-form-group>

            <b-button class="botao-form" type="submit" variant="primary">Login</b-button>
        </b-form>
    </div>
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

    .formulario{
        text-align: center;
        margin: 120px auto;
        padding: 30px;
    }

    .botao-form{
        margin-top: 10px;
        width: 100%;
        color: #2962b8;
    }

    .titulo{
        border-left: solid #384c61 3px;
        font-size: 22px;
        margin-bottom: 20px;
        font-weight: bold;
        color: #384c61;
        
    }

</style>