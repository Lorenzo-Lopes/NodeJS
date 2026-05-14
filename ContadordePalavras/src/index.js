// import { readFile } from 'fs'
const fs = require('fs')
const caminho = process.argv
const link = caminho[2]

fs.readFile(link, 'utf-8',(erro,texto)=>{
    quebrandoParagrafos(texto)
    //verificaPalavrasDuplicadas(texto)
})

function quebrandoParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n')
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if(!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    console.log(contagem)
}
function limpaPalavras (palavra){
    return palavra.replace(/[.,\'/#!$%\^&\*;:{}=\-_`~()]/g, '')
}
function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra =>{
        if (palavra.length >= 3 ){
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0)+1
        }
    })
    return resultado
}
