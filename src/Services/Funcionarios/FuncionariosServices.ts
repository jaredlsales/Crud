import prismaClient from "../../Prisma/PrismaClient"
import {hash} from "bcryptjs"

//tipificação typeScript (interface)

interface CadastrarFuncionarios {

    nome: string,
    cpf: string,
    email: string,
    senha: string,
    status: boolean,
    idHierarquia: string

}

interface AtualizarFuncionarios {
    id: string,
    nome: string,
    cpf: string,
    email: string,
    status: boolean,

}

// Agora os dados que vier do front-end e dos Constrollers estão tipificados
// .create(): é o método que insere um novo registro.
// enviando os dados para o banco de dados. (criando)
class FuncionariosServices {
    async cadastrarFuncionarios({nome, cpf, email, senha, status, idHierarquia}: CadastrarFuncionarios) {
        const cpfExiste = await prismaClient.funcionarios.findFirst({
            where: {
                OR:[
                    {
                        cpf:cpf
                    },
                    {
                        email:email
                    }
                ]
            }
        })
        // cpfExiste faz uma consunta no bando de dados se já existe na base de dados
        // AND ou OR (OR uma ou outra)
        // AND as duas precisa ser verdadeiras 
        // OR um ou outro nao precisa estar no bando para cadastrar
        // Se colocasse findMany iria travar o bando.
        //!(significa negação) (mudou para cpfExiste)
        // throw e o erro que vai retorna no front end 
        if(cpfExiste){
           throw new Error("Cpf/Email já está cadastrado")
        }

         const senhaCrypt = await hash(senha, 10)
         // 8 é um numero padrão, pela quantiade de vezes que ele vai criptgrofa
         await prismaClient.funcionarios.create({
            //nome primeiro e da aprimera culuna do bando de dados e o outro nome e os valores (inputado)
            data: {
                nome:nome,
                cpf:cpf,
                email:email,
                senha:senhaCrypt,
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
                cpf: true,
                email: true,
                status: true,
                hierarquia: {
                    select: {
                        nome: true
                    }
                }
            }
        })
       return resposta
    }

    //Apagar
    //(id: string) utlizar assim quando tem pouca coisa para apagar (Isso seria a tipificação - Interface)
    async apagarFuncionarios(id: string){
        const idNaoExiste = await prismaClient.funcionarios.findFirst({
            where:{
                id:id
            }
        })

        //! Negação (VAZIA SE FOR VERDADEIRA ELE VAI SEGUIR E APAGAR DEPOIS)
        if(!idNaoExiste){
            throw new Error("Registro não encontrado")
        }

        await prismaClient.funcionarios.delete({
            where: {
                id:id
            }
        })

        return ({dados:"Registro Excluido Com Sucesso"})
    }

    //id:id (ele vai estar verificando se tem esse dado no banco de dados), ele só vai fazer a alteração se estiver correto esse identificação.(Se tem esse valor no bando)
    //se quiser pode colocar um const antes no async 
    async altualizarFuncionarios({id,nome,cpf,email,status}: AtualizarFuncionarios){
        await prismaClient.funcionarios.update({
            where:{
                id:id
            },
            data:{
                nome:nome,
                cpf:cpf,
                email:email,
                status:status
            }
            
        })

        return ({dados:"Alteração feita com sucesso"})

    }

    async consultaFuncionarios(id: string){
        const resposta = await prismaClient.funcionarios.findFirst({
            where:{
                id:id
            },
            select:{
                id:true,
                nome:true,
                email:true,
                cpf:true
            }
        })

        return resposta
    }

}

export { FuncionariosServices }

