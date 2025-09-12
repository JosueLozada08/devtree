// Importamos la librería mongoose para conectarnos a MongoDB
import mongoose from 'mongoose'

// Función asíncrona que conecta a la base de datos MongoDB
export const connectDB = async () => {
    try {
        // Usamos mongoose.connect() para iniciar la conexión con la base de datos.
        // La URL de conexión se obtiene desde una variable de entorno (MONGO_URI),
        // lo que mejora la seguridad (no exponemos usuario y contraseña en el código).
        const { connection } = await mongoose.connect(process.env.MONGO_URI)

        // Construimos un string con el host y puerto de la conexión,
        // útil para verificar en qué servidor se estableció la conexión.
        const url = `${connection.host}:${connection.port}`

        // Si la conexión fue exitosa, mostramos un mensaje en consola
        console.log(` MongoDB Conectado en ${url}`)

    } catch (error) {
        // Si ocurre un error durante la conexión, mostramos el mensaje del error
        console.log(` Error al conectar a MongoDB: ${error.message}`)

        // Terminamos el proceso con código de salida 1 (indica error en Node.js)
        process.exit(1)
    }
}
