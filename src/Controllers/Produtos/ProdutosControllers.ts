import {Request, Response} from "express"


class ProdutosControllers {
    async cadastrarProdutos(req: Request, res:Response){
        const {nome, preco} = req.body
        console.log(nome, preco)
    }

}

export {ProdutosControllers}