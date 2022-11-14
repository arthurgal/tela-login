<template>
  <b-container class="home">
    <b-row cols="2" class="justify-content-md-center text-center tamanho-linha">
      <b-col cols="12" md="6" sm="12" align-self="center">
        <div class="imagem-tela">
          <ImagemTelaLoginVue></ImagemTelaLoginVue>
        </div>
      </b-col>
      <b-col cols="12" md="6" sm="12" align-self="center">
        <FormularioTelaLogin></FormularioTelaLogin>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ImagemTelaLoginVue from '@/components/ImagemTelaLogin.vue';
import FormularioTelaLogin from '@/components/FormularioTelaLogin.vue';
export default {
  name: "HomeView",
  components:{
    ImagemTelaLoginVue,
    FormularioTelaLogin
    
  }
};
</script>

<style scoped>
.home {
  width: 500px;
  border-radius: 30px;
  background-color: rgb(245, 245, 245);
  -webkit-box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
  -moz-box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
  box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
}

.tamanho-linha{
  height: 350px;

}


.imagem{
  padding-left: 100px;

}

.imagem-tela{
  border-right: solid 2px rgb(228, 227, 227);
}

.form-tela{
  width: 100%;
}
</style>
