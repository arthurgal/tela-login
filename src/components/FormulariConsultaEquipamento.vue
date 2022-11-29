<template>
    <b-container class="w-75 m-auto pt-5">
        <b-row>
            <h2 class="mb-4">Cadastro de Novo Equipamentos</h2>
        </b-row>
        <b-row>
            <b-form>
                <b-row class="mb-3">
                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-1" label="Tombo:" label-for="input-1">
                            <b-form-input class="mt-2" id="input-1" v-model="formulario.tombo" type="text" required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="8">
                        <b-form-group id="input-group-1" label="Modelo:" label-for="input-2">
                            <b-form-input class="mt-2" id="input-2" v-model="formulario.modelo" type="text" required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>


                </b-row>

                <b-row class="mb-3">

                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-" label="Tipo Equipamento:" label-for="input-3">
                            <b-form-select class="w-100 p-2 mt-2" id="input-3" v-model="formulario.tipoEquipamento"
                                :options="tipoEquipamento" required></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-4" label="Marca:" label-for="input-4">
                            <b-form-input class="mt-2" id="input-4" v-model="formulario.marca" type="text" required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-5" label="Número de Série:" label-for="input-5">
                            <b-form-input class="mt-2" id="input-5" v-model="formulario.numSerie" type="text" required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                </b-row>

                <b-row>
                    <b-col sm="12" md="12" lg="12" xl="3">
                        <b-form-group id="input-group-6" label="Matrícula:" label-for="input-6">
                            <b-form-input class="mt-2" id="input-6" v-model="formulario.matricula" type="text" required>
                            </b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="9">
                        <b-form-group id="input-group-7" label="Responsável:" label-for="input-7">
                            <b-form-input class="mt-2" id="input-7" v-model="formulario.responsavel" type="text"
                                required></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row class="mt-2">
                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-8" label="Setor:" label-for="input-8">
                            <b-form-input class="mt-2" id="input-8" v-model="formulario.setor" type="text"
                                required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-9" label="Sala:" label-for="input-9">
                            <b-form-input class="mt-2" id="input-" v-model="formulario.sala" type="text"
                                required></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col sm="12" md="12" lg="12" xl="4">
                        <b-form-group id="input-group-10" label="Predio:" label-for="input-10">
                            <b-form-input class="mt-2" id="input-10" v-model="formulario.predio" type="text"
                                required></b-form-input>
                        </b-form-group>
                    </b-col>

                </b-row>

                <b-row>

                    <b-col cols="12" class="ml-auto">
                        <b-button class="mt-2" type="submit" variant="primary">Buscar</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-row>
    </b-container>
</template>
  
<script>
export default {
    name: "FormularioEquipamento",
    data() {
        return {
            formulario: {
                tombo: "",
                modelo: "",
                tipoEquipamento: null,
                marca: "",
                numSerie: "",
                matricula: "",
                responsavel: "",
                setor:"",
                sala:"",
                predio:""
            },
            tipoEquipamento: [
                { text: "Selecione", value: null },
                "Computador",
                "Notebook",
                "Monitor",
                "Estabilizaor",
            ],
            status: [
                { text: "Selecione", value: null },
                "Funcionando",
                "Quebrado",
                "Ocioso",
            ],
        };
    },
};
</script>