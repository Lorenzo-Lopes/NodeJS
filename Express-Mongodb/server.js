import app from "./src/app.js"
const PORT = 3000

const rotas= {
    "/":"Curso de Node.js",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na rota Autores"
}

app.listen(PORT, () =>{
    console.log('Servidor Escutando')
})