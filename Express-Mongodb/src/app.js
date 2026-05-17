import express from 'express'
import conectaNaDataBase  from './config/dbConnect.js';
import routes from './routes/index.js';
const conexao = await conectaNaDataBase()

conexao.on('error',(erro)=>{
    console.error('Erro de conexão: ',erro)
})
conexao.once('open',()=>{
    console.log("Conectado com sucesso.")
})

const app = express();
routes(app)

// app.delete('/livros/:id',(req,res)=>{
//     const index = buscaLivro(req.params.id)
//     livros.splice(index)
//     res.status(200).json(livros)
// })
export default app