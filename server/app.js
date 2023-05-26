require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const LoginRoutes = require("./routes/login");
const UsersRoutes = require("./routes/users");

const connection = require("./db");
const PORT = process.env.PORT

//for database connection
connection();


// middlewares
app.use(express.json());
app.use(cors());

app.use('/api/users',UsersRoutes)
app.use('/api/login',LoginRoutes)

app.listen(PORT,()=>{
    console.log("server is listening on PORT : "+ PORT)
})



