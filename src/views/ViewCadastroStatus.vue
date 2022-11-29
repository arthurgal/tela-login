<template>
    <div>
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
    export default {
        components:{
            MenuCadastro,
            FormularioStatus
        }
    }
</script>