const express = require('express');
const router = express.Router();
module.exports = router;

let UsersObj = {};
router.post("/Add",(req,res)=>{
    let{First_Name,Last_Name,Email,CellPhoneNum,Study_Field,Native_Lan,ID_Num,Password,LVL} = req.body;
    let Query = `INSERT INTO users_tbl`;
          Query +=`(First_Name,Last_Name,Email,CellPhoneNum,Study_Field,Native_Lan,ID_Num,Password,LVL) `;
          Query += `VALUES('${First_Name}','${Last_Name}','${Email}',${CellPhoneNum},${Study_Field},'${Native_Lan}',${ID_Num},'${Password}','${LVL}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
    console.log(UsersObj);
});
router.patch("/Update/:id",(req ,res)=>{
    let{First_Name,Last_Name,Email,CellPhoneNum,Study_Field,Native_Lan,ID_Num,LVL} = req.body;
    let ID = req.params.id;
    let Query = `UPDATE users_tbl SET First_Name = '${First_Name}',Last_Name = '${Last_Name}',`;
        Query += `Email = '${Email}',CellPhoneNum = ${CellPhoneNum},Study_Field = ${Study_Field},`;
        Query += `Native_Lan = '${Native_Lan}',ID_Num = ${ID_Num},LVL = '${LVL}'  WHERE ID = ${ID}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
})
router.patch("/UpdatePass/:id",(req ,res)=>{
    let{Password} = req.body;
    let ID = req.params.id;
    let Query = `UPDATE users_tbl SET Password = '${Password}'  WHERE ID = ${ID}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })
})
router.delete("/Delete/:id",(req, res) => {
    const Query = `DELETE FROM users_tbl WHERE ID = ${req.params.id}`;
    db_pool.query(Query,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK"});
        }
    })

});

router.get("/List",(req, res) => {
    let Query = `SELECT * FROM users_tbl `;
    db_pool.query(Query,function (err,rows,fields){
        if (err) res.status(500).json({message: err});
        else res.status(200).json({rows:rows});
    })
});

