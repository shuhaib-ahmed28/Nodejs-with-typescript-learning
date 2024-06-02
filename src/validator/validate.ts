import validator from 'validator';

class Validation{
    public checkPassword(password: string): boolean{
        return validator.isStrongPassword(password, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1});
    }
    public checkusername(username:string):boolean{
        return validator.isLength(username,{min:8,max:undefined})
    }
} 

export default Validation;