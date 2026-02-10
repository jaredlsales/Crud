// e parecido com o Controllers essa autentificação
import {Request, Response, NextFunction} from "express"
//verificação do token
import {verify} from "jsonwebtoken"

//informação que vai extrair dentro do token
//sub a onde consegue idenfificar o usuario no token -- sub = id do usuario. (subject = sub (nome completo))
interface Payload {
    sub: string
}

//Dados externo (front-end) req:Request, res: Response, next: NextFunction
function estaAutenticado(req:Request, res: Response, next: NextFunction) {
    //Recebendo o Token 
    //headers (Cabeçalho)
    const autToken = req.headers.authorization
    //verifando se o token existe
    if (!autToken) {
        return res.json({dados:"Token Inexistante"})
    }
    //Limpeza do token e mostrar so a informação importante = token 
    //[, token ] (a virgula vai ignorar a palavra bearer, e pegando somente o token)
    //split (quebrar ou separação) " " -- (Bearer eyJhbGciOiJ) ele vai pegar o espaço (" " espaço) está diivindo em cada lado e assim pegando somente o token
    // vai pegar a onde está o espaço e separar (isso poderia ser usando em outros formas como : ou letra ou algo assim)
    const [, token] = autToken.split(" ")
    //Vai fazer uma verificação se o token está valido para fazer a extração do sub = id 
    try {
        //extrair a informação sub (decodificar)
        const {sub} = verify(
            token,
            process.env.JWT_SECRETO
        ) as Payload
        req.usuarioId = sub
        //vai passar para o Controllear depois de autenticado (vc tem permisão para passar no controlador)
        return next()
    } catch (err) {
        //Seria Token invalido ou experido 
        return res.json({dados:"Token Invalido"})
    }

}

export {estaAutenticado}

