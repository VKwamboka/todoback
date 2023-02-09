import express, { json } from 'express'
import router from './Routers'
// import authrouter from './Router/authRoutes'
// import cors from 'cors'
const app= express()

//Register some Middlewares
// app.use(cors())
app.use(json()) //adds a body to the Request


app.use('/todos', router)
// app.use('/auth',authrouter)


app.listen(4000,()=>{
console.log("Running ...");

})