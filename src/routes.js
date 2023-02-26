const { Router } = require("express");

//controller
const userController = require("./apis/user/user.controller")


const router = new Router();

router.get("/healthcheck", (req, res, next) => {
  res.send();
  next();
});


router.use(userController.router);

module.exports = {
  router,
};
