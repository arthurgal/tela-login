import { http } from "./config";

export default {
    salvar: (usuario) => {
        return http.post('/usuario/cadastro', usuario)
    },

    getSetor: () => {
        return http.get('/setor')
    }
}