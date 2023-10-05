const express = require('express');
const router = express.Router()
module.exports = router;


router.post("/Add",(req, res) => {

    let answerObj = {};
    answerObj.student_id = Number(req.body.student_id);
    answerObj.question_id = Number(req.body.question_id);
    answerObj.Answer_Int = Number(req.body.Answer_Int);
    answerObj.Answer_Str = req.body.Answer_Str;
    // answerObj.Answer_Time = req.body.Answer_Time; // using default

    const addQuery = `INSERT INTO answers_tbl(student_id,question_id,Answer_Int,Answer_Str) VALUES(${answerObj.student_id},${answerObj.question_id},${answerObj.Answer_Int},'${answerObj.Answer_Str}')`;
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

    const UpdateQuery = `UPDATE answers_tbl SET student_id = ${newAnswerObj.student_id},question_id = ${newAnswerObj.question_id},Answer_Int = ${newAnswerObj.Answer_Int},Answer_Str ='${newAnswerObj.Answer_Str}' WHERE Answer_id = ${answer_id}`;

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

router.post("/AnsCal",(req, res) => {
    let totalCal = 0;
    let {student_id} =req.body;
    let q1=`SELECT C.Category_Text, SUM(A.Answer_Int) AS 'GRADE'`;
        q1 += ` FROM question_tbl Q JOIN answers_tbl A`;
        q1 += ` ON Q.ID = A.question_id JOIN  category_tbl C`;
        q1 += ` ON C.ID = Q.Category_ID WHERE A.student_id = ${student_id} GROUP BY C.Category_Text`;
     let   q2 = ` SELECT SUM(Answer_Int) FROM answers_tbl WHERE student_id = ${student_id}`;

    db_pool.query(q1, function(err, rows, fields) {

        if (err) {
            res.status(500).json({message: err})
            // throw err;
        } else {
            for (let i of rows) {
                totalCal += Number(i.GRADE);
            }
            res.status(200).json({rows, totalCal})
        }
    });
});

