//db
const mysql = require("mysql")
const DB_CONFIG = require("../../config")

//dto
const { CreateUserCommand } = require("./dto/create-user.command")

const connection = mysql.createConnection(DB_CONFIG)

class UserService {
    constructor(connection){
        if(!connection){

            throw "db connection error"
        }

        this.connection = connection
    }

    async createUser(req, res, next){
        const createUserDto = new CreateUserCommand({
            id: "1",
            phone: "01089529564",
            name: "juno",
            created_at: new Date().toISOString()
        })

        console.log(createUserDto)

        this.connection.query()
    }
}

module.exports = {
    userService: new UserService()
}