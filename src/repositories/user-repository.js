import CrudRepository from './crud-repository.js';
import  db from '../models/index.js';
const {User} = db;
import { where } from 'sequelize';
class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
    async getUserByEmail(email) {
        const user = await User.findOne({where: {email: email}});
        return user;
    }
}
export default UserRepository;