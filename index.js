const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.json({mensagem:"Hello world"});
});

app.get('/pt-br',(req,res)=>{
    res.json({mensagem : "Olá mundo"});
});

app.listen( 8080, () => {
    let data = new Date();
    console.log("server started in "+data);
});