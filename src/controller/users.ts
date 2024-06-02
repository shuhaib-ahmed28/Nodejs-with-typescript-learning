import  {Application,Request,Response,NextFunction} from "express";
import {users} from "../data/datafile";
import Validation from "../validator/validate";

function handlegetusers(req: Request, res: Response, next: NextFunction){

    let validate = new Validation();
    if(validate.checkPassword("")){

    }else{
        
    }
    res.send(users)
}
export default handlegetusers; 