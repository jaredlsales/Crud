import { Request, Response } from "express"

class HierarquiaControllers { // async = nao vai ter uma nonexão persistendia (assíncrona)
    async cadastroHierarquia(req: Request, res: Response){
        const {nome} = req.body // body = corpo da requisição HTTP que foi enviada para o servidor
        console.log(nome)
    } 
}


export { HierarquiaControllers }