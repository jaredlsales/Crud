// crypto e uma bibliota do express e uma hash de cryptogfrafia para proteger 16 caracter (hexadecimal) e um import do express
import crypto from "crypto"
import { request } from "http"
import multer from "multer"

//path e uma biblioteca de caminho o resolve e para resolver o caminho 
import { extname, resolve } from "path"

export default {
    upload(folder: string){
        return {
            storage: multer.diskStorage({
                // volta duas pastas para ficar alinhado com o server e routes ".." ".."
                destination: resolve(__dirname, "..", "..", folder),
                //toString ou tem mais funcionalidades e usado para converter a hash
                //originalname e uma função do multer tem outras opcoes tambem para mostrar
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}--${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    }
}
