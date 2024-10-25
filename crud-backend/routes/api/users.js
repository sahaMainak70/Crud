const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router.route("/create").post(userController.createUser);
router.route("/read").get(userController.getAllUsers);
router.route("/read/:id").get(userController.getUser);
router.route("/update").put(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
