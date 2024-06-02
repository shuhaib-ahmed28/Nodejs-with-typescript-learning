import { sign , decode} from "jsonwebtoken";
import { Jwt } from "jsonwebtoken";

class Authorize{
    generateToken(payload:any, secretkey:string){
        return sign(payload, secretkey);
    } 
}

export default Authorize;

