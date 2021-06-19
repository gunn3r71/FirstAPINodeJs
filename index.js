const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send("Hello World");
});

app.get('/pt-br',(req,res)=>{
    res.send("Olá mundo!");
});

app.listen( 8080, () => {
    let data = new Date();
    console.log("server started in "+data);
});