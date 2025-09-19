// en este archivo se hara la configuracion del servidor 
//base de datos 
//configuracion de cores 

import express from 'express' //ESM ecmascript modules 
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

const app = express()

connectDB()

app.use(express.json())

app.use('/', router)



//cambios 



export default app