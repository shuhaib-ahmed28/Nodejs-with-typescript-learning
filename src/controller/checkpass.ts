import { Application,Request,Response, NextFunction } from "express";
import Authorize from "../security/authorization";
import AuthDao from "../dao/authDao";
import { decode} from "jsonwebtoken";
import Validation from "../validator/validate";

function checkpassword(req: Request, res: Response, next: NextFunction){
    const AuthData = req.body;
    let authdao = new AuthDao();
    let response = authdao.receiveAuthData(AuthData, res);
    //console.log(response, 'response');
    //res.json(response);
    // let authorize = new Authorize();
    // let token = authorize.generateToken({name: 'vijay'}, 'dsfjkajbf');

    // function decoded ( ){
    //     try{
    //         const decodetoken= decode(token);
    //         console.log(decodetoken);
    //         return decodetoken;
    //     } catch (error){
    //         console.error('failed to decode token', error)
    //         return null;
    //     }

    // };
    // res.send(token);
    // res.header('authorization', token);
    // res.send(response);
    
   

    // let validate=new Validation()
    // if(validate.checkPassword(AuthData.password)){
    //     res.send('strong password')
    // }else{
    //     res.send('try another password your password is weak')
    // }
}
export default checkpassword;