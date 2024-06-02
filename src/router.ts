import express from 'express';
const router = express.Router();
import handleGet from './controller/defaultcall';
import handlegetusers from './controller/users';
import handlegetbooks from './controller/books';
import checkpassword from './controller/checkpass';
import { homepage,books,validation,user } from './routerdata/routerdata';
// router.post('/books', (req, res, next)=>{
//    let posData = req.body;
//     console.log(posData);
//     res.send(posData.name);
// })
// router.post("/validation", (req,res,next)=>{
//     const {password}=req.body;
    // if (password.length < 8) {
    //     console.log('Password must be at least 8 characters long');
    // }
    // if (!/[A-Z]/.test(password)) {
    //     console.log('Password must contain at least one uppercase letter');
    // }
    // if (!/[a-z]/.test(password)) {
    //     console.log('Password must contain at least one lowercase letter');
    // }
    // if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    //     console.log('Password must contain at least one special character');
    // } else{
    //     console.log("password is valid")
    // }

    // let validate = new Validation();
    // if(validate.checkPassword(password)){
    //     res.send('strong password')
    // }else{
    //     res.send(' password check failed')
    // }
    
// })

    
router.get(homepage, handleGet);
router.get(user, handlegetusers );
router.get(books, handlegetbooks);
router.post(validation,checkpassword)


export default router;