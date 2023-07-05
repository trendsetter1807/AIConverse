const express=require("express");
const { summaryController, paragraphController, jsconverterController, chatbotController, scifiImageController } = require("../controllers/openAi");
const router=express.Router();

router.post('/summary', summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);


module.exports=router;