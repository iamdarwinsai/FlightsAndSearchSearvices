
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
            const result=await this.repository.delete({
                where:{
                    id:deleteId
                }
            });
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
    
    async get(){
        try {
            const result=await this.repository.get();
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
