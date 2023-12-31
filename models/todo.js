const mongoose=require('mongoose');

const taskListSchema=mongoose.Schema({
    description :{
        type:String,
        required:true
    },
    category :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    },
    checked :{
        type:Boolean,
        required:true
    }
});

const Tasks=mongoose.model('TaskList',taskListSchema);
module.exports=Tasks;