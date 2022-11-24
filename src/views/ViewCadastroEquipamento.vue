<template>
    <div>
        <b-row>
            <b-col>
                <MenuPrincipal/>
            </b-col>
            <b-col cols="10" class="formulario">
                <div>
                    <FormularioEquipamento/>
                </div>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuPrincipal from "@/components/MenuPrincipal.vue"
    import FormularioEquipamento from "@/components/FormularioEquipamento.vue";
    export default {
        components:{
            MenuPrincipal,
            FormularioEquipamento
        }
    }
</script>

<style>
</style>