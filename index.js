//const express = require('express')
import express from 'express' //ESM ecmascript modules 
const app = express()

//routing

app.get('/', (req, res)=> {
    res.send('hola mundo con express')
})

const port = process.env.PORT || 4000


app.listen(port, () =>{
    console.log('servidor funcionando en el puerto ', port)
})