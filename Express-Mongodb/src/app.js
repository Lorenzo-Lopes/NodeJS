import express from 'express'

const app = express();

app.get("/", (req,res)=>{
    res.status(200).send("Curdo De Node.js")
})

export default app