const express = require("express");
const app = express();
const path = require("path");


const PORT = 3000;
const indexRouter = require("./routes/index");




// app.use(express.static("../client/dist"));

app.use("/", indexRouter);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}  서버 실행`);



});