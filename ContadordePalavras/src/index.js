// import { readFile } from 'fs'
const fs = require('fs')
const caminho = process.argv
const link = caminho[2]

fs.readFile(link, 'utf-8',(erro,texto)=>{
    verificaPalavrasDuplicadas(texto)
})

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra =>{
        resultado[palavra] = (resultado[palavra] || 0)+1
    })
    console.log(resultado)
}
