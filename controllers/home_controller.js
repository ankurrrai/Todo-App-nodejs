//import the model schema
const Tasks=require('../models/todo');


module.exports.home=function(req,res){
    Tasks.find({}).then(function(taskList){
        return res.render('home.ejs', {
            taskList:taskList
           });
    }).catch(function(err){
        console.log(`Error while fecthing the db ${err}`);
    });
    
};

module.exports.addtask=function(req,res){
    Tasks.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,
        checked:false

    }).then(function(newTask){
        console.log(`a new task Added : ${newTask}`);
        return res.redirect('back');
    }).catch(function(err){
        console.log(`Error in db : ${err}`)
    });

};

module.exports.deleteTask=function(req,res){
    let id=req.query.id;
    Tasks.deleteOne( {_id : id} ).then(function(){
        return res.redirect('back');
    }).catch(function(err){
        console.log('error while delete from db', err);
     });
     
}



