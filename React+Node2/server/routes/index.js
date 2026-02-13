const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    console.log('서버 접근');
    // res.send('hello world');
    
    
});

module.exports = router;

