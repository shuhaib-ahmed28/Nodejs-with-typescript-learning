import { Db } from 'mongodb';
import mongoose, {Schema} from 'mongoose';
import { Response } from "express";
import { usermodel } from './schema';

class mongoconnect {
    public connect(res:Response)
    {
        try {
            mongoose.connect('mongodb://localhost:27017/testnew')
            console.log("db connected succesfully")
            //     usermodel.find({}).then((val)=>{
            //     res.json(val);
            // })
            // usermodel.insertMany({
            //     name:'vikram',
            //     age:21,
            //     email:'vikramghost@gmail.com'
            // })
            usermodel.updateOne(
                { name:'vikram'}, {age:'40'}).then((val)=>{
                    res.json(val)
                })

            
        }catch (err:any) {
            console.error(err.message);
            process.exit(1);
            return false;
    } 
}
}
export default mongoconnect;