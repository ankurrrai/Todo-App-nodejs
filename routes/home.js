const express= require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/add-task',homeController.addtask);
router.get('/delete-task',homeController.deleteTask);

module.exports=router;