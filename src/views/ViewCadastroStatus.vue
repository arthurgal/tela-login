<template>
    <div>
        <b-row no-gutters>
            <b-col sm="12" md="4" lg="5" xl="2">
                <MenuPrincipal/>
            </b-col>
            <b-col auto>
                <FormularioStatus/>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuPrincipal from "@/components/MenuPrincipal.vue"
    import FormularioStatus from "@/components/FormularioStatus.vue"
    export default {
        components:{
            MenuPrincipal,
            FormularioStatus
        }
    }
</script>