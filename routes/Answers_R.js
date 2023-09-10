const express = require('express');
const router = express.Router()
module.exports = router;


router.post("/Add",(req, res) => {

    let answerObj = {};
    answerObj.student_id = Number(req.body.student_id);
    answerObj.question_id = Number(req.body.question_id);
    answerObj.Answer_Int = Number(req.body.Answer_Int);
    answerObj.Answer_Str = req.body.Answer_Str;
    answerObj.Answer_Time = req.body.Answer_Time;

    const addQuery = `INSERT INTO answers_tbl(student_id,question_id,Answer_Int,Answer_Str,Answer_Time) VALUES(${answerObj.student_id},${answerObj.question_id},${answerObj.Answer_Int},'${answerObj.Answer_Str}',${answerObj.Answer_Time})`;
    db_pool.query(addQuery,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"Answer Added",Last_Id:rows.insertId});
        }
    })
    console.log(answerObj);
});

router.patch("/Edit",(req, res) => {

    let answer_id = Number(req.body.Answer_id);
    let newAnswerObj = {};
    newAnswerObj.student_id = Number(req.body.student_id);
    newAnswerObj.question_id = Number(req.body.question_id);
    newAnswerObj.Answer_Int = Number(req.body.Answer_Int);
    newAnswerObj.Answer_Str = req.body.Answer_Str;
    newAnswerObj.Answer_Time = req.body.Answer_Time;

    const UpdateQuery = `UPDATE answers_tbl SET student_id = ${newAnswerObj.student_id},question_id = ${newAnswerObj.question_id},Answer_Int = ${newAnswerObj.Answer_Int},Answer_Str ='${newAnswerObj.Answer_Str}',Answer_Time = ${newAnswerObj.Answer_Time} WHERE Answer_id = ${answer_id}`;

    //let q=`UPDATE \`answers_tbl\`  SET \`Category_Text\`='${cat_Text}' WHERE id=${id} `;

    db_pool.query(UpdateQuery,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"Answer Updated"});
        }
    })
    console.log(newAnswerObj);
});

router.get("/List",(req, res) => {

    let q="SELECT * FROM `answers_tbl`";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
            // res.status(200).json({message: "Added"});
            // res.status(200).json(req.crs_data_filtered);
        }
    });

});
