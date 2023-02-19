import dotenv from 'dotenv';

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

dotenv.config()

export const mongoConect = async () => {
    try{
        console.log('Conectando ao MongoDb...')
        await mongoose.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado!')
    }catch(error){
        console.log('Erro Conexão MongoDb' , error)
    }
}
