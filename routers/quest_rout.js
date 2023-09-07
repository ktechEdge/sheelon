const express = require('express');
const router = express.Router();
module.exports = router;


router.post("/Add",(req,res)=>{
    let questObj = {};
    questObj.category =Number(req.body.Category_id);
    questObj.questType = Number(req.body.QuestType);
    questObj.questContent = req.body.QuestContent;
    const addQuery = `INSERT INTO question_tbl(Category_id,Question_Type,Question_Text) VALUES(${questObj.category},${questObj.questType},'${questObj.questContent}')`;
    db_pool.query(addQuery,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
    console.log(questObj);
});
router.patch("/Update",(req ,res)=>{
    let quest_id = Number(req.body.Quest_id);
    let questObj = {};
    questObj.category =Number(req.body.Category_id);
    questObj.questType = Number(req.body.QuestType);
    questObj.questContent = req.body.QuestContent;

    const addQuery = `UPDATE question_tbl SET Category_id = ${questObj.category},Question_Type = ${questObj.questType},Question_Text = '${questObj.questContent}'  WHERE ID = ${quest_id}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
})
router.delete("/Delete/:Quest_id",(req, res) => {
    const addQuery = `DELETE FROM question_tbl WHERE ID = ${Number(req.params.Quest_id)}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })

});

router.get("/List",(req, res) => {
    let categoryId = Number(req.body.cat_Id);
    let addQuery = `SELECT * FROM question_tbl `;
    if ( categoryId > 0) addQuery += `WHERE Category_id = ${categoryId}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows,cat_id:categoryId});
    })
});