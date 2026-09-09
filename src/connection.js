import mongoose from "mongoose";

mongoose
.connect(process.env.DATABASE)
.then((data) =>{

    console.log("Connected succesful to database");
    
}).catch((error) => {

    console.log("Unable to connect to database!",error);

});