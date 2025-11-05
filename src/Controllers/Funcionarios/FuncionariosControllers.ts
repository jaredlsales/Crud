import { Request, Response } from "express"
import { FuncionariosServices } from "../../Services/Funcionarios/FuncionariosServices"

// {} Para descontruir o arquivo JSON {nome} entre chaves isso significa
// Ela está vindo do front-end essa informação, ela chega com o arquivo JSON mais colocando {} ela se descontrui 
class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res:Response){
        const {nome, email, senha, status, idHierarquia} = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.cadastrarFuncionarios({
            nome,
            email,
            senha,
            status,
            idHierarquia    
        })

        return res.json(resposta)
    } 


}

export {FuncionariosControllers}