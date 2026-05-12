const fs = require('fs')
const caminho = process.argv
const link = caminho[2]

fs.readFile(link, 'utf-8',(err,text)=>{
    console.log(text)
    return text
})

function verificaPalavrasDuplicadas(text){
    const listaPalavras = text.split(' ')
    const resultado = {}
}
