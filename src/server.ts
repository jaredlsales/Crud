import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import cors from "cors"

const app = express() //() significa que estou chamando toda função
app.use(express.json()) //json e uma função que quer chamar.
app.use(cors()) //ele esta pegando o cors e colocando no express para usar no app.

// Melhorando a saida do Erro (deixando ele mais humanizado)
// Erro de requisição 400 do metodo HTTP (Bad Request)
// Erro 500 metodo HTTP (erro interno no servidor)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    
    return res.status(500).json({
        status: "Erro",
        message: "Erro interno do Servidor"
    })
    
})

//Listen -  iniciar o servidor e fazer com que ele escute requisições em uma porta específica. (3333 Porta do serviço, numero utlizado para exemplo que esta aberta para uso)
// () => Se chama Callback, ou seja, uma função que será chamada depois que o servidor iniciar com sucesso.
app.listen(3333, () => console.log("Servidor On-line na porta 3333"))