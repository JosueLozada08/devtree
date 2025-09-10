const express = require('express')

const app = express()

//routing

app.get('/', (req, res)=> {
    res.send('hola mundo con express')
})
app.get('/ecomerce', (req, res)=> {
    res.send('esta otra ruta es el ecomerce')
})



app.listen(4000, () =>{
    console.log('servidor funcionando')
})