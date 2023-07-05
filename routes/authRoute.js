const express=require("express");
const { registerController, loginController, logoutController } = require("../controllers/authController");
const router=express.Router();

router.post("/register", function(req,res){registerController});
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports=router;