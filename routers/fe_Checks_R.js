const express = require('express');
const router = express.Router();
module.exports = router;

router.get("/login",(req, res) => {
    res.render("login_page.ejs", {pageTitle: "דף התחברות", data: {}});
});