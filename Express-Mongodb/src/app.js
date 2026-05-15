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

app.get("/livros/:id",(req,res)=>{
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post('/livros',(req,res)=>{
    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")
})

app.put('/livros/:id',(req,res)=>{
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)

})

app.delete('/livros/:id',(req,res)=>{
    const index = buscaLivro(req.params.id)
    livros.splice(index)
    res.status(200).json(livros)
})
export default app