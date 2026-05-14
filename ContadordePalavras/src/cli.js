import fs from 'fs'
import { contaPalavras } from './index.js'
import trataErros from "./erros/funcoesErros.js"
import { montaSaidaArquivo } from './helpers.js'
import {Command} from 'commander'
import { text } from 'stream/consumers'
import path from 'path'
const program = new Command()
import chalk  from 'chalk'

program.version('0.0.1').option('-t, --texto <string>', 'Caminho do texto a ser processado')
        .option('-d --destino <string>', 'Caminho da pasta onde o arquivo sera salvo')
        .action((options)=>{
            const {texto,destino} = options
            if (!texto || !destino){
                console.error("erro: favor inserir caminho de origem e destido")
                program.help()
                return
            }
            const caminhoTexto = path.resolve(texto)
            const caminhoDestino = path.resolve(destino)
            try{
                processaArquivo(caminhoTexto,caminhoDestino)
                console.log (chalk.green("texto processado com sucesso"))
            }catch(erro){
                console.log(chalk.red('Ocorreu um erro no processamento: '), erro)
            }
        })
program.parse()


function processaArquivo(texto,destino){
    
    fs.readFile(texto, 'utf-8',(erro,texto)=>{
        try{
            if (erro) throw erro
            const resultado = contaPalavras(texto)
            criaESalvaArquivo(resultado,destino)
        }catch{
            trataErros(erro)
        } 
    })
}

// async function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo =`${endereco}/resultado.txt`
//     const textoPalavras = JSON.stringify(listaPalavras)
//     try{
//         await fs.promises.writeFile(arquivoNovo,textoPalavras);
//         console.log("arquivo criando")
//     }catch(erro){
//         throw erro
//     }
// }


async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo =`${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras)
    fs.promises.writeFile(arquivoNovo,textoPalavras).then((json)=>{
        console.log("arquivo criado")
    }).catch((erro)=>{
        throw erro
    }).finally(()=> console.log('operação finalizada'))

}