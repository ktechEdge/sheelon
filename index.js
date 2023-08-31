const express = require('express');
const port = 2507;
const app = express();
app.use(express.json());


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

app.post('/',(req,res)=>{
    res.send("runing");
});


app.post("/AddQuestion",(req,res)=>{
    let questObj = {};
    questObj.questType = req.body.QuestType;
    questObj.dimension = req.body.Dimension;
    questObj.questContent = req.body.QuestContent;

    const addQuery = `INSERT INTO question_id(Question_Type,Question_Text) VALUES(${questObj.questType},${questObj.dimension})`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
    console.log(questObj);
});
app.post("/UpdateQuestion",(req ,res)=>{
    let inx = req.body.index;
    let questObj = {};
    questObj.questType = req.body.QuestType;
    questObj.dimension = req.body.Dimension;
    questObj.questContent = req.body.QuestContent;

    const addQuery = `UPDATE question_id SET Question_Type WHERE ID = ${inx}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
    res.send(`row - ${inx} updated`);
    console.log(inx);
})
app.post("/DeleteQuestion",(req, res) => {
    let inx = req.body.index;
    const addQuery = `DELETE FROM question_id WHERE ID = ${inx}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
    res.send("row - "+ inx + " deleted");
});

app.get("/ReadQuestion",(req, res) => {
    const addQuery = `SELECT * FROM question_id`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});