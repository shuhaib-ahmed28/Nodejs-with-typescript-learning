import  {Application, Request, Response, NextFunction} from 'express';

function handleGet(req: Request, res: Response, next: NextFunction){
    res.send("<h1>welcome router with controller</h1>");
}

export default handleGet;