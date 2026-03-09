import { StatusCodes } from "http-status-codes";
import { where } from "sequelize";
class CrudRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        }
        catch (error) {
            throw error;
        }

    }
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            throw error;
        }

    }
    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            if (!response) {
                const error = new Error('Resource not found');
                error.status = 404;
                throw error;
            }
            return response;

        } catch (error) {
            throw error;

        }

    }
    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;

        } catch (error) {
            throw error;

        }


    }

}
export default CrudRepository;