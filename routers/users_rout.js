const express = require('express');
const router = express.Router();
module.exports = router;

let UsersObj = {};
router.post("/Add",(req,res)=>{
    UsersObj.firstName = req.body.FirstName;
    UsersObj.lastName = req.body.LastName;
    UsersObj.email = req.body.Email;
    UsersObj.cellPhoneNum = Number(req.body.CellPhoneNum);
    UsersObj.studyField = Number(req.body.StudyField);
    UsersObj.nativeLeng = req.body.NativeLeng;
    UsersObj.idNum = Number(req.body.IdNum);
    UsersObj.password = req.body.Password;
    UsersObj.LVL = req.body.LVL;
    const addQuery = `INSERT INTO users_tbl(First_Name,Last_Name,Email,CellPhoneNum,Study_Field,Native_Lang,ID_Num,Password,LVL) VALUES('${UsersObj.firstName}','${UsersObj.lastName}','${UsersObj.email}',${UsersObj.cellPhoneNum},${UsersObj.studyField},'${UsersObj.nativeLeng}',${UsersObj.idNum},'${UsersObj.password}','${UsersObj.LVL}')`;
    db_pool.query(addQuery,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
    console.log(UsersObj);
});
router.patch("/Update",(req ,res)=>{
    let users_is = Number(req.body.Users_id);
    UsersObj.firstName =req.body.FirstName;
    UsersObj.lastName = req.body.LastName;
    UsersObj.email = req.body.Email;
    UsersObj.cellPhoneNum = Number(req.body.CellPhoneNum);
    UsersObj.studyField = Number(req.body.StudyField);
    UsersObj.nativeLeng = req.body.NativeLeng;
    UsersObj.idNum = Number(req.body.IdNum);
    UsersObj.password = req.body.Password;
    UsersObj.LVL = req.body.LVL;
//First_Name	Last_Name	Email	CellPhoneNum	Study_Field	Native_Lang	ID_Num	Password	LVL
    const addQuery = `UPDATE users_tbl SET First_Name = '${UsersObj.firstName}',Last_Name = '${UsersObj.lastName}',Email = '${UsersObj.email}',CellPhoneNum = ${UsersObj.cellPhoneNum},Study_Field = ${UsersObj.studyField},Native_Lang = '${UsersObj.nativeLeng}',ID_Num = ${UsersObj.idNum},Password = '${UsersObj.password}',LVL = '${UsersObj.LVL}'  WHERE ID = ${users_is}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
})
router.delete("/Delete/:Users_id",(req, res) => {
    const addQuery = `DELETE FROM users_tbl WHERE ID = ${Number(req.params.Users_id)}`;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })

});

router.get("/List",(req, res) => {
    let addQuery = `SELECT * FROM users_tbl `;
    db_pool.query(addQuery,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});

