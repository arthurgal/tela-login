<template>
    <div>
        <b-row no-gutters>
            <b-col sm="12" md="4" lg="5" xl="2">
                <MenuConsulta/>
            </b-col>
            <b-col auto>
                <FormulariConsultaEquipamento/>
                <TabelaConsultaEquipamento/>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuConsulta from "@/components/MenuConsulta.vue"
    import FormulariConsultaEquipamento from "@/components/FormulariConsultaEquipamento.vue"
    import TabelaConsultaEquipamento from "@/components/TabelaConsultaEquipamento.vue";
    export default {
        components:{
    MenuConsulta,
    FormulariConsultaEquipamento,
    TabelaConsultaEquipamento
}
    }
</script>