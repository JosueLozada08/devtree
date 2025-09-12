import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    name:{
        type: String,
        required: true, //para que el campo sea obligatorio 
        trim: true
    },
    email:{
        type: String,
        required: true, //para que el campo sea obligatorio 
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true, //para que el campo sea obligatorio 
        trim: true
    },
})

const User = mongoose.model('User',userSchema)
/* {
    "name": "Josue ",
    "email": "correo@correo.com",
    "password": "password"
} */