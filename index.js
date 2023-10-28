const express=require('express');
const app =express();
const port =8000;

// setup the to url encoded
app.use(express.urlencoded());

// set up view engine
app.set('view-engine','ejs');
app.set('views','./views');

// setup the db connection
const db=require('./config/mongoose');
// const Tasks=require('./models/todo')

// set up the routes 
app.use('/',require('./routes/index'));






app.listen(port, function(err) {
    if (err){
        console.log(`error in running server : ${err}`);
    };
    console.log(`Server is running on port : ${port}`);
});
