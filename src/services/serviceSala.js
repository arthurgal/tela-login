import { http } from "./config";

export default {
    salvar: (sala) => {
        return http.post('/sala/cadastro', sala)
    },

    getPredio: () => {
        return http.get('/predio?qtd=3&pagina=0&ordenacao=id')
    }
}