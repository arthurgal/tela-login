<template>
    <div>
        <b-row no-gutters>
            <b-col sm="12" md="4" lg="5" xl="2">
                <MenuPrincipal/>
            </b-col>
            <b-col auto>
                <FormularioSetor/>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuPrincipal from "@/components/MenuPrincipal.vue"
    import FormularioSetor from "@/components/FormularioSetor.vue";
    export default {
        components:{
            MenuPrincipal,
            FormularioSetor
        }
    }
</script>