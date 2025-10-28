import express, {Request, Response, NextFunction} from "express"
import "express-async-errors"
import cors from "cors"

const app = express() //() significa que estou chamando toda função
app.use(express.json()) //json e uma função que quer chamar.
app.use(cors()) //ele esta pegando o cors e colocando no express para usar no app.

