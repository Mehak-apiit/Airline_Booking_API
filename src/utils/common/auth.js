import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {ServerConfig} from '../../config/serverConfig.js';
async function checkPassword(plainPassword, encryptedPassword) {
    try{
        return bcrypt.compareSync(plainPassword, encryptedPassword);
    }catch(error) {
        throw error;
    }
}
async function createToken(input) {
    try{
        return jwt.sign(input,ServerConfig.JWT_SECRET,{expiresIn: ServerConfig.JWT_EXPIRY})
    } catch(error){
        throw error;
    }
}
export {checkPassword,createToken}