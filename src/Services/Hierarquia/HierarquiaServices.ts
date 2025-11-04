import prismaClient from "../../Prisma/PrismaClient";

    interface CadastrarHierarquia {
    nome: string
}

// nome: (coluna na base de dados) e nome (e do front end que vc vai receber)
//dados e como uma variavel. poderia ser qualquer outro nome
// hierarquia e o nome colocado no model e create (methodo)
//return e o que vai aparecer no front-end após cadastrar
class HierarquiaServices {
    async cadastrarHierarquia({nome} : CadastrarHierarquia) {
        await prismaClient.hierarquia.create({
            data: {
                nome: nome
            }
        })
        
        return ({dados: "Cadastro Efetuado com Sucesso"})
    } 
    
}


export { HierarquiaServices }