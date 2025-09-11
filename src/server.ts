// en este archivo se hara la configuracion del servidor 
//base de datos 
//configuracion de cores 

import express from 'express' //ESM ecmascript modules 
import router from './router'
const app = express()

app.use('/', router)







export default app