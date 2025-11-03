import { Request, Response } from "express"
import { HierarquiaServices } from "../../Services/Hierarquia/HierarquiaServices"

class HierarquiaControllers { // async = nao vai ter uma nonexão persistendia (assíncrona)
    async cadastroHierarquia(req: Request, res: Response){
        const {nome} = req.body // body = corpo da requisição HTTP que foi enviada para o servidor
        const enviarDados = new HierarquiaServices()
        const resposta = await enviarDados.cadastrarHierarquia({nome})
        //await trabalha junto com o async ela espera a requisição realizado
        //(nome) se for mais coloca ({nome, sobrenome..})
        return res.json(resposta)
        // return esse e a respota que vai retornar para o front-end
    } 
}


export { HierarquiaControllers }