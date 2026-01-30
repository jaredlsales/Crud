import {Request, Response} from "express"
import { ProdutosServices } from "../../Services/Produtos/ProdutosServices" 


class ProdutosControllers {
    async cadastrarProdutos(req: Request, res:Response){
        const {nome, preco} = req.body
        if(!req.file){
            throw new Error("Imagem com problemas")
        }else {
            const {originalname, filename: banner} = req.file 
            const enviarDados =  new ProdutosServices()
            const resposta = await enviarDados.cadastrarProdutos({
            nome,
            preco,
            banner
        })
        return res.json(resposta)

        }

    }

}

export {ProdutosControllers}