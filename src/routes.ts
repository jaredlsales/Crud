import { Router } from "express"
import multer from "multer"
// esse nome foi acidionado agora e nao tem arquivo Multer pq ele esta de uma forma export default 
import uploadConfig from "./Config/Multer"

//Importação do Controladores (Controllers) // {HierarquiaControllers } não é uma importação full e por isso tem essa chaves
import { HierarquiaControllers } from "./Controllers/Hierarquia/HierarquiaControllers"
import { FuncionariosControllers } from "./Controllers/Funcionarios/FuncionariosControllers"
import {LoginFuncionariosControllers} from "./Controllers/LoginFuncionarios/LoginFuncionariosControllers"
import {ProdutosControllers} from "./Controllers/Produtos/ProdutosControllers"

/*

Importação "full" (default): usada quando o módulo exporta um único valor principal com export default. Você importa com import Nome from './arquivo'.

Importação "não full" (nomeada): usada quando o módulo exporta vários valores com export. Você importa com import { Nome } from './arquivo'.

*/

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

//Criação da Rotas de EndPoint "/CadastrarHierarquia" (seria o endpoint)
//Metodos POST
router.post("/CadastrarHierarquia", new HierarquiaControllers().cadastroHierarquia )
router.post("/CadastrarFuncionarios", new FuncionariosControllers().cadastrarFuncionarios)
//Metodo POST (LoginFuncionarios)
router.post("/LoginFuncioarios", new LoginFuncionariosControllers().loginFuncionarios)
//Metodo POST (CadastrarProduto) - "file e do server"
router.post("/CadastrarProdutos", upload.single("file"), new ProdutosControllers().cadastrarProdutos)
//Metodo POST (ConsultaFuncionario)
router.post("/ConsultaFuncionarios", new FuncionariosControllers().consultaFuncionarios)

//Metodos GET
router.get("/VisualizarFuncionarios", new FuncionariosControllers().visualizarFuncionarios)
router.get("/VisualizarProdutos", new ProdutosControllers().visualizarProdutos)

//Metodo DELETE
router.delete("/ApagarFuncionarios/:id", new FuncionariosControllers().apagarFuncionarios)

//Metodo PUT (Uptade)
router.put("/AlterarFuncionarios", new FuncionariosControllers().alterarFuncionarios)


//O método .post() define uma rota que responde a requisições HTTP do tipo POST. Ou seja, quando o cliente envia dados (como em um formulário ou JSON), essa rota é chamada.
/*Comparação com outras rotas:
router.get() → usado para buscar dados.
router.post() → usado para enviar/criar dados.
router.put() → usado para atualizar dados.
router.delete() → usado para deletar dados.*/

export default router