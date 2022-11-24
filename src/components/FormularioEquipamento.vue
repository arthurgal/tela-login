<template>
    <div>
        <b-form>
            <b-form-group id="input-group-1" label="Nome" label-for="input-1"
                description="Diga qual equipamento você quer cadastrar">
                <b-form-input id="input-1" v-model="formulario.nome" type="email" require>

                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Modelo" label-for="input-1"
                description="Diga o modelo do equipamento">
                <b-form-input id="input-1" v-model="formulario.modelo" type="email" require>

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