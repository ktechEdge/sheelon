const express = require('express');
const router = express.Router()
module.exports = router;

router.post("/Add",(req, res) => {

    let cat_Text=req.body.CatContent;

    let q=`INSERT INTO \`category_tbl\` (\`Category_Text\`) VALUES ('${cat_Text}')`;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "Category Added",Last_Id:rows.insertId});
            // res.status(200).json({message: "Added"});
            // res.status(200).json(req.crs_data_filtered);
        }

    });
});
router.patch("/Edit",(req, res) => {

    let id=req.body.Cat_id;
    let cat_Text=req.body.CatContent;

    let q=`UPDATE \`category_tbl\`  SET \`Category_Text\`='${cat_Text}' WHERE id=${id} `;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "Updated"});
        }
    });
});
router.delete("/Del",(req, res) => {
        let id=req.body.Cat_id;

    let q=`DELETE FROM \`category_tbl\` WHERE id='${id}' `;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "Deleted"});
            // res.status(200).json({message: "Added"});
            // res.status(200).json(req.crs_data_filtered);
        }

    });

});

router.get("/List",(req, res) => {

    let q="SELECT * FROM `category_tbl` ";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
        }
    });

});
