import express from "express"
import livrosRoutes from './livrosRoutes.js'
import autorRoutes from "./autorRoutes.js"


const routes = (app) =>{   
    app.route("/").get((req,res)=> res.status(200).send("Curso de Node.js"))
    app.use(express.json(),livrosRoutes,autorRoutes);

}
export default routes