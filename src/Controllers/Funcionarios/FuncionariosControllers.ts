import { Request, Response } from "express"
import { FuncionariosServices } from "../../Services/Funcionarios/FuncionariosServices"

// {} Para descontruir o arquivo JSON {nome} entre chaves isso significa
// Ela está vindo do front-end essa informação, ela chega com o arquivo JSON mais colocando {} ela se descontrui 
class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res:Response){
        const {nome, email, cpf, senha, status, idHierarquia} = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.cadastrarFuncionarios({
            nome,
            email,
            cpf,
            senha,
            status,
            idHierarquia    
        })

        return res.json(resposta)
    }
    
    // fazendo a colsulta no bando de dados
    // Controllers sempre retorn em formado JSON
    async visualizarFuncionarios(req:Request, res:Response){
        const enviarDados = new FuncionariosServices()
        const resposta =  await enviarDados.visualizarFuncionarios()
        return res.json(resposta)

    }
    
    // apagar bando de dados
    // descontuir o JSON e recer como params (parametro)
    // params pq nao está no body está no parametros
    async apagarFuncionarios(req:Request, res:Response){
        const {id} = req.params
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.apagarFuncionarios(id)
        return res.json(resposta)

    }

}

export {FuncionariosControllers}