<template>
  <div class="home">
    <div class="imagem-tela">
      <div class="imagem">
        <ImagemTelaLoginVue></ImagemTelaLoginVue>
      </div>
    </div>
    <div class="form-tela">
      <FormularioTelaLogin></FormularioTelaLogin>
    </div>
  </div>
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
  border-radius: 30px;
  display: flex;
  margin: 200px auto;
  width: 550px;
  height: 450px;
  background-color: rgb(245, 245, 245);
  -webkit-box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
  -moz-box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
  box-shadow: 1px 0px 28px 0px rgba(50, 50, 50, 0.33);
}


.imagem{
  padding-left: 100px;

}

.imagem-tela{
  width: 100%;
  margin: auto;
  border-right: solid 2px rgb(228, 227, 227);
}

.form-tela{
  width: 100%;
}
</style>
