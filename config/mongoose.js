const mongoose=require('mongoose');

main().catch(function(err) {
    if (err) {
        console.log('error while eastablished connect from db : ', err);
    };
})

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/task_list_db');
};

// accuire the connection
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error while connecting db'));
db.once('open',function(){
    console.log(`connection has eastablished!`);
});