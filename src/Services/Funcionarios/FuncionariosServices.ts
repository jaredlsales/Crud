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
// enviando os dados para o banco de dados. (criando)
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

    //() nao esta recebendo nenhuma informação (void) pq e um get (não vai receber nada do front end)
    // fazendo a colsulta no bando de dados
    // findMany (muiito, todos) tem o findFirst (que e só uma informação)
    // select (palavra reservada do prisma) (ele vai mostrar o que vc selecionou)
    async visualizarFuncionarios(){
        const resposta = await prismaClient.funcionarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                status: true
            }
        })
       return resposta
    }

}

export { FuncionariosServices }

