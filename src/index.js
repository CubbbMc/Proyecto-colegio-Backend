import app from "./server.js";
import "dotenv/config";
import "./connection.js"
app.listen(3001,() => {

    console.log("servidor contectado a http://localhost:3001");

});