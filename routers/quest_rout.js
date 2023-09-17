const express = require('express');
const router = express.Router();
module.exports = router;


router.post("/Add",(req,res)=>{
    let {Category_id,Question_Type,Question_Text} = req.body;
    let Query = `INSERT INTO question_tbl(Category_id,Question_Type,Question_Text) `
        Query += `VALUES('${Category_id}','${Question_Type}','${Question_Text}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
});
router.patch("/Update/:id",(req ,res)=>{
    let ID = req.params.id;
    let {Category_id,Question_Type,Question_Text} = req.body;

    let Query = `UPDATE question_tbl SET Category_id = '${Category_id}',`
        Query +=  `Question_Type = '${Question_Type}',Question_Text = '${Question_Text}'  WHERE ID = ${ID}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
})
router.delete("/Delete/:id",(req, res) => {
    let query = `DELETE FROM question_tbl WHERE ID = ${req.params.id}`;
    db_pool.query(query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })

});

router.get("/List",(req, res) => {
    let categoryId = req.body.cat_id;
    let addQuery = `SELECT * FROM question_tbl `;
    if ( categoryId > 0) addQuery += `WHERE Category_id = ${categoryId}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows,cat_id:categoryId});
    })
});