import { http } from "./config";

export default {
    salvar: (predio) => {
        return http.post('/predio/cadastro', predio)
    }
}