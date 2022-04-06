//import { openDb } from './configDB.js';
import { createTable, insertPessoa, updatePessoa } from './Controler/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get( '/', function(req, res){
    res.send("ola mundo");
});

app.post('/pessoa',function(req, res){
    insertPessoa(req.body)
    res.json({
        "statusCode": 200
    })
});

app.put('/pessoa',function(req, res){
    
    if(req.body && !req.body.id){
        res.json({
            "statusCode":"400",
            "msg":"você precisa informar um id"
        })
    }else{
        updatePessoa(req.body)
        res.json({
            "statusCode": 200
        })
    }
});
app.listen(3000,()=>console.log("api-rodando."))