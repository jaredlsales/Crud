import { Router } from "express"

//Importação do Controladores (Controllers) // {HierarquiaControllers } não é uma importação full e por isso tem essa chaves
import { HierarquiaControllers } from "./Controllers/Hierarquia/HierarquiaControllers"
import { FuncionariosControllers } from "./Controllers/Funcionarios/FuncionariosControllers"

/*

Importação "full" (default): usada quando o módulo exporta um único valor principal com export default. Você importa com import Nome from './arquivo'.

Importação "não full" (nomeada): usada quando o módulo exporta vários valores com export. Você importa com import { Nome } from './arquivo'.

*/

const router = Router()

//Criação da Rotas de EndPoint "/CadastrarHierarquia" (seria o endpoint)
//Metodos POST
router.post("/CadastrarHierarquia", new HierarquiaControllers().cadastroHierarquia )
router.post("/CadastrarFuncionarios", new FuncionariosControllers().cadastrarFuncionarios)

//Metodos GET
router.get("/VisualizarFuncionarios", new FuncionariosControllers().visualizarFuncionarios)

//O método .post() define uma rota que responde a requisições HTTP do tipo POST. Ou seja, quando o cliente envia dados (como em um formulário ou JSON), essa rota é chamada.
/*Comparação com outras rotas:
router.get() → usado para buscar dados.
router.post() → usado para enviar/criar dados.
router.put() → usado para atualizar dados.
router.delete() → usado para deletar dados.*/

export default router