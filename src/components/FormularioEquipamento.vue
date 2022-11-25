<template>
    <div class="w-50 m-auto p-5">
        <h2 class="text-center mb-4">Cadastro de Equipamentos</h2>
        <b-form >
            <b-form-group id="input-group-1" label="Nome" label-for="input-1"
                description="Diga qual equipamento você quer cadastrar">
                <b-form-input id="input-1" v-model="formulario.nome" type="text" require>

                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Modelo" label-for="input-2"
                description="Diga o modelo do equipamento">
                <b-form-input id="input-1" v-model="formulario.modelo" type="text" require>

                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Modelo" label-for="input-3"
                description="Diga o modelo do equipamento">
                <b-form-input id="input-1" v-model="formulario.modelo" type="text" require>

                </b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    export default {
        name:'FormularioEquipamento',
        data(){
            return{
                formulario:{
                    nome:'',
                    modelo:''

                }
                
            }
        }
    }
</script>