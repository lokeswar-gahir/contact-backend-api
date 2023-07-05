const express = require('express');
const errorHandler = require("./middleware/errorHandler");
require('dotenv').config();
const connectDb = require('./config/dbConnection');

const app = express();
connectDb();

const port  = process.env.PORT || 3000;
// const port  = 3001;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactRouters'));
app.use("/api/users", require('./routes/userRouters'));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Listening on port ${port}...\n`);
});

app.get('/',(req,res)=>{
    console.log("On Homepage.");
    res.send("Home page.");
});