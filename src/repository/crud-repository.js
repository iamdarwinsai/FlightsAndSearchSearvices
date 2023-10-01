class CrudRepository {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD LAYER");
            throw {
                error
            }
        }
    }

    async delete(deleteId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: deleteId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in CRUD LAYER");
            throw {
                error
            }
        }
    }

    async get(getId) {
        try {
            const result = await this.model.findByPk(getId);
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD LAYER");
            throw {
                error
            }
        }
    }

    async getAll() {
        try {
            const result = await this.model.findByAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in CRUD LAYER");
            throw {
                error
            }
        }
    }

    async update(dataId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: dataId
                }
            })
        } catch (error) {
            console.log("Something went wrong in CRUD LAYER");
            throw {
                error
            }
        }
    }

}

module.exports = CrudRepository;
