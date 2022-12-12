import { http } from "./config";

export default {
    salvar: (equipamento) => {
        return http.post('/equipamento/cadastro', equipamento)
    },

    getAllEquipamentos: () =>{
        return http.get('/equipamento')
    },

    getTipo: () => {
        return http.get('/tipo')
    },

    getStatus: () => {
        return http.get('/status')
    },

    getUsuarios: () => {
        return http.get('/usuario')
    }
}