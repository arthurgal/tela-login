import { http } from "./config";

export default {
    salvar: (setor) => {
        return http.post('/setor/cadastro', setor)
    },

    getSala: () => {
        return http.get('/sala')
    }
}