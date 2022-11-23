<template>
    <div>
        <b-row>
            <b-col>
                <MenuCadastroEquipamento/>
            </b-col>
            <b-col cols="10" class="formulario">
                <div>
                    formulario
                </div>
            </b-col>
        </b-row>

    </div>

</template>

<script>
    import MenuCadastroEquipamento from "@/components/MenuCadastroEquipamento.vue"
    export default {
        components:{
            MenuCadastroEquipamento
        }
    }
</script>

<style>
</style>