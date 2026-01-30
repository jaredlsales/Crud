import prismaClient from "../../Prisma/PrismaClient";

interface CadastrarProdutos {
    nome: string,
    preco: string,
    banner: string
}

class ProdutosServices{
    async cadastrarProdutos({nome, preco, banner}: CadastrarProdutos){
        await prismaClient.produtos.create({
            data: {
                nome,
                preco,
                banner
            }
        })

        return ({dados: "Produto cadastrado com sucesso"})
    }
}

export {ProdutosServices}