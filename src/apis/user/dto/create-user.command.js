import validator from "validator";

class CreateUserCommand {
    id;
    phone;
    name;
    created_at;

    constructor({
        id,
        phone,
        name,
        created_at
    }){
        console.log("createUserCommand")
        try{
            if(
                !validator.isLength(id, {
                min: 1
                })
            ){
                throw "invalid id"
            }
    
            if(
                !validator.isMobilePhone(phone, "ko-KR")
            ){
                throw "invalid phone"
            }
    
            if(
                !validator.isLength(name, {
                    min: 1
                })
            ){
                throw "invalid name"
            }
        }catch(error){

            throw error
        }
    }
}

module.exports = {
    CreateUserCommand,
};