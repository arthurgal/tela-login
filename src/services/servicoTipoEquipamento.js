import { http } from "./config";

export default {
    salvar: (tipo) => {
        return http.post('/tipo/cadastro', tipo)
    }
}