import Validation from "../validator/validate";
import checkpassword from "../controller/checkpass";
import mongoconnect from "../model1/dbData";
import { Response } from "express";
import { Db } from "mongodb";
import mongoose, { Schema } from "mongoose";

import { AuthFailureMessage, AuthSuccessMessage } from "../data/authData";

class AuthDao {
  public receiveAuthData(authData: any, res: Response): any {
    // try {
    //   mongoose.connect("mongodb://localhost:27017/testnew");
    //   console.log("db connected succesfully");

    //   let mySchema = new mongoose.Schema({
    //     name: String,
    //     email: String,
    //   });

    //   const userModel = mongoose.model("users", mySchema);
    //   userModel.find({}).then((response) => {
    //     console.log(response, 'dfkjhjsfdhs dksjhk sjdh gsdjkh');
    //     res.json(response);
    //   });

    //   //console.log(data, 'mymodel');
    // } catch (err: any) {
    //   console.error(err.message);
    //   process.exit(1);
    //   return false;
    // }

    // let validate= new Validation();
    // if (validate.checkPassword(authData.password)){

    //     return AuthSuccessMessage;

    // }else {
    //     return AuthFailureMessage;
    // }

     let connection = new mongoconnect();
     connection.connect(res);
    
  }
}
export default AuthDao;
