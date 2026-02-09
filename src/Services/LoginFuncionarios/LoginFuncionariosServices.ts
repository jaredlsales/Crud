import prismaClient from "../../Prisma/PrismaClient";
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface LoginFuncionarios {
    email: string,
    senha: string
}

class LoginFuncionariosServices {
    async loginFuncionariosServices ({email,senha}: LoginFuncionarios){
        const emailExiste = await prismaClient.funcionarios.findFirst({
            where:{
                email:email
            }
        })
        //Login Incorreto por questão de segurança, se não ele vai saber exatamente que o email está errado
        if(!emailExiste){
            throw new Error("Login Incorreto")
        }
        //Comparação Senha
        //emailExiste tem um JSON = por conta da consulta tem a senha dentro do emailExiste, vc pode usar o console.log para ver 
        const senhaCrypt = await compare(senha,emailExiste.senha)
        //console.log(senhaCrypt)
        if(!senhaCrypt){
            throw new Error ("Login ou Senha Incorreto")
        }

        const token = sign({
            //Informações do Usuario = WHERE NO EMAILEXISTE ELE PEGA TODOS OS DADOS QUANDO O EMAIL EXSISTE E PUXA TODOS OS DADOS.
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email
            
        },
        //pegando variavel de ambiente 
            process.env.JWT_SECRETO,
            {   
                //comprando o id do front com o backend
                subject: emailExiste.id,
                expiresIn: "8h"
            }
        )
        return {
            //token e obrigadorio a mandar o restante e opcional 
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email,
            token: token
        }

    }

}

export {LoginFuncionariosServices}