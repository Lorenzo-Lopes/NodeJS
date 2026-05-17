import livro from "../models/Livro.js";

class LivroController{
    static async listarLivros(req,res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        }catch(erro){
            res.status(500).json({ mesage: `${erro.mesage} - Falha na requisição`})
        }
    
    }
    static async listarLivroPorId(req,res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        }catch(erro){
            res.status(500).json({ mesage: `${erro.mesage} - Falha na requisição do livro`})
            console.log(erro)
        }
    }
    
    static async cadastrarLivro(req,res){
        try{
            const novoLivro = await livro.create(req.body)
            res.status(201).json({
                mesage:'Criado com sucesso',
                livro: novoLivro
            })
        }catch(erro){
            // res.status(500).json ({mesage: `${erro.mesage} - Falha ao tentar cadastrar novo livro`})
            console.log(erro)
        }
    }
    
    static async atualizarLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "livro atualizado"})
        }catch(erro){
            res.status(500).json({ mesage: `${erro.mesage} - Nao foi possivel atualizar o livro.`})
        }
    }
    static async excluirLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: "livro excluido com sucesso."})
        }catch(erro){
            res.status(500).json({ mesage: `${erro.mesage} - Nao foi possivel atualizar o exclusão.`})
        }
    }
}

export default LivroController;