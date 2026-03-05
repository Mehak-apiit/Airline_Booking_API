import { StatusCodes } from "http-status-codes";
import { where } from "sequelize";
class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        const response = await this.model.create(data);
        return response;

    }
    async getAll() {
        const response = await this.model.findAll();
        return response;

    }
    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response){
            const error = new Error('Resource not found');
            error.status = 404;
            throw error;
        }
        return response;

    }
    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        return response;

    }
    
}
export default CrudRepository;