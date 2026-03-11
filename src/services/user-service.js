import { StatusCodes } from "http-status-codes";
import {UserRepository} from "../repositories/user-repository.js";
const userRepo = new UserRepository();
async function create(data) {
    try{
        const user = await UserRepo.create(data);
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
export default create;