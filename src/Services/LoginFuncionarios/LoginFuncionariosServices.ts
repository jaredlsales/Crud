import prismaClient from "../../Prisma/PrismaClient";
import {compare} from "bcryptjs"

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
        if(senhaCrypt){
            return ({dados:"Login Efetuado com Sucesso"})
        } else {
            throw new Error ("Login ou Senha Incorreto")
        }
    }
}

export {LoginFuncionariosServices}