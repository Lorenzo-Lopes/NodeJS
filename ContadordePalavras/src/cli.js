import fs from 'fs'
import { contaPalavras } from './index.js'
import trataErros from "./erros/funcoesErros.js"

const caminho = process.argv
const link = caminho[2]
const endereco = caminho[3]

fs.readFile(link, 'utf-8',(erro,texto)=>{
    try{
        if (erro) throw erro
        const resultado = contaPalavras(texto)
        criaESalvaArquivo(resultado,endereco)
    }catch{
        trataErros(erro)
    } 
})

async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo =`${endereco}/resultado.txt`
    const textoPalavras = JSON.stringify(listaPalavras)
    try{
        await fs.promises.writeFile(arquivoNovo,textoPalavras);
        console.log("arquivo criando")
    }catch(erro){
        throw erro
    }

}