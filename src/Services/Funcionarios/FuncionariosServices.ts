import prismaClient from "../../Prisma/PrismaClient"

//tipificação (interface)

interface CadastrarFuncionarios {

    nome: string,
    email: string,
    senha: string,
    status: boolean,
    idHierarquia: string

}

// Agora os dados que vier do front-end e dos Constrollers estão tipificados
// .create(): é o método que insere um novo registro.
class FuncionariosServices {
    async cadastrarFuncionarios({nome, email, senha, status, idHierarquia}: CadastrarFuncionarios) {
         await prismaClient.funcionarios.create({
            //nome primeiro e da aprimera culuna do bando de dados e o outro nome e os valores (inputado)
            data: {
                nome:nome,
                email:email,
                senha:senha,
                status:status,
                idHierarquia:idHierarquia
            }
         })
         return ({dados:"Cadastro Efetuado com sucesso"})
    }

}

export { FuncionariosServices }

