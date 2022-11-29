<template>
    <div>
        <b-row no-gutters>
            <b-col sm="12" md="4" lg="5" xl="2">
                <MenuCadastro/>
            </b-col>
            <b-col auto>
                <FormularioSala/>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuCadastro from "@/components/MenuCadastro.vue"
    import FormularioSala from "@/components/FormularioSala.vue";
    export default {
        components:{
            MenuCadastro,
            FormularioSala
        }
    }
</script>