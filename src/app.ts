import express, {Application, Request, Response, NextFunction} from 'express';
const app: Application = express();
//const os=require ('os')
// import path from 'path';
// import  os  from 'os';
import router from './router';
import bodyParser from 'body-parser';

const port:number = 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use(router);
// const hostname =os.hostname()
// console.log(hostname, 'hostname');
// const homedir=os.homedir()
// console.log(homedir, 'directory');


// const filepath='/home/user/documents/report.pdf';
// const pathObject = path.parse(filepath);
// console.log(pathObject)


app.listen(port);