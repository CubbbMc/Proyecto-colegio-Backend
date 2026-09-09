import mongoose from "mongoose";

const mongoURI = "mongodb+srv://deathgalvis_db_user:contraseñatemp@cluster0.qxkv8ez.mongodb.net/?appName=Cluster0";

console.log("Conectando a MongoDB Atlas...");

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log("Conectado exitosamente a MongoDB Atlas");
    })
    .catch((error) => {
        console.error("Error de conexion:", error.message);
    });



mongoose
.connect(process.env.DATABASE)
.then((data) =>{

    console.log("Connected succesful to database");
    
}).catch((error) => {

    console.log("Unable to connect to database!",error);

});