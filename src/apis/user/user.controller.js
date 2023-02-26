//core
const { Router } = require("express")

//service
const { userService } = require("./user.service")


class UserController {
    router

    constructor(userService){

        this.service = userService
        this.router = new Router()

        this.router.get(
            '/user',
            this.service.createUser.bind(this)
        )
    }


}

module.exports = {
    userController: new UserController()
}