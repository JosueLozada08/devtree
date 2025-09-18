import server from "./server"
//routing



const port = process.env.PORT || 4000


server.listen(port, () =>{
    console.log('servidor funcionando en el puerto ', port)

    
})