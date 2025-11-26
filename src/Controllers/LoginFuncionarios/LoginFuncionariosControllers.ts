import {Request, Response} from "express"
import {LoginFuncionariosServices} from "../../Services/LoginFuncionarios/LoginFuncionariosServices"

//Email e senha vai ser os dados que vai ser verificados (Poderia ser qualquer outro)
class LoginFuncionariosControllers{
    async loginFuncionarios(req:Request, res:Response){
        const {email, senha} = req.body
        const enviarDados = new LoginFuncionariosServices()
        const resposta = await enviarDados.loginFuncionariosServices({
            email,
            senha
        })

        return res.json(resposta)
    }
}

export {LoginFuncionariosControllers}