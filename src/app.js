import { openDb } from './configDB.js';
import express from 'express';

const app = express();
app.use(express.json());

openDb();

app.get( '/', function(req, res){
    res.send("ola mundo");
});

app.post('/pessoa',function(req, res){
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
});
app.listen(3000,()=>console.log("api-rodando."))