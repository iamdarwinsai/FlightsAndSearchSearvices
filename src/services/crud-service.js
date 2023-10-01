
class CrudService{

    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const result=await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at the CRUD service layer");
            throw {
                error
            }
        }
    }

    async delete(deleteId){
        try {
            const result=await this.repository.delete(deleteId);
            return result;
        } catch (error) {
            console.log("Something went wrong at the CRUD service layer");
            throw {
                error
            }
        }
    }

    async get(modelId) {
        try {
            const result = await this.repository.get(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }
    
    async getAll(){
        try {
            const result=await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }

    async update(id,data){
        try {
            const result=await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crus repo");
            throw error;
        }
    }
}

module.exports=CrudService;
