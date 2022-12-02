import { http } from "./config";

export default {
    salvar: (statusEquipamento) => {
        return http.post('/status/cadastro', statusEquipamento)
    }
}