<template>
    <div>
        <b-row>
            <MenuGeral/>
        </b-row>
        <b-row no-gutters>
            <b-col sm="12" md="4" lg="5" xl="2">
                <MenuCadastro/>
            </b-col>
            <b-col auto>
                <FormularioStatus/>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuCadastro from "@/components/MenuCadastro.vue"
    import FormularioStatus from "@/components/FormularioStatus.vue"
    import MenuGeral from "@/components/MenuGeral.vue"
    export default {
        components:{
            MenuCadastro,
            MenuGeral,
            FormularioStatus
        }
    }
</script>