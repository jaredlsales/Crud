
    interface CadastrarHierarquia {
    nome: String
}

class HierarquiaServices {
    async cadastrarHierarquia({nome} : CadastrarHierarquia) {
        console.log(nome);
    }
}


export { HierarquiaServices }