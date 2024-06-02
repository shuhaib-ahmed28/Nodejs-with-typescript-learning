import { Application,Request,Response, NextFunction } from "express";
import {books} from "../data/datafile";

function handlegetbooks(req:Request, res:Response, next:NextFunction){
    res.send(books);
}
export default handlegetbooks;