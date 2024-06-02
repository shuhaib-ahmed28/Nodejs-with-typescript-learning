import mongoose, {Schema} from 'mongoose';

 let userSchematable=new mongoose.Schema(
    {
        name : String,
        age : Number, 
        email : String,
    }
   

)
export const usermodel=mongoose.model('users', userSchematable)