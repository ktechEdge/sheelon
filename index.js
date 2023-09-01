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
    questObj.category =Number(req.body.Category_id);
    questObj.questType = Number(req.body.QuestType);
    questObj.questContent = req.body.QuestContent;

    const addQuery = `INSERT INTO question_id(Category_id,Question_Type,Question_Text) VALUES(${questObj.category},${questObj.questType},'${questObj.questContent}')`;
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
    let quest_id = Number(req.body.Quest_id);
    let questObj = {};
    questObj.category =Number(req.body.Category_id);
    questObj.questType = Number(req.body.QuestType);
    questObj.questContent = req.body.QuestContent;

    const addQuery = `UPDATE question_id SET Category_id = ${questObj.category},Question_Type = ${questObj.questType},Question_Text = '${questObj.questContent}'  WHERE ID = ${quest_id}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
})
app.post("/DeleteQuestion",(req, res) => {
    let quest_id = Number(req.body.Quest_id);
    const addQuery = `DELETE FROM question_id WHERE ID = ${quest_id}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })

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