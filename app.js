const express = require(`express`);
const app = express();
const connection = require('./src/config/DBconnection');
const admin = require('./src/routes/adminRoutes');
connection();//Database connection

app.use(express.json());

app.get('/',(req, res)=>{
    console.log("HOME");
    res.send("Hello world!") // Home
})

app.use('/auth', admin) //admin login



app.listen(3000, ()=>{
    console.log("Server is running...in 3000")
})