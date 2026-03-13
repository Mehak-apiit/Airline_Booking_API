import { StatusCodes } from "http-status-codes";
import {UserRepository} from "../repositories/user-repository.js";
const userRepo = new UserRepository();
import {Auth} from '../utils/common/auth.js';
async function create(data) {
    try{
        const user = await userRepo.create(data);
        return user;
    } catch(error) {
        if (error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError') {
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                throw error;
            }
            throw error;
    }
}
async function signin(data) {
    try{
        const user = await userRepo.getUserByEmail(data.email);
        if(!user){
            throw error;
        }
        const passwordMatch = Auth.checkPassword(data.password,user.password);
        if(!passwordMatch){
            throw error;
        }
        const jwt = Auth.createToken({id: user.id, email: user.email});
        return jwt;
    } catch(error) {
       
            throw error;
    }
}
async function checkPassword(plainPassword,encryptedPassword){
    try{
        return bcrypt.compareSync(plainPassword,encryptedPassword);
    }catch(error){
        throw error;
    }
}
async function isAuthenticated(token){
    try{
        if(!token){
            throw error;
        }
        const respose = Auth.verifyToken(token);
        const user = await userRepo.get(respose.id);
        if(!user){
            throw error;
        }
        return user.id;
    }catch(error){
        if(error.name == 'jsonWebTokenError'){
            throw error;
        }
        if(error.name == 'TokenExpiredError'){
            throw error;
        }
        throw error;
    }
}
export {create,signin,checkPassword,isAuthenticated};