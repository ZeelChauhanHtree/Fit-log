const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/loadc',(req,res)=>{
    res.send('hiii');
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react",
    port: '3306'
});

app.get('/getemp/',(req,res)=>{
    const cid=req.params.cid;
    db.query('select * from employee',(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
        // db.release();
    });
});


app.listen(3002, () => {
    console.log('Sucessfully Connected !!');
}); 